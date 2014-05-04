
/**
 * For relaoding data of the model from the server please use the refresh functions.
 * @class The Building Model. 
 * @param {String} params.id: the id of the building used in server
 * @param {String} params.address: the address or building name
 * @param {Array} params.stickers: list of the stickers saved to the bulleting board of the building
 * @param {Model} params.model: instance of model class
 * @returns {Building}
 * @author Kavan Soleimanbeigi
 */
'use strict';
function Building(params) {
    //public interface
//    this = this;
    this.id = params.id;
    this.address = params.address;
    this.stickers = params.stickers;
    var model = params.model;


    /**
     * This will cause a [POST] server call 
     * @param {type} address any string as new address for the building
     * @returns {undefined}
     */
    this.updateAddress = function(address) {
        this.address = address;
    }
    /**
     * This will cause a [GET] server call values for
     * both address and stickers will be reloaded from the server
     * @returns {undefined}
     */
    this.refresh = function() {

    }
    /**
     * This will cause a [GET] server call, sticker list will be reloaded from the server
     * @returns {undefined}
     */
    this.refreshStickers = function() {
        var urlstr = root_path + "/list/stickers/" + this.id;
        this.stickers = [];
        var stick_data = model.server.getJSONObject({
            url: urlstr,
            async: false
        });
        for(var i=0; i < stick_data.length;i++){
            
            var next = new Sticker(stick_data[i]);
            next.model = params.model;
            next.building_id = this.id;
            this.stickers.push(next);
            
        }
        console.log("[Building class] notice: refresh stickers is not implemented");
        console.table(stick_data);
        console.table(this.stickers);
        //to be continued...
    }
    /**
     * This will cause a [GET] server call, the address value will be reloaded from the server
     * @returns {undefined}
     */
    this.refreshAddress = function() {
        var urlstr = root_path + "/address/" + this.id;
        var data = model.server.getJSONData({
            url: urlstr,
            async: false
        });
//        data = new String(data.toString().getBytes("ISO-8859-1"), "UTF-8")
        this.address = data;
    }
    //private stuff
    function dataToStickersTest(data) {
        var sticks = [];
        var bview = new BuildingView(new View());
        for (var i = 0; i < data.length; i++) {
            var sticker = new Sticker(data[i]);
            //adding a function for showing delete dialog
            sticker.showDeleteDialog = function(stick) {
                var d_params = {
                    sticker: stick,
                    delete: function(st) {
                        console.log("deleting this sticker");
                        console.log(st);
                    },
                    cancel: function(st) {
                        bview.closeDeleteDialog(st);
                    }
                }
                bview.openDeleteDialog(d_params);
            }
            sticks.push(sticker);
        }
        return sticks;
    }
}






