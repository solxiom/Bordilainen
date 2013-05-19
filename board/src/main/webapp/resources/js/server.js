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

function addStickerToBuilding(buildingId, stickerDetails) {
//should be post method
//buildingId part of URL
//stickerDetails part of parameters 

console.log("hello from addStickerToBuilding()...");
// receives log object
    $.ajax({
        type: "POST",
        url: "add/sticker/"+buildingId+"?email=fdsgdfsg@dghg&password=jhakjh",
        data: JSON.stringify(stickerDetails),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
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






