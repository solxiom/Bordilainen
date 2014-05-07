
(function($) {
    CoderLeopard.package("BoardApp.model");
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
    CoderLeopard.BoardApp.model.Building = function(params) {
        'use strict';
        var _self = this;
        var _sticker = params.sticker;//full reference to Sticker model, use this by new
        //public interface
        _self.id = params.id;
        _self.address = params.address;
        _self.stickers = params.stickers;
        var model = params.model;


        /**
         * This will cause a [POST] server call 
         * @param {type} address any string as new address for the building
         * @returns {undefined}
         */
        _self.updateAddress = function(address) {
            _self.address = address;
        }
        /**
         * This will cause a [GET] server call values for
         * both address and stickers will be reloaded from the server
         * @returns {undefined}
         */
        _self.refresh = function() {

        }
        /**
         * This will cause a [GET] server call, sticker list will be reloaded from the server
         * @returns {undefined}
         */
        _self.refreshStickers = function() {
            var urlstr = root_path + "/list/stickers/" + _self.id;
            _self.stickers = [];
            var stick_data = model.server.getJSONObject({
                url: urlstr,
                async: false
            });
            for (var i = 0; i < stick_data.length; i++) {

                var next = new model._sticker(stick_data[i]);
                next.model = params.model;
                next.building_id = this.id;
                _self.stickers.push(next);

            }
            //to be continued...
        }
        /**
         * This will cause a [GET] server call, the address value will be reloaded from the server
         * @returns {undefined}
         */
        _self.refreshAddress = function() {
            var urlstr = root_path + "/address/" + _self.id;
            var data = model.server.getStringData({
                url: urlstr,
                async: false
            });
            _self.address = data;
        }
        //private stuff
        function dataToStickersTest(data) {
            var sticks = [];
            var bview = new BuildingView(new View());
            for (var i = 0; i < data.length; i++) {
                var sticker = new model._sticker(data[i]);
                //adding a function for showing delete dialog
                sticker.showDeleteDialog = function(stick) {
                    var d_params = {
                        sticker: stick,
                        delete: function(st) {
                            console.log("deleting this sticker");
                            console.log(st);
                        },
                        cancel: function(st) {
                            bview.closeDeleteDialog(st);
                        }
                    }
                    bview.openDeleteDialog(d_params);
                }
                sticks.push(sticker);
            }
            return sticks;
        }
    }


}(jQuery));



