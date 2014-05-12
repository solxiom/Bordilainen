
(function($) {

    $.board.package("boardApp.control");
    /**
     * 
     * @returns {Controller}
     * @author Kavan Soleimanbeigi
     */
    CoderLeopard.boardApp.control.Controller = function(params) {
        'use strict';
        //public interface
        var _self = this;
        var _building = params.building;//full reference to Building model, use this by new
        var _sticker = params.sticker;// full reference to Sticker model, use this by new
        /**
         * this one will intialized by constructure parameter params.model
         */
        _self.model = params.model;
        /**
         * this one will intialized by constructure parameter params.view
         */
        _self.view = params.view;
        /**
         * root of the url path for the application
         */
        _self.root = params.root;
        
        _self.navigateHome = function() {
            /*
             * at first the buildings array is empty, so we should
             * get the buildings list from the server by calling the refresh function 
             */
            _self.model.refreshBuildings();
            var params = {buildings: _self.model.buildings,
                switch_view: function(switch_params) {
                    _self.navigateBuildingView(switch_params);
                }
            };
            _self.view.home.update(params);
            window.location = _self.root + "/#!home";
        }
        _self.navigateBuildingView = function(params) {
            var building = new _building({id: params.building_id, model: _self.model});
            building.refreshAddress();
            building.refreshStickers();
            buildDeleteStickerHandler(building);
            var dialog_handlers = buildDialogHandlers(building);
            var buttons_handlers = {
                home: function() {
                    _self.navigateHome();
                },
                dialog: function() {
                    _self.view.board.openAddDialog(dialog_handlers);
                    window.location = _self.root + "/#!building/" + building.id + "?dialog=open";
                }
            };
            _self.view.board.update({address: building.address,
                stickers: building.stickers,
                handlers: buttons_handlers});
            /*
             * used with reload button of the browser
             */
            if (params.dialogIsOpen !== undefined && params.dialogIsOpen === true) {
                _self.view.board.openAddDialog(dialog_handlers);
                window.location = _self.root + "/#!building/" + building.id + "?dialog=open";
            } else {
                window.location = _self.root + "/#!building/" + building.id;
            }
        }
        //private stuff
        function buildDialogHandlers(building) {
            return {
                save: function(stick_params) {
                    stick_params.building_id = building.id;
                    stick_params.model = _self.model;
                    var sticker = new _sticker(stick_params);
                    sticker.save();
                    _self.view.board.closeAddDialog();
                    building.refreshStickers();
                    _self.view.board.updateStickers(building.stickers);
                    window.location = _self.root + "/#!building/" + building.id;
                },
                close: function() {
                    _self.view.board.closeAddDialog();
                    window.location = _self.root + "/#!building/" + building.id;
                }
            };
        }
        function buildDeleteStickerHandler(building){
            for (var i = 0; i < building.stickers.length; i++) {
                var nextSticker = building.stickers[i];
                nextSticker.showDeleteDialog = function(stick) {
                    _self.view.board.openDeleteDialog({sticker: stick,
                        delete: function(st) {
                            console.log("deleting sticker: ");
                            console.log(st);
                        },
                        cancel: function(st) {
                            _self.view.board.closeDeleteDialog(st);
                        }
                    });
                }
            }
        }
    }
}(jQuery));
