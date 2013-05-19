/* 
 * Author: Emad Nikkhouy    
 */


function putStickersDataInUi(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(" sticker-id" + data[i].id);
        console.log(" email: " + data[i].email);
        console.log(" password: " + data[i].password);
    }
    loadPreviousStickers(data);
}

function showStickerDataWithComments(data) {

}

function addBuildingsToCombo(data) {

    var listBuildings = "";
    var select = $("#buidlingComboBox");
    listBuildings += "<option value=Nothing >Select Your Building</option>";
    for (var i = 0; i < data.length; i++) {
        listBuildings += "<option value="+data[i].id+" >" + data[i].address + "</option>";

    }
    
    $(select).html(listBuildings);
    addhandlerToCombo();

}