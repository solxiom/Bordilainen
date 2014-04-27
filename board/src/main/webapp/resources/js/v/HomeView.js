
/**
 * @class This class will create and update the home view
 * all dialogs and parts of the home view can be accessed with this class
 * @param {type} view an instance of View class
 * @returns {HomeView}
 * @author Kavan Soleimanbeigi
 */
'use strict';
function HomeView(view) {

    //public interface
    /**
     * Update the Home view
     * @param {Array[Building]} name list of buildings
     * @returns {undefined}
     */
    this.update = function(params) {
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
            var building_id = select.val();
            params.switch_view(building_id);          
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

