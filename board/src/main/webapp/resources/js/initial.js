/* 
 * Author : Emad Nikkhouy
 * Modified by: Kavan Soleimanbeigi
 */
var navData = undefined;
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
    $.when($.getScript("resources/js/v/BuildingView.js"),
            $.getScript("resources/js/v/View.js"),
            $.getScript("resources/js/v/HomeView.js")
            ).done(function() {
        var bview = view.board;
        
        $.getJSON('/board/list/stickers/' + building_id, function(data) {
            var d_params = {
                save: function(params) {
                    console.log("sticker saved");
                    console.log(params);
                    params.building_id = navData.getBuildingId();
                    params.model = new Model();
                    var sticker = new Sticker(params);
                    sticker.save();
//                    bview.closeAddDialog();
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
    });
}
function useHomeView() {
    var hview = view.home;
    $.getJSON('/board/list/buildings', function(data) {
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
//function addhandlerToCombo() {
//
//    $('#buildingComboBox').change(function() {
//        var selectedBuilding_name = $('#buildingComboBox :selected').text();
//        var building_id = $('#buildingComboBox').val();
//        if (building_id !== undefined && building_id !== "undefined") {
//            navData.setBuildingId(building_id);
//        }
//        if (selectedBuilding_name !== undefined && selectedBuilding_name !== "undefined" && selectedBuilding_name !== "") {
//            navData.setBuildingName(selectedBuilding_name);
//        }
//        showDefaultBuildingView(building_id, selectedBuilding_name);
//    });
//}
//function showHome() {
//    navData.setCurrentPage("home");
//    $("header").empty();
//    $('#mainForSticks').empty();
//    $('#sideBar').empty();
//    $("#inner_header").css("display", "block");
//    $('#inner_header').load("resources/html/default_header.html", function() {
//    });
//    $('#chooseBuilding').load("resources/html/buildings.html", function() {
//    });
//    $('body').css('background-image', 'none');
//    $('#mainBody').css("background", "white");
//    $('#mainBody').css("overflow", "hidden");
//
//    $("#mainBody").css("margin-top", "0");
//    $('footer').css("display", "block");
//
//    listBuildings();
//    loadFooter();
//    $(document.body).attr('class', 'firstPageBackground');
//}
//function loadFooter() {
//    $('footer').load("/board/resources/html/footer.html");
//
//}
//function showDefaultBuildingView(building_id, selectedBuildingName) {
//
//    if (navData.getBuildingId() === undefined || navData.getBuildingId() === "undefined") {
//        console.log("Empty id");
//        navData.setCurrentPage("home");
//
//    } else {
//        navData.setCurrentPage("defaultBuildingView");
//        listBuildingStickers(building_id);
//        $('#sideBar').load("resources/html/buttons.html");
//        $("#chooseBuilding").empty();
//        $(document.body).css('background', 'url("/board/resources/img/BulletinBoard.jpg")');
//        $('#mainBody').css("background", "none");
//        $('#mainBody').css("overflow", "visible");
//        $('footer').css("display", "none");
//        $("#mainBody").css("margin-top", "100px");
//        $("#inner_header").css("display", "none");
//        $('header').load("resources/html/header1.html", function() {
//            console.log("name building: " + selectedBuildingName)
//            if (selectedBuildingName === "" || selectedBuildingName === undefined || selectedBuildingName === "undefined") {
//                saveBuildingName(building_id);
//                selectedBuildingName = navData.getBuildingName();
//                console.log("building address asked from server: " + selectedBuildingName);
//            }
//
//            $('#headerTitle').text(selectedBuildingName);
//        });
//    }
//
//}

