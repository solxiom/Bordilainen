/* 
 * Author : Emad Nikkhouy
 * Modified by: Kavan Soleimanbeigi
 */
var navData = undefined;
$(document).ready(function() {
    console.log("Document is ready");
    init();
});
function init() {
    navData = new NavData();
    var current_page = navData.getCurrentPage();
    var building_id = navData.getBuildingId();
    var building_name = navData.getBuildingName();
    try {
//        $('#chooseBuilding').load("resources/html/buildings.html");
        if (current_page === "home" || current_page === null || current_page === undefined || current_page === "") {

            showHome();


        } else if (current_page === "defaultBuildingView" && building_id !== undefined && building_id !== null && building_id !== "undefined") {
            showDefaultBuildingView(building_id, building_name);
        }
        $(document.body).attr('class', 'firstPageBackground');

    } catch (e) {
        console.log("code emad rid");
    }
    loadFooter();
}
function addhandlerToCombo() {

    $('#buidlingComboBox').change(function() {
        var selectedBuilding_name = $('#buidlingComboBox :selected').text();
        var building_id = $('#buidlingComboBox').val();
        if (building_id !== undefined && building_id !== "undefined") {
            navData.setBuildingId(building_id);
        }
        if (selectedBuilding_name !== undefined && selectedBuilding_name !== "undefined" && selectedBuilding_name !== "") {
            navData.setBuildingName(selectedBuilding_name);
        }
        showDefaultBuildingView(building_id, selectedBuilding_name);
    });
}

function showDefaultBuildingView(building_id, selectedBuildingName) {

    if (navData.getBuildingId() === undefined || navData.getBuildingId() === "undefined") {
        console.log("Empty id");
        navData.setCurrentPage("home");

    } else {
        navData.setCurrentPage("defaultBuildingView");
        listBuildingStickers(building_id);
        $('#sideBar').load("resources/html/buttons.html");
        $("#chooseBuilding").empty();
        $(document.body).css('background', 'url("/board/resources/img/BulletinBoard.jpg")');
        $('#mainBody').css("background", "none");
        $('#mainBody').css("overflow", "visible");
        $('footer').css("display", "none");
        $("#mainBody").css("margin-top", "100px");
        $("#inner_header").css("display", "none");
        $('header').load("resources/html/header1.html", function() {
            console.log("name building: " + selectedBuildingName)
            if (selectedBuildingName === "" || selectedBuildingName === undefined || selectedBuildingName === "undefined") {
                saveBuildingName(building_id);
                selectedBuildingName = navData.getBuildingName();
                console.log("building address asked from server: " + selectedBuildingName);
            }

            $('#headerTitle').text(selectedBuildingName);
        });
    }

}

function showHome() {
    navData.setCurrentPage("home");
    $("header").empty();
    $('#mainForSticks').empty();
    $('#sideBar').empty();
    $("#inner_header").css("display", "block");
    $('#inner_header').load("resources/html/default_header.html", function() {
    });
    $('#chooseBuilding').load("resources/html/buildings.html", function() {
    });
    $('body').css('background-image', 'none');
    $('#mainBody').css("background", "white");
    $('#mainBody').css("overflow", "hidden");

    $("#mainBody").css("margin-top", "0");
    $('footer').css("display", "block");

    listBuildings();
    loadFooter();
    $(document.body).attr('class', 'firstPageBackground');
    listBuildings();
}

function loadFooter() {
    $('footer').load("/board/resources/html/footer.html");

}