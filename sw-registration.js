(function () {
  'use strict';

  let SUCCESS_HANDLERS = [];
  let ERROR_HANDLERS = [];

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/slack-clone/loginsw.js', {
      scope: '/slack-clone/login'
    }).then(function (reg) {
      let current = Promise.resolve();

      for (let i = 0, len = SUCCESS_HANDLERS.length; i < len; i++) {
        current = current.then(function () {
          return SUCCESS_HANDLERS[i](reg);
        });
      }

      return current.then(function () {
        console.log('Service Worker registration succeeded. Scope is ' + reg.scope);
      });
    }).catch(function (error) {
      let current = Promise.resolve();

      for (let i = 0, len = ERROR_HANDLERS.length; i < len; i++) {
        current = current.then(function () {
          return ERROR_HANDLERS[i](error);
        });
      }

      return current.then(function () {
        console.log('Service Worker registration failed with ' + error);
      });
    });
  }

}());
