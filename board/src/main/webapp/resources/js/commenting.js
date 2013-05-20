

//function commentOnSticker(ID){
//    
//  
//    
//    $('#mainForSticks div').remove();
//    $("#mainForSticks").prepend("<div id= seq-"+ ID +" ></div>");
//    $("#seq-"+ ID).html(existingStickers[ID-1]);
//    $("#mainForSticks div").attr("class","commentSticker");
//    $("#seq-"+ ID).append("<div><br><b>Comment:</b></br></div>");
//    $("#seq-"+ ID).append("<div> <table>\n\
//                                        <tr><td>Name:</td>\n\
//                                            <td> <textarea id=NameOfCommentor rows=2 cols=25></textarea></td>\n\
//                                        </tr>\n\
//                          </div>//");
//    
//    $("#seq-"+ ID).append("<div> <table>\n\
//                                        <tr><td>Comment:</td>\n\
//                                            <td> <textarea id=ReceivedComment rows=2 cols=50></textarea></td>\n\
//                                            <td><button id=addComment onclick=createSomething()> Save Comment </button></td>   \n\
//                                        </tr>\n\
//                          </div>//");
//    
//    
//}
//
//function createCommentJSON(receivedComment, ID){
//    jsonNewComment = {
//        "receivedComment": receivedComment
//    }
//    saveComment(jsonNewComment,ID)
//}
//
//
//function saveComment(jsonNewComment, ID){
//    
//    $("#mainForComments").prepend("<div id= seq-"+ ID +" ></div>"); // Received Information from the user
//    $("#mainForSticks").attr("class","div.hidden");      
//    $("#seq-"+ ID).html(jsonNewComment.receivedComment);
//}
//
//function createSomething(Comment){
//    console.log(Comment);
//}

function insertComment(stickerId) {
    content = fetchStickerContents(stickerId);
    $('#mainForSticks div').remove();
    $("#mainForSticks").prepend("<div id= seq-" + stickerId + " ></div>");
    $("#mainForSticks div").attr("class", "newSticker");
    $("#seq-" + stickerId).html(content);
    listStickersComments(stickerId);
}
 

 
function showComments(data) {
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
 
    $("#seq-" + stickerId).append("<div> <table>\n\
                                             <tr><td>Name:</td>\n\
                                                 <td> <input type='text' id=name></td>\n\
                                             </tr>\n\
                                        </table> </div>");
    $("#seq-" + ID).append("<div> <table>\n\
                                      <tr><td>Comment:</td>\n\
                                          <td> <textarea id=commentText rows=2 cols=50></textarea></td>\n\
                                      </tr>\n\
                                  </table> </div>");
    $("#seq-" + ID).append("<div id='divBtnSendComment'> \n\
                                <button id=btnSendComment onclick=insertComment()> send </button> </div>");
}
 

 

 
function fetchStickerContents(stickerId) {
 
    for (var i = 0; i < stickerContents.length; i++)
    {
        if (stickerContents[i].sticker_id === stickerId)
        {
            stHtml = "<b>Title: </b>" + stickerContents[i].title + "<br>"
                    + "<b>Summary: </b>" + stickerContents[i].summary + "<br>"
                    + "<b>Description: </b>" + stickerContents[i].description + "<br>"
                    + "<b>Expiration Date: </b>" + stickerContents[i].expire_date + "<br>"
                    + "<b>email: </b>" + stickerContents[i].email + "<br>";
            return stHtml;
        }
    }
}