

function commentOnSticker(ID){
    
  
    
    $('#mainForSticks div').remove();
    $("#mainForSticks").prepend("<div id= seq-"+ ID +" ></div>");
    $("#seq-"+ ID).html(existingStickers[ID-1]);
    $("#mainForSticks div").attr("class","commentSticker");
    $("#seq-"+ ID).append("<div><br><b>Comment:</b></br></div>");
    $("#seq-"+ ID).append("<div> <table>\n\
                                        <tr><td>Name:</td>\n\
                                            <td> <textarea id=NameOfCommentor rows=2 cols=25></textarea></td>\n\
                                        </tr>\n\
                          </div>");
    
    $("#seq-"+ ID).append("<div> <table>\n\
                                        <tr><td>Comment:</td>\n\
                                            <td> <textarea id=ReceivedComment rows=2 cols=50></textarea></td>\n\
                                            <td><button id=addComment onclick=createSomething()> Save Comment </button></td>   \n\
                                        </tr>\n\
                          </div>");
    
    
}

function createCommentJSON(receivedComment, ID){
    jsonNewComment = {
        "receivedComment": receivedComment
    }
    saveComment(jsonNewComment,ID)
}


function saveComment(jsonNewComment, ID){
    
    $("#mainForComments").prepend("<div id= seq-"+ ID +" ></div>"); // Received Information from the user
    $("#mainForSticks").attr("class","div.hidden");      
    $("#seq-"+ ID).html(jsonNewComment.receivedComment);
}

function createSomething(Comment){
    console.log(Comment);
}