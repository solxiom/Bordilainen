(function($) {
    CoderLeopard.package("boardApp.view");
    /**
     * @class This class will create and update the home view
     * all dialogs and parts of the home view can be accessed with this class
     * @param {type} view an instance of View class
     * @returns {HomeView}
     * @author Kavan Soleimanbeigi
     */
    CoderLeopard.boardApp.view.HomeView = function(view) {
        'use strict';
        var _self = this;
        //public interface
        /**
         * Update the Home view
         * @param {Array[Building]} name list of buildings
         * @returns {undefined}
         */
        _self.update = function(params) {
            view.clear();
            loadViewStaticElements(function() {
                putBuildingsInCombo(params);
                adjustViewCSS();
            });
        }
        /**
         * update the title of the Home view with new value
         * @param {String} any string or html as a title
         * @returns {undefined}
         */
        _self.updateTitle = function(title) {
            $("#title").html(title);
        }
        /**
         * clear and pupolate the combo list of Home view with new elements
         * @param {Array[Building]} list of buildings
         * @returns {undefined}
         */
        _self.updateBuildingsList = function(buildings) {
            putBuildingsInCombo(buildings);
        }
        //private stuff
        /**
         * Loads all static html in external files needed for creating this view 
         * @returns {undefined}
         */
        function loadViewStaticElements(callback) {

            $('#inner_header').load(CoderLeopard.boardApp.root_path + "/resources/html/default_header.html", function() {

                $('#chooseBuilding').load(CoderLeopard.boardApp.root_path + "/resources/html/buildings.html", function() {

                    $('footer').load(CoderLeopard.boardApp.root_path + "/resources/html/footer.html", function() {
                        callback();

                    });
                });
            });
        }
        /**
         * Create and set buildings combolist in Home view 
         * @param {type} params an object with following values,
         * params.buildings(): a list of buildings
         * params.switch_view(building_id): a function for changing the view after click the list items
         * @returns {undefined}
         */
        function putBuildingsInCombo(params) {
            var list = "";
            var select = $("#buildingComboBox");
            list = "<option value=Nothing >Select Your Building</option>";
            for (var i = 0; i < params.buildings.length; i++) {
                list += "<option value=" + params.buildings[i].id + " >" + params.buildings[i].address + "</option>";
            }
            $(select).html(list);
            $(select).change(function() {
                params.switch_view({building_id: select.val()});
            });
        }
        /**
         * Set and adjust needed CSS dynamicly for Home view 
         * @class HomeView
         * @returns {undefined}
         */
        function adjustViewCSS() {
            $("#inner_header").css("display", "block");
            $('#mainBody').css("background", "white");
            $('#mainBody').css("overflow", "hidden");
            $("#mainBody").css("margin-top", "0");
            $('footer').css("display", "block");
            $(document.body).attr('class', 'firstPageBackground');
        }

    }
}(jQuery));

