import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class LoginFormComponent extends Component {

    @service auth;
    @tracked userId = '2';

    get isDisabled() {
        return !this.userId;
    }



    @action
    onLoginFormSubmit(event) {
        const { target } = event;
        const val = target.querySelector('select').value;
        event.preventDefault();
        this.auth.loginWithUserId(val);
    }

    @action
    onSelectChanged(event) {
        this.userId = event.target.value;
    }
}
