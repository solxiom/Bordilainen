
/*
 *
 * @author Javad Sadeqzadeh Boroujeni
 */

function insertCommentInputForm(stickerId) {
        
    $("#seq-" + stickerId).append("<br> <br> <div commentsTextBoxes> <table>\n\
                                             <tr><td>Name:</td>\n\
                                                 <td> <input type='text' id=commentsNameTextBox></td>\n\
                                             </tr></table>");
    $("#seq-" + stickerId).append("<table><tr> <td>Comment:</td>\n\
                                        <td> <textarea id=commentText rows=5 cols=35></textarea></td>\n\
                                   </tr> </table> </div>");
    comment_object ={id:"",sticker_id:stickerId,
                comment_text:$('#commentText').val(),commentor_name:$('#commentsNameTextBox').val()};
    $("#seq-" + stickerId).append("<br> <div id='divCommentBtns' class='commentButtonsCentered'> <table> \n\
                                <tr> <td> <button id=btnSendComment onclick='alert("+"Not Supported!"+")'> send </button> </td> \n\
                                     <td> <button id=btnCancelComment onclick=closeCommentDialog()> Cancel </button> </td> \n\
                                </tr> \n\
                                </table> </div> <br> <div style='margin-top: 50px;'> <b> Commenting is not supported in this release. </b> </div>");

}


function closeCommentDialog() {
    $('#mainForSticks div').remove();
    listBuildingStickers(building_id);
}

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