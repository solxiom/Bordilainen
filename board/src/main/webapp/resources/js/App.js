/**
 * 
 * @returns {App}
 * @author Kavan Soleimanbeigi
 */
'use strict';
function App() {
    var _self = this;
    _self.model = new Model();
    _self.view = new View();
    _self.url = new URLData();
    _self.controller = new Controller({view: _self.view, model: _self.model,root:_self.url.root_path});
    window.root_path = _self.url.root_path;// adding global variable root_path
    _self.start = function() {
        var url_array = _self.url.getHashArray();
        var current_page =url_array[0] ;
        if(current_page === undefined || current_page === "" || current_page === "home"){
            _self.controller.navigateHome();
        }
        if(current_page === "building"){
            var building_id = url_array[1];
            var dialogIsAlreadyOpen = false;
            if(_self.url.getURLParams().dialog !== undefined && _self.url.getURLParams().dialog === "open"){
                dialogIsAlreadyOpen = true;
            }
            _self.controller.navigateBuildingView({building_id:building_id, dialogIsOpen: dialogIsAlreadyOpen});
        }
    }

}


