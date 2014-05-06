
/**
 * 
 * @param {type} id
 * @param {type} mail
 * @param {type} password
 * @param {type} title
 * @param {type} summary
 * @param {type} description
 * @param {type} expiration_date
 * @returns {Sticker}
 * @author Kavan Soleimanbeigi
 */
function Sticker(params) {
    'use strict';
    this.building_id = params.building_id;
    this.id = params.id;
    this.bulletin_id = params.bulletin_id;
    this.email = params.email;
    this.password = params.password;
    this.title = params.title;
    this.summary = params.summary;
    this.description = params.description;
    this.expiration_date = params.expiration_date;
    this.reportCount = "";
    this.type_Id = "general";
    var model = params.model;

    /**
     *  This will cause a [GET] server call. 
     *  Using this will reload sticker from the server
     * @returns {undefined}
     */
    this.refresh = function() {
        console.log("[Sticker] function refresh not implemented!");
    }
    /**
     * Saving new sticker if it not already exists. 
     * Otherwise it will update existing sticker.
     * this will cause a [POST] call 
     * @returns {undefined}
     */
    this.save = function() {
        var b_id = this.building_id;
        var pars = this;
        var sv_params = {
            url: root_path+"/add/sticker/" + b_id,
            async: false,
            object: getServerModel(pars)
        };

        model.server.postJSONObject(sv_params);
    }
    /**
     * This will cause a [DELETE/POST] server call. 
     * The sticker will be removed from the server
     * @returns {undefined}
     */
    this.remove = function(auth_array) {
        var b_id = this.building_id;
        var s_id = this.id;
        var rm_params = {
            url: root_path+"/remove/sticker/" + b_id + "/" + s_id,
            async: false,
            object: auth_array
        }
        model.server.postJSONObject(rm_params);
    }
    //private stuff
    /**
     * be careful with this JSON structure.
     *  Even small typo can cause a 400 BAD REQUEST error on server
     * @param {type} par
     * @returns {StickerModel} the server model for sticker
     */
    function getServerModelXX(par) {// delete the test function and use this one instead
        return {"id": this.id, "bulletin_id": "", "email": this.email,
            "password": this.password, "title": this.title,
            "summary": this.summary, "type_Id": this.type_Id,
            "reportCount": 0,
            "description": this.description,
            "expiration_date": ""};
    }
    function getServerModel(par) {
        return {"id": "", "bulletin_id": "", "email": "solxiom@gmail.com",
            "password": "1234", "title": "test title",
            "summary": "suydsu sdfyudsf sf sdf", "type_Id": "general",
            "reportCount": 0,
            "description": "ajdasdjgsaj",
            "expiration_date": ""};
    }

}


