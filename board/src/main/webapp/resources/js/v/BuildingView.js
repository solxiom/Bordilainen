/* 
 * Author : Kavan Soleimanbeigi
 * 
 */
'use strict';
function BuildingView(view) {
    //public interface
    
    this.update = function(params) {
        view.clear();
        loadViewStaticElements(params.address, function() {
            addHandlerToSideButtons(params.handlers);
            putStickersInUI(params.stickers);
            adjustViewCss();
        });
    }
    this.updateBuildingName = function(building_name) {
        $('header').empty();
        $('header').load("resources/html/header1.html", function() {
            $('#headerTitle').text(building_name);
        });
    }
    this.updateStickers = function(stickers) {
        putStickersInUI(stickers);
    }
    this.openAddDialog = function(params) {
        $('#newSticker').load('resources/html/dialogDiv.html', function() {
            $("#newSticker").css("display", "block");
            addHandlerToAddDialog(params);

        });
    }
    this.closeAddDialog = function() {
        $("#innerDivNewSticker").remove();
    }
    //private stuff
    function loadViewStaticElements(building_name, callback) {
        $('#sideBar').load("resources/html/buttons.html", function() {
            $('header').load("resources/html/header1.html", function() {
                $('#headerTitle').text(building_name);
                callback();
            });
        });

    }
    function adjustViewCss() {
        $(document.body).css('background', 'url("/board/resources/img/BulletinBoard.jpg")');
        $('#mainBody').css("overflow", "visible");
        $("#mainBody").css("margin-top", "100px");
    }
    function putStickersInUI(sticks) {
        $('#mainForSticks').empty();
        for (var i = 0; i < sticks.length; i++) {
            var id = sticks[i].id;
            var nextStick = buildStickerView(sticks[i], id);
            nextStick.append(buildDeleteButton(id));
            nextStick.append(buildCommentButton(id));
            $("#mainForSticks").prepend(nextStick);
        }
    }
    function buildStickerView(sticker, id) {
        var stick_view = $("<div></div>").attr("id", id).
                attr("class", "sticker").
                append("<b>Title:</b> " + sticker.title).
                append("</br> <b>Summary:</b> " + sticker.summary).
                append("</br> <b>Description:</b> " + sticker.description);
        return stick_view;
    }
    function buildDeleteButton(id){
        var deleteButton = $("<div></div>").attr("id", "deleteSticker").
                attr("class", "delSticker").
                append("<b class='link'style='cursor:pointer'>X</b>").
                click(function() {
                    loadDeleteStickerUI(id)
                });
        return deleteButton;
    }
    function buildCommentButton(id){
        var commentButton = $("<div></div>").attr("id", "commentLink").
                attr("class", "commOnSticker").
                append("<b class='link'>Comment</b>").
                click(function() {
                    insertComment(id);
                });
        return commentButton;
    }
    function addHandlerToSideButtons(params) {
        $("#homeButton").click(function() {
              params.home();
        });
        $("#addButton").click(function() { 
            params.dialog();
        });
    }
    function addHandlerToAddDialog(params) {
        $("#addStickerBt").click(function() {
            params.save();
        });
        $("#cancelAddStickerBt").click(function() {
            params.close();
        });
    }
}
