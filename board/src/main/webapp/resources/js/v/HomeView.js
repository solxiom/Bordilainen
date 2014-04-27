/* 
 * Author : Kavan Soleimanbeigi
 * 
 */
'use strict';
function HomeView(view) {

    //public interface
    /**
     * Update the Home view
     * @param {Array[Building]} name list of buildings
     * @returns {undefined}
     */
    this.update = function(buildings) {
        view.clear();
        loadViewStaticElements(function() {
            putBuildingsInCombo(buildings);
            adjustViewCSS();
        });
    }
    /**
     * update the title of the Home view with new value
     * @param {String} any string or html as a title
     * @returns {undefined}
     */
    this.updateTitle = function(title) {
        $("#title").html(title);
    }
    /**
     * clear and pupolate the combo list of Home view with new elements
     * @param {Array[Building]} list of buildings
     * @returns {undefined}
     */
    this.updateBuildingsList = function(buildings) {
        putBuildingsInCombo(buildings);
    }
    //private stuff
    /**
     * Loads all static html in external files needed for creating this view 
     * @class HomeView
     * @returns {undefined}
     */
    function loadViewStaticElements(callback) {

        $('#inner_header').load("resources/html/default_header.html", function() {

            $('#chooseBuilding').load("resources/html/buildings.html", function() {

                $('footer').load("/board/resources/html/footer.html", function() {
                    callback();

                });
            });
        });
    }
    /**
     * Create and set buildings combolist in Home view 
     * @class HomeView
     * @param {buildings} name list of buildings
     * @returns {undefined}
     */
    function putBuildingsInCombo(buildings) {
        var list = "";
        var select = $("#buildingComboBox");
        list = "<option value=Nothing >Select Your Building</option>";
        for (var i = 0; i < buildings.length; i++) {
            list += "<option value=" + buildings[i].id + " >" + buildings[i].address + "</option>";
        }
        $(select).html(list);
        $(select).change(function() {
            var building_id = select.val();
            navData.setBuildingId(building_id);
            showBuildingView(building_id);

        });
//        $('#buildingComboBox').change(function() {
//            var selectedBuilding_name = $('#buildingComboBox :selected').text();
//            var building_id = $('#buildingComboBox').val();
//            if (building_id !== undefined && building_id !== "undefined") {
//                navData.setBuildingId(building_id);
//            }
//            if (selectedBuilding_name !== undefined && selectedBuilding_name !== "undefined" && selectedBuilding_name !== "") {
//                navData.setBuildingName(selectedBuilding_name);
//            }
//            showDefaultBuildingView(building_id, selectedBuilding_name);
//        })
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

