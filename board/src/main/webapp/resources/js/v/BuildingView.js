
/**
 * @class This class will create and update the building view
 * all dialogs and parts of the building view can be accessed with this class
 * @param {type} view an instance of View class
 * @returns {BuildingView}
 * @author Kavan Soleimanbeigi
 */
'use strict';
function BuildingView(view) {
    //public interface
    /**
     * This will clear and then rebuild whole view
     * @param {type} params must be an object with values params.stickers, params.address and
     *  params.handlers in which handlers.home(): a function for switching to home view
     *  params.dialog(): a function for showing the add new sticker dialog
     * @returns {undefined}
     */
    this.update = function(params) {
        view.clear();
        loadViewStaticElements(params.address, function() {
            addHandlerToSideButtons(params.handlers);
            putStickersInUI(params.stickers);
            adjustViewCss();
        });
    }
    /**
     * Update the title of building view
     * @param {type} building_name or address as title for this view
     * @returns {undefined}
     */
    this.updateBuildingName = function(building_name) {
        $('header').empty();
        $('header').load(root_path+"/resources/html/header1.html", function() {
            $('#headerTitle').text(building_name);
        });
    }
    /**
     * This will clear and and rebuild the stickers section
     * @param {type} all stickers belong to this building
     * @returns {undefined}
     */
    this.updateStickers = function(stickers) {
        putStickersInUI(stickers);
    }
    /**
     * add new sticker dialog will be showed by this function
     * @param {type} params an object with following values,
     * params.save(): a function for saving new sticker
     * params:close: a function for closing the dialog 
     * @returns {undefined}
     */
    this.openAddDialog = function(params) {
        $('#newSticker').load(root_path+'/resources/html/dialogDiv.html', function() {
            $("#newSticker").css("display", "block");
            addHandlerToAddDialog(params);

        });
    }
    /**
     * This will close the add new sticker dialog
     * @returns {undefined}
     */
    this.closeAddDialog = function() {
        $("#innerDivNewSticker").remove();
    }
    /**
     * 
     * @param {type} params.sticker_id
     * @returns {undefined}
     */
    this.openDeleteDialog = function(params) {
        $("#" + params.sticker.id).load(root_path+"/resources/html/deleteSticker.html", function() {
            //  $("#seq-"+sticker_id).attr("class","deleteSticker");
            $("#" + params.sticker.id + " #delete_btn").click(function() {
                params.delete(params.sticker);
            });

            $("#" + params.sticker.id + " #cancel_btn").click(function() {
                params.cancel(params.sticker);
            });

        });
    }
    /**
     * 
     * @param {type} sticker
     * @returns {undefined}
     */
    this.closeDeleteDialog = function(sticker) {
        $("#" + sticker.id).empty();
        $("#" + sticker.id).html(buildStickerView(sticker).html())
                .append(buildDeleteButton(sticker))
                .append(buildCommentButton(sticker.id));
    }
    //private stuff
    function loadViewStaticElements(building_name, callback) {
        $('#sideBar').load(root_path+"/resources/html/buttons.html", function() {
            $('header').load(root_path+"/resources/html/header1.html", function() {
                $('#headerTitle').text(building_name);
                callback();
            });
        });

    }
    function adjustViewCss() {
        var url_str = 'url("'+root_path+'/resources/img/BulletinBoard.jpg")';
        $(document.body).css('background',url_str );
        $('#mainBody').css("overflow", "visible");
        $("#mainBody").css("margin-top", "100px");
    }
    function putStickersInUI(sticks) {
        $('#mainForSticks').empty();
        for (var i = 0; i < sticks.length; i++) {
            var id = sticks[i].id;
            var nextStick = buildStickerView(sticks[i]);
            nextStick.append(buildDeleteButton(sticks[i]));
            nextStick.append(buildCommentButton(id));
            $("#mainForSticks").prepend(nextStick);
        }
    }
    function buildStickerView(sticker) {
        var stick_view = $("<div></div>").attr("id", sticker.id).
                attr("class", "sticker").
                append("<b>Title:</b> " + sticker.title).
                append("</br> <b>Summary:</b> " + sticker.summary).
                append("</br> <b>Description:</b> " + sticker.description);
        return stick_view;
    }
    function buildDeleteButton(sticker) {
        var deleteButton = $("<div></div>").attr("id", "delete-" + sticker.id).
                attr("class", "delSticker").
                append("<b class='link'style='cursor:pointer'>X</b>")
                .click(function(){sticker.showDeleteDialog(sticker)});
        return deleteButton;
    }
    function buildCommentButton(id) {
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
            var dialog_obj = createObjectFromAddmDialog();
            params.save(dialog_obj);
        });
        $("#cancelAddStickerBt").click(function() {
            params.close();
        });
    }
    function createObjectFromAddmDialog() {
        return {
            id: "",
            email: $("#email").val(),
            password: $("#pwd").val(),
            type_Id: "general",
            reportCount: "",
            summary: $("#summary").val(),
            title: $("#title").val(),
            description: $("#desc").val(),
            expiration_date: $("#expiration").val()
        };

    }
}
