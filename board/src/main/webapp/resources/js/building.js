function loadBuildings() {
    jsonBbIds = {
        "bbIds": [{
            "bbId": "2",
            "buildingName": "Väinö Auerin Katu 1"
        },
        {
            "bbId": "3",
            "buildingName": "Väinö Auerin Katu 3"
        },
        {
            "bbId": "4",
            "buildingName": "Koskela"
        },
        {
            "bbId": "5",
            "buildingName": "Ida Albergin Tie 1"
        }]
    }
    var listBuildings = "";
    for (var i = 0; i < jsonBbIds.bbIds.length; i++) {
        listBuildings += "<option value='" + jsonBbIds.bbIds[i].bbId + "'>" + jsonBbIds.bbIds[i].buildingName + "</option>";
    }
    $("#buidlingComboBox").html(listBuildings);
}
 
$(document).ready(function (){
    loadBuildings();
});