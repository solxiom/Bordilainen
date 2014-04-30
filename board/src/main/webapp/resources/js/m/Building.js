
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
        var urlstr = root_path+"/list/stickers/" + this.id;
        this.stickers = [];
        var stick_data = model.server.getJSONObject({
            url: urlstr,
            async: false
        });
        //to be continued...
    }
    /**
     * This will cause a [GET] server call, the address value will be reloaded from the server
     * @returns {undefined}
     */
    this.refreshAddress = function() {
        var urlstr = root_path+"/list/address/" + this.id;
        var data = model.server.getJSONData({
            url: urlstr,
            async: false
        });
        this.address = data;
    }
    //private stuff
}






