(function($) {
    $.board.package("boardApp.view");
    /**
     * @class the main class for the view package. All view moduls can be accessed from this class.
     * all classes of the package will need an instance of this class. 
     * This class also keeps all the functions common between the package classes. It works like kind of super class but not quite
     * @returns {View}
     * @author Kavan Soleimanbeigi
     */
    var _view = CoderLeopard.boardApp.view.View = function(params) {
        'use strict';
        var _self = this;
        /**
         * the home view
         */
        _self.home = params.home(_self);
        /**
         * the board/building view
         */
        _self.board = params.board(_self);
        /**
         * publish and subscribe
         */
        $.board.subscribe("update-home-view", function(data) {
            var params = {buildings: data.buildings,
                switch_view: function(params) {
                    $.board.publish({key: "building-request", data: params.building_id});
                }
            };
            _self.home.update(params);
            window.location = $.board.url.root_path + "/#!home";
        });
        $.board.subscribe("update-building-view", function(data) {
            var dialog_handlers = buildDialogHandlers(data);
            var buttons_handlers = buildButtonHandlers(dialog_handlers, data);
            addDeleteHandlersToStickers(data.stickers);
            _self.board.update({address: data.address,
                stickers: data.stickers,
                handlers: buttons_handlers});
            /*
             * used with reload button of the browser
             */
            var dialogIsAlreadyOpen = false;
            if($.board.url.getURLParams().dialog !== undefined 
                    &&
                    $.board.url.getURLParams().dialog === "open") {
                dialogIsAlreadyOpen = true;
            }
            if (dialogIsAlreadyOpen) {
                _self.board.openAddDialog(dialog_handlers);
                window.location = $.board.url.root_path + "/#!building/" + data.id + "?dialog=open";
            } else {
                window.location = $.board.url.root_path + "/#!building/" + data.id;
            }
        });
        $.board.subscribe("stickers-updated",function(stickers){
            addDeleteHandlersToStickers(stickers);
            _self.board.updateStickers(stickers);
        });
        $.board.subscribe("sticker-notification",function(params){
            var message = params.message;
            $("#"+params.sticker_id+ " .sticker_notif").remove();//remove the old one is exists
            $("#"+params.sticker_id).prepend("<span class='sticker_notif'>"+message+"<span>");
            if(params.mode !== undefined && params.mode === "delete"){
                $("#"+params.sticker_id + " input").css("border","dashed");
                $("#"+params.sticker_id + " input").css("border-color","red");
            }
           
        })
        //private stuff
        function buildButtonHandlers(dialog_handlers, building) {
            return {
                home: function() {
                    $.board.publish({key: "home-request", data: undefined});
                },
                dialog: function() {
                    _self.board.openAddDialog(dialog_handlers);
                    window.location = $.board.url.root_path + "/#!building/" + building.id + "?dialog=open";
                }
            };
        }
        function addDeleteHandlersToStickers(stickers) {
            for (var i = 0; i < stickers.length; i++) {
                var nextSticker = stickers[i];
                nextSticker.showDeleteDialog = function(stick) {
                    _self.board.openDeleteDialog({sticker: stick,
                        delete: function(st) {
                            $.board.publish({key:"delete-sticker",data:st});
                        },
                        cancel: function(st) {
                            _self.board.closeDeleteDialog(st);
                        }
                    });
                }
            }
        }
        function buildDialogHandlers(building) {
            return {
                save: function(stick_params) {
                    stick_params.building_id = building.id;
                    $.board.publish({key:"save-new-sticker",data:stick_params});
                    _self.board.closeAddDialog();
                    window.location = $.board.url.root_path + "/#!building/" + building.id;
                },
                close: function() {
                    _self.board.closeAddDialog();
                    window.location = $.board.url.root_path + "/#!building/" + building.id;
                }
            };
        }
    }
    /**
     * clear and reset all the elements to their the default mode. It works for any view in the application
     * @returns {undefined}
     */
    _view.prototype.clear = function() {
        $("#chooseBuilding").empty();
        $("#newSticker").css("display","none");
        $('#mainBody').css("background", "none");
        $('footer').css("display", "none");
        $("#inner_header").css("display", "none");
        $("header").empty();
        $('#mainForSticks').empty();
        $('#sideBar').empty();
        $('body').css('background-image', 'none');
    }
}(jQuery));


