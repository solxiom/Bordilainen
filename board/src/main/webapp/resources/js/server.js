/* 
 * Authors: Emad Nikkhouy and Kavan Soleimanbeigi
 *
 *  
 *  
 */


function listBuildings() {
    $.getJSON('/board/list/buildings', function(data) {
        addBuildingsToCombo(data);
    });
}



function listBuildingStickers(buildingId) {
    $.getJSON('/board/list/stickers/' + buildingId, function(data) {
        putStickersDataInUi(data);
    });
}


function listStickersComments(stickerId) {
    $.getJSON('/board/list/stickers/' + stickerId, function(data) {
        showStickerDataWithComments(data);
    });
}



function listStickersTypes() {

}

function addStickerToBuilding(buildingId,sticker) {
//should be post method
//buildingId part of URL
//stickerDetails part of parameters 
//$.param(sticker)
console.log("hello from addStickerToBuilding()...");
// receives log object
    $.ajax({
        type: "POST",
        url: "add/sticker/"+buildingId,
        data: JSON.stringify(sticker),
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        success: function(msg){
            console.log(msg);
        }
    });

}

function addCommentToSticker(stickerId, commentDetails) {
// stickerId part of URL
// commentDetails part of parameters
// receives log object
}

function addReport(stickerId) {
// not supported yet
}

function addBuilding() {

}

function removeBuilding(buildingId) {
    // UI does not support this    
}

function removeSticker(building_id, confidential_data) {

}






