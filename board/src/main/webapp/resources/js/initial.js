/* 
 * Author : Emad Nikkhouy
 * Modified by: Kavan Soleimanbeigi
 */
var navData = undefined;
var root_path = location.protocol+"//"+location.host+"/board";
var view = undefined;
$(document).ready(function() {
    console.log("Document is ready");
    init();
});
function init() {
    navData = new NavData();
    view = new View();
    var current_page = navData.getCurrentPage();
    var building_id = navData.getBuildingId();
    var building_name = navData.getBuildingName();
    try {
//        $('#chooseBuilding').load("resources/html/buildings.html");
        if (current_page === "home" || current_page === null || current_page === undefined || current_page === "") {

            showHomeView();
        } else if (current_page === "defaultBuildingView" && building_id !== undefined && building_id !== null && building_id !== "undefined") {
//            showDefaultBuildingView(building_id, building_name);
            showBuildingView(building_id);
        } else {
            console.log("Error: current page data not found");
        }
        $(document.body).attr('class', 'firstPageBackground');

    } catch (e) {
        console.log("code emad rid");
    }
}
function showBuildingView(building_id) {
    if (building_id !== undefined || building_id !== "undefined" || building_id !== null
            || building_id !== "") {
        var building_name = navData.getBuildingName();
        useBuildingView(building_id, building_name);
        navData.setCurrentPage("defaultBuildingView");
        navData.setBuildingId(building_id);
    } else {
        console.log("Error: building id is " + building_id);
    }
}
function showHomeView() {
    navData.setCurrentPage("home");
    useHomeView();

}
function useBuildingView(building_id, building_name) {
    
        var bview = view.board;

        $.getJSON(root_path+'/list/stickers/' + building_id, function(data) {
            data = dataToStickers(data);//convertion
            console.table(data);
            var d_params = {
                save: function(params) {
//            
                    params.building_id = navData.getBuildingId();
                    params.model = new Model();
                    var sticker = new Sticker(params);
                    sticker.save();
//                    bview.closeAddDialog();
                    bview.closeAddDialog();
                    showBuildingView(params.building_id);
                },
                close: function() {
                    bview.closeAddDialog();
                }
            };
            var bt_params = {
                home: function() {
                    showHomeView();
                },
                dialog: function() {
                    bview.openAddDialog(d_params);
                }
            };
            var params = {stickers: data, address: building_name,
            };
            bview.update({address: building_name, stickers: data, handlers: bt_params});
        });
}
function dataToStickers(data) {
    var sticks = [];
    var bview = new BuildingView(new View());
    for (var i = 0; i < data.length; i++) {
        var sticker = new Sticker(data[i]);
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
function useHomeView() {
    var hview = view.home;
    $.getJSON(root_path+'/list/buildings', function(data) {
        var params = {
            buildings: data,
            switch_view: function(b_id) {
                navData.setBuildingId(b_id);
                showBuildingView(b_id);
            }
        };
        hview.update(params);
    });

}


