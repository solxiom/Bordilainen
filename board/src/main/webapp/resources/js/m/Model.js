
(function($) {
    $.board.package("boardApp.model");
    /**
     * 
     * @returns {Model}
     * @author Kavan Soleimanbeigi
     */
    var _model = CoderLeopard.boardApp.model.Model = function(params) {
        'use strict';
        var _self = this;
        //public interface
        _self.server = params.server;
        _self.buildings = [];
        _self._sticker = params.sticker;//this is just reference to the actual model and should be created with 'new' first 
        _self._building = params.building;//here is the same thing, and also should be created with 'new' first 

        /**
         * publish and subscribe
         */
        $.board.subscribe("home-request", function() {
            refreshBuildings();
            $.board.publish({key: "update-home-view", data: {buildings: _self.buildings}});
        });
        $.board.subscribe("building-request", function(b_id) {
            var selected_building = new _self._building({id: b_id, model: _self});
            selected_building.refresh();
            $.board.publish({key: "update-building-view", data: selected_building});
        });
        $.board.subscribe("save-new-sticker", function(params) {
            params.model = _self;
            var sticker = new _self._sticker(params);
            sticker.save();
            var building = new _self._building({id: params.building_id, model: _self});
            building.refreshStickers();
            $.board.publish({key: "stickers-updated", data: building.stickers});
        });
        $.board.subscribe("delete-sticker", function(sticker) {
            var building = new _self._building({id: sticker.building_id, model: _self});
            var request_denied = false;
            var notif_msg = "removing";
            sticker.remove({
                auth: sticker.auth_array,
                success: function() {
                    building.refreshStickers();
                    $.board.publish({key: "stickers-updated", data: building.stickers});
                },
                fail: function(msg) {
                    if (msg !== undefined && msg.status !== undefined) {
                        if (msg.status === 401) {
                            $.board.publish({key: "sticker-notification",
                                data: {sticker_id: sticker.id,
                                    message: "Can't remove this! Unauthorized attempt!",
                                    mode: "unauthorized-remove-attempt"}
                            });
                        } else if (msg.status === 403) {//already in progress
                            request_denied = true;
                        } else {
                            console.log("Error:");
                            console.log(msg);
                        }
                    } else {
                        console.log("[Model delete-sticker] Uknown Error!!");
                    }

                }
            });
            if (request_denied) {
                notif_msg = "be patient...multiple request not allowd!"
            } 
            $.board.publish({key: "sticker-notification",
                data: {sticker_id: sticker.id,
                    message: notif_msg,
                    mode: "removing-in-progress"}
            });

        });
        var refreshBuildings = function() {
            var list = _self.server.getJSONObject({url: CoderLeopard.boardApp.root_path + "/list/buildings", async: false});
            _self.buildings = [];// making sure the array is empty
            $.each(list, function() {
                /*
                 * notice: in this function the "this" no longer points to the Model class
                 * but to the iterator item
                 */

                this.model = _self;// adding the model for each building item
                var b = new _self._building(this);// "this" : {id: ,address: ,model: }
                b.refreshAddress();
                _self.buildings.push(b);

            });
        }



    }



}(jQuery));


