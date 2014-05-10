(function($) {
    CoderLeopard.package("boardApp");
    /**
     * 
     * @returns {App}
     * @author Kavan Soleimanbeigi
     */
    CoderLeopard.boardApp.App = function() {
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
        _self.url = new CoderLeopard.boardApp.URLData();
        _self.controller = new CoderLeopard.boardApp.control.Controller({
            view: _self.view,
            model: _self.model,
            root: _self.url.root_path,
            building: CoderLeopard.boardApp.model.Building,
            sticker: CoderLeopard.boardApp.model.Sticker,
        });
        _self.start = function() {
            var url_array = _self.url.getHashArray();
            var current_page = url_array[0];
            if (current_page === undefined || current_page === "" || current_page === "home") {
                _self.controller.navigateHome();
            }
            if (current_page === "building") {
                var building_id = url_array[1];
                var dialogIsAlreadyOpen = false;
                if (_self.url.getURLParams().dialog !== undefined && _self.url.getURLParams().dialog === "open") {
                    dialogIsAlreadyOpen = true;
                }
                _self.controller.navigateBuildingView({
                    building_id: building_id,
                    dialogIsOpen: dialogIsAlreadyOpen});
            }
        }

    }
}(jQuery));


