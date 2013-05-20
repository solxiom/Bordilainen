/* 
 * Author: Emad Nikkhouy    
 */


reportCount = 0;
function reportCounter(ID) {
    reportCount++;

    //console.log(reportCount);
    console.log(reportCount);
    if (reportCount == 5) {
        try {
            deleteSticker(ID);
        } catch (e) {
            console.log("Could not use deleteSticker()");
        }
    }
}

function loadDeleteStickerUI(sticker_id) {
    console.log("inside delete sticker");   
    $("#seq-" + sticker_id).load("resources/html/deleteSticker.html",function(){
        $("#seq-"+sticker_id).attr("class","deleteSticker");
        console.log("size --- " + $("#seq-"+sticker_id+" #delete_btn").length);
        $("#seq-"+sticker_id+" #delete_btn").click(function(){
            sendDeletedSticker(sticker_id);
        });
         
        $("#seq-"+sticker_id+" #cancel_btn").click(function(){
            cancelDeleteSticker(sticker_id); 
        });
         
    });
}

function sendDeletedSticker(sticker_id){
    console.log("Inside sendDeleteSticker()");
    var username = $("#seq-"+sticker_id+" #delete_username").val();
    var password = $("#seq-"+sticker_id+" #delete_password").val();
    console.log($("#seq-"+sticker_id+" #delete_username").val());
// $("#seq-" + sticker_id).remove();
    
}

function cancelDeleteSticker(sticker_id){
    
    console.log("Inside cancelDeleteSticker()");
    console.log(sticker_values[sticker_id]);
    
    
    
    $("#seq-"+ sticker_id).attr("class","sticker"); 
   
    $("#seq-"+ sticker_id).html(sticker_values[sticker_id]);
     $("#seq-"+ sticker_id).append("<div id=deleteSticker>\n\
 <a class=link href=javascript:void(0); onclick=loadDeleteStickerUI('" + sticker_id +"')><b>X</b></a></div>"); // delete 
    $("#deleteSticker").attr("class","delSticker");
    $("#seq-"+ sticker_id).append("<div id=report><a class=link href=javascript:reportCounter("+ sticker_id +")>Report</a></div>"); // report  
    $("#report").attr("class","reportText");
        
    
        
    $("#seq-"+ sticker_id).append("<div id=comment><a id=commentLink class=link href=javascript:void(0); onclick=commentOnSticker('" +sticker_id+ "')><b>Comment</b></a></div>"); // comment 
    $("#comment").attr("class","commOnSticker");
}  


//stickerId = 1;
//function createSticker(jsonNewSticker) {     // receives json 
//
//
//    str = "<b>Email:</b> " + jsonNewSticker.email +
//    "</br> <b>Title:</b> " + jsonNewSticker.title +
//    "</br> <b>Summary:</b> " + jsonNewSticker.summary +
//    "</br> <b>Description:</b> " + jsonNewSticker.description +
//    "</br> <b>Entry expires: </b>" + jsonNewSticker.expiration_date;
//
//    $("#mainForSticks").prepend("<div id= seq-" + stickerId + " ></div>"); // Received Information from the user
//    $("#seq-" + stickerId).attr("class", "sticker");
//    $("#seq-" + stickerId).html(str);
//
//    $("#seq-" + stickerId).append("<div id=report><a class=link href=javascript:reportCounter(" + stickerId + ")>Report</a></div>"); // report  
//    $("#report").attr("class", "reportText");
//
//    $("#seq-" + stickerId).append("<div id=deleteSticker><a class=link href=javascript:deleteSticker(" + stickerId + ")><b>X</b></a></div>"); // delete 
//    $("#deleteSticker").attr("class", "delSticker");
//
//    $("#seq-" + stickerId).append("<div id=comment><a id:commentLink class=link href=javascript:commentOnSticker(" + stickerId + ")><b>Comment</b></a></div>"); // comment
//    $("#comment").attr("class", "commOnSticker");
//    //currentId = $(this).attr('id');
//    stickerId++;
//
//}