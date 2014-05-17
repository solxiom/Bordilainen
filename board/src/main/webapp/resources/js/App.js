(function($) {
    $.board.package("boardApp");
    /**
     * 
     * @returns {App}
     * @author Kavan Soleimanbeigi
     */
    var _app = CoderLeopard.boardApp.App = function(){
        'use strict';
        var _self = this;
        _self.modelServer = new CoderLeopard.boardApp.server.ModelServer();
        _self.model = new CoderLeopard.boardApp.model.Model({server: _self.modelServer,
            building: CoderLeopard.boardApp.model.Building,
            sticker: CoderLeopard.boardApp.model.Sticker
        });
        _self.view = new CoderLeopard.boardApp.view.View({
            home: function(view) {
                return new CoderLeopard.boardApp.view.HomeView(view);
            },
            board: function(view) {
                return new CoderLeopard.boardApp.view.BuildingView(view);
            }
        });
        _self.url = $.board.url;
    }
    _app.prototype.start = function(){
        'use strict';
        var _self = this;
        var url_array = _self.url.getHashArray();
        var current_page = url_array[0];
        if (current_page === undefined || current_page === "" || current_page === "home"){
            $.board.publish({key:"home-request",data:undefined});
        }
        if (current_page === "building"){
            var building_id = url_array[1];
            $.board.publish({key:"building-request",
                data:building_id
            });

        }
    }
}(jQuery));


