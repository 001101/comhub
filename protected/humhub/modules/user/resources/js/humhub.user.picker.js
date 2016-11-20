humhub.initModule('user.picker', function (module, require, $) {
    var object = require('util').object;
    var Picker = require('ui.picker').Picker;

    module.initOnPjaxLoad = false;

    var UserPicker = function (node, options) {
        Picker.call(this, node, options);
    };

    object.inherits(UserPicker, Picker);

    UserPicker.prototype.selectSelf = function (id) {
        var userConfig = require('config').get('user');
        if (userConfig && !userConfig.isGuest) {
            this.select(userConfig.guid, userConfig.displayName, userConfig.image);
        }
    };

    var actionSelectSelf = function (event) {
        if (event.$target && event.$target.data('picker')) {
            event.$target.data('picker').selectSelf();
        } else {
            module.log.error('Tried self select on non picker node!', true);
        }
    };

    module.export({
        UserPicker: UserPicker,
        actionSelectSelf: actionSelectSelf
    });
});
