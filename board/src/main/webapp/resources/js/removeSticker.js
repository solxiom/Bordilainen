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
    $("#" + sticker_id).load("resources/html/deleteSticker.html", function() {
        //  $("#seq-"+sticker_id).attr("class","deleteSticker");
        console.log("size --- " + $("#" + sticker_id + " #delete_btn").length);
        $("#"+sticker_id + " #delete_btn").click(function() {
            sendDeletedSticker(sticker_id);
        });

        $("#"+sticker_id + " #cancel_btn").click(function() {
            cancelDeleteSticker(sticker_id);
        });

    });
}
/*
 * backup
 */
function loadDeleteStickerUI_DELETE_THIS_FUNCTION(sticker_id) {
    console.log("inside delete sticker");
    $("#seq-" + sticker_id).load("resources/html/deleteSticker.html", function() {
        //  $("#seq-"+sticker_id).attr("class","deleteSticker");
        console.log("size --- " + $("#seq-" + sticker_id + " #delete_btn").length);
        $("#seq-"+sticker_id + " #delete_btn").click(function() {
            sendDeletedSticker(sticker_id);
        });

        $("#seq-"+sticker_id + " #cancel_btn").click(function() {
            cancelDeleteSticker(sticker_id);
        });

    });
}

function sendDeletedSticker(sticker_id) {
    var building_id = new NavData().getBuildingId();
    console.log("Inside sendDeleteSticker()");
    var email = $("#" + sticker_id + " #delete_username").val();
    var password = $("#" + sticker_id + " #delete_password").val();
    console.log($("#" + sticker_id + " #delete_username").val());
    ar = [email, password];
    removeSticker(building_id, sticker_id, ar);
    $('#mainForSticks div').remove();

   showDefaultBuildingView(new NavData().getBuildingId(),new NavData().getBuildingName());


}
/*
 * backup
 */
function sendDeletedSticker_DELETE_THIS_FUNCTION(sticker_id) {
    var building_id = new NavData().getBuildingId();
    console.log("Inside sendDeleteSticker()");
    var email = $("#seq-" + sticker_id + " #delete_username").val();
    var password = $("#seq-" + sticker_id + " #delete_password").val();
    console.log($("#seq-" + sticker_id + " #delete_username").val());
    ar = [email, password];
    removeSticker(building_id, sticker_id, ar);
    $('#mainForSticks div').remove();

   showDefaultBuildingView(new NavData().getBuildingId(),new NavData().getBuildingName());


}

function cancelDeleteSticker(sticker_id) {
    var building_id = new NavData().getBuildingId();
    console.log("Inside cancelDeleteSticker()");
    console.log(sticker_values[sticker_id]);
    $('#mainForSticks div').remove();
    listBuildingStickers(building_id);


}


