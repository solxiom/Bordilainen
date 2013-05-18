/* 
 * Authors: Emad Nikkhouy and Kavan Soleimanbeigi
 *
 *  
 *  
 */


function listBuildings() {
    $.getJSON('/board/list/buildings', function(data) {
        loadBuildings(data);
    });
//    $.ajax({
//        type: "GET",
//        url: url,
//        data: data,
//        success: success,
//        dataType: dataType
//    });
}
//--- put below method to somewhere else


function listBuildingStickers(buildingId) {
    $.getJSON('/board/list/stickers/' + buildingId, function(data) {
        putStickersDataInUi(data);
    });
}
//--- put below method to somewhere else
function putStickersDataInUi(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(" sticker-id" + data[i].id);
        console.log(" email: " + data[i].email);
        console.log(" password: " + data[i].password);
    }
    loadPreviousStickers(data);
}
function listStickersComments(stickerId) {

}

function listStickersTypes() {

}

function addStickerToBuilding(buildingId, stickerDetails) {
//should be post method
//buildingId part of URL
//stickerDetails part of parameters 


// receives log object
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: success,
        dataType: dataType
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

function removeSticker(boardId, stickerId, email, password) {

}






