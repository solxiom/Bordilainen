
(function($) {
     $.board.package("boardApp.model");
    /**
     * For relaoding data of the model from the server please use the refresh functions.
     * @class The Building Model. 
     * @param {String} params.id: the id of the building used in server
     * @param {String} params.address: the address or building name
     * @param {Array} params.stickers: list of the stickers saved to the bulleting board of the building
     * @param {Model} params.model: instance of model class
     * @returns {Building}
     * @author Kavan Soleimanbeigi
     */
    var _building = CoderLeopard.boardApp.model.Building = function(params) {
        'use strict';
        var _self = this;
        //public interface
        _self.id = params.id;
        _self.address = params.address;
        _self.stickers = params.stickers;
        _self.model = params.model;
    }
    /**
     * This will cause a [POST] server call 
     * @param {type} address any string as new address for the building
     * @returns {undefined}
     */
    _building.prototype.updateAddress = function(address) {
        'use strict';
        console.log("[Building.updateAddress] this method is not implemented");
    }
    /**
     * This will cause a [GET] server call values for
     * both address and stickers will be reloaded from the server
     * @returns {undefined}
     */
    _building.prototype.refresh = function() {
       'use strict';
        var _self = this;
        _self.refreshAddress();
        _self.refreshStickers();
    }
    /**
     * This will cause a [GET] server call, sticker list will be reloaded from the server
     * @returns {undefined}
     */
    _building.prototype.refreshStickers = function() {
        'use strict';
        var _self = this;
        var urlstr = CoderLeopard.boardApp.root_path + "/list/stickers/" + _self.id;
        _self.stickers = [];
        var stick_data = _self.model.server.getJSONObject({
            url: urlstr,
            async: false
        });
        for (var i = 0; i < stick_data.length; i++) {

            var next = new _self.model._sticker(stick_data[i]);
            next.model = _self.model;
            next.building_id = _self.id;
            _self.stickers.push(next);

        }
    }
    /**
     * This will cause a [GET] server call, the address value will be reloaded from the server
     * @returns {undefined}
     */
    _building.prototype.refreshAddress = function() {
        'use strict';
        var _self = this;
        var urlstr = CoderLeopard.boardApp.root_path + "/address/" + _self.id;
        var data = _self.model.server.getStringData({
            url: urlstr,
            async: false
        });
        _self.address = data;
    }


}(jQuery));



