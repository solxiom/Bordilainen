
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
'use strict';
function Sticker(params) {
    this.building_id = params.building_id;
    this.id = params.id;
    this.mail = params.mail;
    this.password = params.password;
    this.title = params.title;
    this.summary = params.summary;
    this.description = params.description;
    this.expiration_date = params.expiration_date;
    var model = params.model;

    /**
     *  This will cause a [GET] server call. 
     *  Using this will reload sticker from the server
     * @returns {undefined}
     */
    this.refresh = function() {

    }
    /**
     * Saving new sticker if it not already exists. 
     * Otherwise it will update existing sticker.
     * this will cause a [POST] call 
     * @returns {undefined}
     */
    this.save = function() {
        var b_id = this.building_id;
        var sv_params = {
            url: "add/sticker/" + b_id,
            async: false,
            object: getServerModel()
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
            var rm_params ={
                url:"remove/sticker/"+b_id+"/"+s_id,
                async:false,
                object: auth_array
            }
            model.server.postJSONObject(rm_params);
    }
    //private stuff
    function getServerModel() {
        return {id: this.id, mail: this.mail,
            password: this.password, title: this.title,
            summary: this.summary,
            description: this.description,
            expiration: this.expiration_date};
    }
}


