// Author : Emad Nikkhouy

$(document).ready(function() {
    console.log("Document is ready");
    try {
        $('#chooseBuilding').load("resources/html/buildings.html");
        listBuildings();
        
        //$("#dialogMain").load("resources/html/dialog.html");
        //listBuildingStickers('7890');
        $("#addButton").click(addStickers);
    } catch (e) {
        console.log("code emad rid: ya loadPreviou... ya inke addStickers" );
    }

});