'use strict';

define("shlack/tests/acceptance/logout-test", ["qunit", "@ember/test-helpers", "ember-qunit", "shlack/tests/stubs/auth-service"], function (_qunit, _testHelpers, _emberQunit, _authService) {
  "use strict";

  (0, _qunit.module)('Acceptance | logging out', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    hooks.beforeEach(function () {
      this.owner.register('service:auth', _authService.default);
    });
    (0, _qunit.test)('visiting teams and clicking logout', async function (assert) {
      this.owner.lookup('service:auth').currentUserId = '1';
      await (0, _testHelpers.visit)('/teams');
      assert.equal((0, _testHelpers.currentURL)(), '/teams');
      await (0, _testHelpers.click)(".team-sidebar__logout-button");
      assert.equal((0, _testHelpers.currentURL)(), '/login');
    });
  });
});
define("shlack/tests/helpers/ember-cli-clipboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _exports.triggerError = triggerError;
  _exports.triggerSuccess = triggerSuccess;

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }
  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */


  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }
  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  function _default() {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app) {
      let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.copy-btn';
      fireComponentActionFromApp(app, selector, 'success');
    });
    Ember.Test.registerAsyncHelper('triggerCopyError', function (app) {
      let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.copy-btn';
      fireComponentActionFromApp(app, selector, 'error');
    });
  }
  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }
  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentAction(context, selector, actionName) {
    let component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }
  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */


  function getComponentBySelector(context) {
    let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.copy-btn';
    let emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }
  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireActionByName(component, actionName) {
    let action = component[actionName];
    Ember.run(() => {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define("shlack/tests/integration/components/channel-footer-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | channel-footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "okto/AO6",
        "block": "{\"symbols\":[],\"statements\":[[5,\"channel-footer\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tBFepzMv",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"channel-footer\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("shlack/tests/integration/components/channel-header-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | channel-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IGs/PNBW",
        "block": "{\"symbols\":[],\"statements\":[[5,\"channel-header\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "PB7nx+Gw",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"channel-header\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("shlack/tests/integration/components/chat-container-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | chat-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "FvHkbu/h",
        "block": "{\"symbols\":[],\"statements\":[[5,\"chat-container\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3AII/LvA",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"chat-container\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("shlack/tests/integration/components/login-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | login-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "BinZRtNg",
        "block": "{\"symbols\":[],\"statements\":[[5,\"login-form\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      let button =
      /** @type {HTMLInputElement}*/
      (0, _testHelpers.find)('input[type="submit"]');
      assert.equal(button.disabled, true);
      await (0, _testHelpers.fillIn)('select', '1');
      assert.equal(button.disabled, true);
    });
  });
});
define("shlack/tests/integration/components/message-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | message', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "z9/hTCRh",
        "block": "{\"symbols\":[],\"statements\":[[5,\"message\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "kSB66Pv7",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"message\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("shlack/tests/integration/components/team-selector-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | team-selector', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ARuSscCE",
        "block": "{\"symbols\":[],\"statements\":[[5,\"team-selector\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "eF39hDvV",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"team-selector\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("shlack/tests/integration/components/team-sidebar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | team-sidebar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "P81Ydo2/",
        "block": "{\"symbols\":[],\"statements\":[[5,\"team-sidebar\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tpRE2tVj",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"team-sidebar\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("shlack/tests/integration/helpers/format-timestamp-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | format-timestamp', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "KtxTwjGW",
        "block": "{\"symbols\":[],\"statements\":[[1,[28,\"format-timestamp\",[[24,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("shlack/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/channel-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/channel-footer.js should pass ESLint\n\n');
  });
  QUnit.test('components/channel-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/channel-header.js should pass ESLint\n\n');
  });
  QUnit.test('components/chat-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/chat-container.js should pass ESLint\n\n');
  });
  QUnit.test('components/login-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/login-form.js should pass ESLint\n\n');
  });
  QUnit.test('components/message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/message.js should pass ESLint\n\n');
  });
  QUnit.test('components/team-selector.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/team-selector.js should pass ESLint\n\n');
  });
  QUnit.test('components/team-sidebar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/team-sidebar.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/format-timestamp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-timestamp.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });
  QUnit.test('routes/teams.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/teams.js should pass ESLint\n\n');
  });
  QUnit.test('routes/teams/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/teams/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/teams/team.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/teams/team.js should pass ESLint\n\n');
  });
  QUnit.test('routes/teams/team/channel.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/teams/team/channel.js should pass ESLint\n\n');
  });
  QUnit.test('routes/teams/team/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/teams/team/index.js should pass ESLint\n\n');
  });
  QUnit.test('services/auth.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/auth.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/background-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/background-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/background-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/background-size.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-radius.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-radius.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-widths.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-widths.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/font-weights.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/font-weights.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/fonts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/fonts.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/letter-spacing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/letter-spacing.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/line-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/line-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/margin.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/max-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/max-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/max-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/max-width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/min-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/min-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/min-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/min-width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/negative-margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/negative-margin.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/opacity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/opacity.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/padding.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/padding.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/screens.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/screens.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/shadows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/shadows.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/svg-fill.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/svg-fill.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/svg-stroke.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/svg-stroke.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/tailwind.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/tailwind.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/text-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/text-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/text-sizes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/text-sizes.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/z-index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/z-index.js should pass ESLint\n\n');
  });
  QUnit.test('utils/date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/date.js should pass ESLint\n\n');
  });
});
define("shlack/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('shlack/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shlack/templates/components/channel-footer.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shlack/templates/components/channel-footer.hbs should pass TemplateLint.\n\nshlack/templates/components/channel-footer.hbs\n  2:4  error  Incorrect indentation for `<form>` beginning at L2:C4. Expected `<form>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:8  error  Incorrect indentation for `<h1>` beginning at L5:C8. Expected `<h1>` to be at an indentation of 6 but was found at 8.  block-indentation\n  9:8  error  Incorrect indentation for `<button>` beginning at L9:C8. Expected `<button>` to be at an indentation of 6 but was found at 8.  block-indentation\n  21:8  error  Incorrect indentation for `<label>` beginning at L21:C8. Expected `<label>` to be at an indentation of 6 but was found at 8.  block-indentation\n  23:8  error  Incorrect indentation for `<input>` beginning at L23:C8. Expected `<input>` to be at an indentation of 6 but was found at 8.  block-indentation\n  27:8  error  Incorrect indentation for `<button>` beginning at L27:C8. Expected `<button>` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:12  error  Incorrect indentation for `Message Input\n        ` beginning at L6:C12. Expected `Message Input\n        ` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:12  error  Incorrect indentation for `<svg>` beginning at L11:C12. Expected `<svg>` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:16  error  Incorrect indentation for `<path>` beginning at L13:C16. Expected `<path>` to be at an indentation of 14 but was found at 16.  block-indentation\n  30:12  error  Incorrect indentation for `SEND\n        ` beginning at L30:C12. Expected `SEND\n        ` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('shlack/templates/components/channel-header.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shlack/templates/components/channel-header.hbs should pass TemplateLint.\n\nshlack/templates/components/channel-header.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:4  error  Incorrect indentation for `<form>` beginning at L13:C4. Expected `<form>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<h3>` beginning at L3:C8. Expected `<h3>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:8  error  Incorrect indentation for `<h4>` beginning at L8:C8. Expected `<h4>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `<span>` beginning at L4:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:12  error  Incorrect indentation for `{{@title}}` beginning at L5:C12. Expected `{{@title}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  9:12  error  Incorrect indentation for `{{@description}}` beginning at L9:C12. Expected `{{@description}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:8  error  Incorrect indentation for `<label>` beginning at L16:C8. Expected `<label>` to be at an indentation of 6 but was found at 8.  block-indentation\n  18:8  error  Incorrect indentation for `<input>` beginning at L18:C8. Expected `<input>` to be at an indentation of 6 but was found at 8.  block-indentation\n  21:8  error  Incorrect indentation for `<button>` beginning at L21:C8. Expected `<button>` to be at an indentation of 6 but was found at 8.  block-indentation\n  22:12  error  Incorrect indentation for `<svg>` beginning at L22:C12. Expected `<svg>` to be at an indentation of 10 but was found at 12.  block-indentation\n  24:16  error  Incorrect indentation for `<path>` beginning at L24:C16. Expected `<path>` to be at an indentation of 14 but was found at 16.  block-indentation\n');
  });
  QUnit.test('shlack/templates/components/chat-container.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shlack/templates/components/chat-container.hbs should pass TemplateLint.\n\nshlack/templates/components/chat-container.hbs\n  5:4  error  Incorrect indentation for `{{yield}}` beginning at L5:C4. Expected `{{yield}}` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
  QUnit.test('shlack/templates/components/login-form.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shlack/templates/components/login-form.hbs should pass TemplateLint.\n\nshlack/templates/components/login-form.hbs\n  23:8  error  Incorrect indentation for `{{#if}}` beginning at L23:C8. Expected `{{#if}}` to be at an indentation of 10 but was found at 8.  block-indentation\n');
  });
  QUnit.test('shlack/templates/components/message.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shlack/templates/components/message.hbs should pass TemplateLint.\n\nshlack/templates/components/message.hbs\n  3:4  error  Incorrect indentation for `<figure>` beginning at L3:C4. Expected `<figure>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:4  error  Incorrect indentation for `<div>` beginning at L9:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  26:4  error  Incorrect indentation for `<button>` beginning at L26:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<img>` beginning at L4:C8. Expected `<img>` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `<h5>` beginning at L10:C8. Expected `<h5>` to be at an indentation of 6 but was found at 8.  block-indentation\n  21:8  error  Incorrect indentation for `<p>` beginning at L21:C8. Expected `<p>` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:12  error  Incorrect indentation for `<a>` beginning at L11:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  15:12  error  Incorrect indentation for `<span>` beginning at L15:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:12  error  Incorrect indentation for `<time>` beginning at L16:C12. Expected `<time>` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:16  error  Incorrect indentation for `{{@message.user.name}}` beginning at L13:C16. Expected `{{@message.user.name}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  17:16  error  Incorrect indentation for `{{format-timestamp}}` beginning at L17:C16. Expected `{{format-timestamp}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  22:12  error  Incorrect indentation for `{{@message.body}}` beginning at L22:C12. Expected `{{@message.body}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  31:8  error  Incorrect indentation for `\uD83D\uDDD1\n    ` beginning at L31:C8. Expected `\uD83D\uDDD1\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n');
  });
  QUnit.test('shlack/templates/components/team-selector.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shlack/templates/components/team-selector.hbs should pass TemplateLint.\n\nshlack/templates/components/team-selector.hbs\n  5:2  error  Incorrect indentation for `<LinkTo>` beginning at L5:C2. Expected `<LinkTo>` to be at an indentation of 4 but was found at 2.  block-indentation\n');
  });
  QUnit.test('shlack/templates/components/team-sidebar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shlack/templates/components/team-sidebar.hbs should pass TemplateLint.\n\nshlack/templates/components/team-sidebar.hbs\n  3:4  error  Incorrect indentation for `<header>` beginning at L3:C4. Expected `<header>` to be at an indentation of 2 but was found at 4.  block-indentation\n  30:4  error  Incorrect indentation for `<nav>` beginning at L30:C4. Expected `<nav>` to be at an indentation of 2 but was found at 4.  block-indentation\n  54:4  error  Incorrect indentation for `<footer>` beginning at L54:C4. Expected `<footer>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `<div>` beginning at L4:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  19:8  error  Incorrect indentation for `<div>` beginning at L19:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:12  error  Incorrect indentation for `<h1>` beginning at L5:C12. Expected `<h1>` to be at an indentation of 10 but was found at 12.  block-indentation\n  9:12  error  Incorrect indentation for `<div>` beginning at L9:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  6:16  error  Incorrect indentation for `{{@team.name}}` beginning at L6:C16. Expected `{{@team.name}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  10:16  error  Incorrect indentation for `<svg>` beginning at L10:C16. Expected `<svg>` to be at an indentation of 14 but was found at 16.  block-indentation\n  13:16  error  Incorrect indentation for `<span>` beginning at L13:C16. Expected `<span>` to be at an indentation of 14 but was found at 16.  block-indentation\n  11:20  error  Incorrect indentation for `<circle>` beginning at L11:C20. Expected `<circle>` to be at an indentation of 18 but was found at 20.  block-indentation\n  14:20  error  Incorrect indentation for `Chris Blesson\n                ` beginning at L14:C20. Expected `Chris Blesson\n                ` to be at an indentation of 18 but was found at 20.  block-indentation\n  20:12  error  Incorrect indentation for `<svg>` beginning at L20:C12. Expected `<svg>` to be at an indentation of 10 but was found at 12.  block-indentation\n  21:16  error  Incorrect indentation for `<path>` beginning at L21:C16. Expected `<path>` to be at an indentation of 14 but was found at 16.  block-indentation\n  31:8  error  Incorrect indentation for `<div>` beginning at L31:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  45:4  error  Incorrect indentation for `{{#each}}` beginning at L45:C4. Expected `{{#each}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  32:12  error  Incorrect indentation for `<h2>` beginning at L32:C12. Expected `<h2>` to be at an indentation of 10 but was found at 12.  block-indentation\n  34:12  error  Incorrect indentation for `<button>` beginning at L34:C12. Expected `<button>` to be at an indentation of 10 but was found at 12.  block-indentation\n  36:16  error  Incorrect indentation for `<svg>` beginning at L36:C16. Expected `<svg>` to be at an indentation of 14 but was found at 16.  block-indentation\n  38:20  error  Incorrect indentation for `<path>` beginning at L38:C20. Expected `<path>` to be at an indentation of 18 but was found at 20.  block-indentation\n  46:7  error  Incorrect indentation for `<LinkTo>` beginning at L46:C7. Expected `<LinkTo>` to be at an indentation of 6 but was found at 7.  block-indentation\n  50:17  error  Incorrect indentation for `LinkTo` beginning at L46:C7. Expected `</LinkTo>` ending at L50:C17 to be at an indentation of 7 but was found at 8.  block-indentation\n  48:12  error  Incorrect indentation for `<span>` beginning at L48:C12. Expected `<span>` to be at an indentation of 9 but was found at 12.  block-indentation\n  49:12  error  Incorrect indentation for `{{channel.name}}` beginning at L49:C12. Expected `{{channel.name}}` to be at an indentation of 9 but was found at 12.  block-indentation\n  55:8  error  Incorrect indentation for `<button>` beginning at L55:C8. Expected `<button>` to be at an indentation of 6 but was found at 8.  block-indentation\n  57:12  error  Incorrect indentation for `Logout\n        ` beginning at L57:C12. Expected `Logout\n        ` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('shlack/templates/login.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/login.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shlack/templates/teams.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/teams.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shlack/templates/teams/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/teams/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shlack/templates/teams/team.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/teams/team.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shlack/templates/teams/team/channel.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'shlack/templates/teams/team/channel.hbs should pass TemplateLint.\n\nshlack/templates/teams/team/channel.hbs\n  22:16  error  Incorrect indentation for `ChatContainer` beginning at L3:C4. Expected `</ChatContainer>` ending at L22:C16 to be at an indentation of 4 but was found at 0.  block-indentation\n  4:4  error  Incorrect indentation for `<!-- Channel Header -->` beginning at L4:C4. Expected `<!-- Channel Header -->` to be at an indentation of 6 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `<ChannelHeader>` beginning at L5:C4. Expected `<ChannelHeader>` to be at an indentation of 6 but was found at 4.  block-indentation\n  10:4  error  Incorrect indentation for `<!-- Channel Message List -->` beginning at L10:C4. Expected `<!-- Channel Message List -->` to be at an indentation of 6 but was found at 4.  block-indentation\n  11:4  error  Incorrect indentation for `<div>` beginning at L11:C4. Expected `<div>` to be at an indentation of 6 but was found at 4.  block-indentation\n  20:4  error  Incorrect indentation for `<!-- Channel Footer -->` beginning at L20:C4. Expected `<!-- Channel Footer -->` to be at an indentation of 6 but was found at 4.  block-indentation\n  21:4  error  Incorrect indentation for `<ChannelFooter>` beginning at L21:C4. Expected `<ChannelFooter>` to be at an indentation of 6 but was found at 4.  block-indentation\n  12:8  error  Incorrect indentation for `{{#each}}` beginning at L12:C8. Expected `{{#each}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  15:8  error  Incorrect indentation for `<!-- Message -->` beginning at L15:C8. Expected `<!-- Message -->` to be at an indentation of 6 but was found at 8.  block-indentation\n  13:13  error  Incorrect indentation for `<Message>` beginning at L13:C13. Expected `<Message>` to be at an indentation of 10 but was found at 13.  block-indentation\n');
  });
  QUnit.test('shlack/templates/teams/team/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/teams/team/index.hbs should pass TemplateLint.\n\n');
  });
});
define("shlack/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/logout-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/logout-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/channel-footer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/channel-footer-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/channel-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/channel-header-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/chat-container-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/chat-container-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/login-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/login-form-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/message-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/message-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/team-selector-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/team-selector-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/team-sidebar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/team-sidebar-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/format-timestamp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/format-timestamp-test.js should pass ESLint\n\n');
  });
  QUnit.test('stubs/auth-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'stubs/auth-service.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/teams-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/teams-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/teams/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/teams/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/teams/team-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/teams/team-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/teams/team/channel-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/teams/team/channel-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/teams/team/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/teams/team/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/auth-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/auth-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/date-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/date-test.js should pass ESLint\n\n');
  });
});
define("shlack/tests/stubs/auth-service", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let MockAuthService = (_dec = Ember.inject.service, _dec2 = Ember._action, (_class = class MockAuthService extends Ember.Service {
    constructor() {
      super(...arguments);

      _defineProperty(this, "currentUserId", null);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    loginWithUserId(userId) {
      this.currentUserId = userId;
      this.router.transitionTo('teams');
    }

    logout() {
      this.currentUserId = null;
      this.router.transitionTo('login');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "logout", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "logout"), _class.prototype)), _class));
  _exports.default = MockAuthService;
});
define("shlack/tests/test-helper", ["shlack/app", "shlack/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("shlack/tests/unit/routes/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define("shlack/tests/unit/routes/teams-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | teams', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:teams');
      assert.ok(route);
    });
  });
});
define("shlack/tests/unit/routes/teams/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | teams/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:teams/index');
      assert.ok(route);
    });
  });
});
define("shlack/tests/unit/routes/teams/team-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | teams/team', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:teams/team');
      assert.ok(route);
    });
  });
});
define("shlack/tests/unit/routes/teams/team/channel-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | teams/team/channel', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:teams/team/channel');
      assert.ok(route);
    });
  });
});
define("shlack/tests/unit/routes/teams/team/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | teams/team/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:teams/team/index');
      assert.ok(route);
    });
  });
});
define("shlack/tests/unit/services/auth-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | auth', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:auth');
      assert.ok(service);
    });
  });
});
define("shlack/tests/unit/utils/date-test", ["shlack/utils/date", "qunit"], function (_date, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | date', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('string inputs', function (assert) {
      assert.equal((0, _date.dateToString)('04/05/1983'), 'Apr 5, 1983 00:00.00 AM', 'MM/DD/YYYY');
      assert.equal((0, _date.dateToString)('4/5/1983'), 'Apr 5, 1983 00:00.00 AM', 'M/D/YYYY');
      assert.equal((0, _date.dateToString)('26 June 2010 13:14'), 'Jun 26, 2010 01:14.00 PM', '26 June 2010 13:14');
    });
    (0, _qunit.test)('empty and invalid inputs', function (assert) {
      // @ts-ignore
      assert.equal((0, _date.dateToString)(), null); // @ts-ignore

      assert.equal((0, _date.dateToString)(null), null); // @ts-ignore

      assert.equal((0, _date.dateToString)([]), null); // @ts-ignore

      assert.equal((0, _date.dateToString)({}), null);
    });
  });
});
define('shlack/config/environment', [], function() {
  if (typeof FastBoot !== 'undefined') {
return FastBoot.config('shlack');
} else {
var prefix = 'shlack';try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

}
});

require('shlack/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
