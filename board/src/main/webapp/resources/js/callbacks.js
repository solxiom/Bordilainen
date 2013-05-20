/* 
 * Author: Emad Nikkhouy    
 */


function insertComment(stickerId) {
    console.log("within insertComment(); stickerID=" + stickerId);
    content = sticker_values [stickerId];
//    console.log(content);

    $('#mainForSticks div').remove();
    $("#mainForSticks").prepend("<div id= seq-" + stickerId + " ></div>");
    $("#mainForSticks div").attr("class", "newSticker");
    $("#seq-" + stickerId).html(content);

    insertCommentInputForm(stickerId);

    try {
        listStickersComments(stickerId);
    } catch (e) {
        console.log("no comments received from the server.");
    }


}



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
        listBuildings += "<option value=" + data[i].id + " >" + data[i].address + "</option>";

    }

    $(select).html(listBuildings);
    addhandlerToCombo();

}

function showComments(stickerId, data) {
    if (data.length > 0) {
        for (i = 0; i < data.length; i++) {
            commentsList[i] =
                    "<div id=comment-seq-" + data[i].id + ">" +
                    "<b>Name: </b> " + data[i].commentor_name + "</br>" +
                    "<b> Comment: </b> " + data[i].comment_text + "</br>"
                    + "</div>";
            $("#seq-" + stickerId).append(commentsList[i]);
        }
    }

}





