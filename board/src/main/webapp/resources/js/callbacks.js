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
    
    insertCommentInputForm (stickerId);
    
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


function insertCommentInputForm (stickerId) {
    $("#seq-" + stickerId).append("<br> <br> <div commentsTextBoxes> <table>\n\
                                             <tr><td>Name:</td>\n\
                                                 <td> <input type='text' id=commentsNameTextBox></td>\n\
                                             </tr></table>");
    $("#seq-" + stickerId).append("<table><tr> <td>Comment:</td>\n\
                                        <td> <textarea id=commentText rows=5 cols=35></textarea></td>\n\
                                   </tr> </table> </div>");
    commentObject = '{"commentorName": "'+$('#commentsNameTextBox').val()+'", "commentText": "'+$('#commentText').val()+'"}';
    $("#seq-" + stickerId).append("<br> <div id='divCommentBtns' class='commentButtonsCentered'> <table> \n\
                                <tr> <td> <button id=btnSendComment onclick=addCommentToSticker('"+stickerId+"', "+commentObject+")> send </button> </td> \n\
                                     <td> <button id=btnCancelComment onclick=closeCommentDialog()> Cancel </button> </td> \n\
                                </tr> \n\
                                </table> </div>");
}

function closeCommentDialog() {
    $('#mainForSticks div').remove();
    listBuildingStickers(building_id);
}

//function makeStickersJson(data) {
//    var st = new Object();
//    st = [
//        {
//            "id": 1,
//            "title": "title1",
//            "summary": "summary1",
//            "description": "desc1",
//            "expiration_date": 1,
//            "email": "email@test.com"
//        },
//        {
//            "id": 2,
//            "title": "title2",
//            "summary": "summary2",
//            "description": "desc2",
//            "expiration_date": 2,
//            "email": "email2@test.com"
//        }
//    ];
//    if (data.length > 0) {
//        for (i = 0; i < data.length; i++) {
//            st[i].id = data[i].id;
//            st[i].email = data[i].email;
//            st[i].title = data[i].title;
//            st[i].summary = data[i].summary;
//            st[i].description = data[i].description;
//            st[i].expiration_date = data[i].expiration_date;
//        }
//    }
//    console.log("stickers array, first element (the first sticker in the board): "+st[0]);
//}