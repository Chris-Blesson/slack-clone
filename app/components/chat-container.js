import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import fetch from 'fetch';
import { inject as service } from '@ember/service';
export default class ChatContainerComponent extends Component {

    @tracked messages = [];
    @service auth;

    @action
    async deleteMessage(messageId) {
        await fetch(`/api/messages/${messageId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const messageIds = this.messages.map(message => message.id);
        const idxToDelete = messageIds.indexOf(messageId);
        this.messages.splice(idxToDelete,1);
        this.messages = this.messages;

    }

    @action
    async loadMessages() {
        const { channel: { id, teamId }, } = this.args;
        const response = await fetch(`/api/teams/${teamId}/channels/${id}/messages`);
        this.messages = await response.json();
    }

    @action
    async createMessage(body) {
        const { channel: { id, teamId }, } = this.args;
        const userId = this.auth.currentUserId;
        const response = await fetch(`/api/messages`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'teamId': teamId,
                'channelId': id,
                userId,
                body
            })
        });
        if (!response.ok) throw Error('Couldnt save message');
        const user = await (await fetch(`/api/users/${userId}`)).json();
        const messageData = await response.json();
        this.messages = [
            ...this.messages, { ...messageData, user }
        ]
    }
}
