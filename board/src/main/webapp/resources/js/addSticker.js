/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



receivedInfo = {
    Id: 1,
    BBId: 1,
    email: "emad.nikkhouy@gmail.com",
    summuary: "Nothing",
    title: "sell",
    description: "want to sell my bycicle",
    expirationDate: 3,
    typeId: 1
};

$(document).ready(function() {
    console.log("Document is ready");
    try {
        listBuildings();
        
        //$("#dialogMain").load("resources/html/dialog.html");
        //listBuildingStickers('7890');
        $("#addButton").click(addStickers);
    } catch (e) {
        console.log("code emad rid: ya loadPreviou... ya inke addStickers" );
    }

});


function addStickers() {
    //moved
    $("button").click(function() {
        try {
            $("#dialogMain").load("resources/html/dialog.html");
            showDialog();
            $("#dialog").dialog("open");
        } catch (e) {
            console.log("code javad rid: showDialog() ride sharhe dastan: ");
        }
        
    //addSticker();
    });
}




stickerId = 1;
function createSticker(jsonNewSticker) {     // receives json from dialogJS.js


    str = "<b>Email:</b> " + jsonNewSticker.email +
    "</br> <b>Title:</b> " + jsonNewSticker.title +
    "</br> <b>Summary:</b> " + jsonNewSticker.summary +
    "</br> <b>Description:</b> " + jsonNewSticker.description +
    "</br> <b>Entry expires: </b>" + jsonNewSticker.expiration_date;

    $("#mainForSticks").prepend("<div id= seq-" + stickerId + " ></div>"); // Received Information from the user
    $("#seq-" + stickerId).attr("class", "sticker");
    $("#seq-" + stickerId).html(str);

    $("#seq-" + stickerId).append("<div id=report><a class=link href=javascript:reportCounter(" + stickerId + ")>Report</a></div>"); // report  
    $("#report").attr("class", "reportText");

    $("#seq-" + stickerId).append("<div id=deleteSticker><a class=link href=javascript:deleteSticker(" + stickerId + ")><b>X</b></a></div>"); // delete 
    $("#deleteSticker").attr("class", "delSticker");

    $("#seq-" + stickerId).append("<div id=comment><a id:commentLink class=link href=javascript:commentOnSticker(" + stickerId + ")><b>Comment</b></a></div>"); // delete 
    $("#comment").attr("class", "commOnSticker");
    //currentId = $(this).attr('id');
    stickerId++;

}

reportCount = 0;
function reportCounter(ID) {
    reportCount++;

    //console.log(reportCount);
    console.log(reportCount);
    if (reportCount == 5) {
        try{
            deleteSticker(ID)
        }catch (e){
            console.log("Could not use deleteSticker()")
        }
    }
}

function deleteSticker(ID) {
    console.log(ID);
    $("#seq-" + ID).remove()

}