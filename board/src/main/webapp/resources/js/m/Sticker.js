(function($) {
    CoderLeopard.package("boardApp.model");
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
    CoderLeopard.boardApp.model.Sticker = function(params) {
        'use strict';
        //public interface
        var _self = this;
        _self.building_id = params.building_id;
        _self.id = params.id;
        _self.bulletin_id = params.bulletin_id;
        _self.email = params.email;
        _self.password = params.password;
        _self.title = params.title;
        _self.summary = params.summary;
        _self.description = params.description;
        _self.expiration_date = params.expiration_date;
        _self.reportCount = "";
        _self.type_Id = "general";
        var model = params.model;

        /**
         *  This will cause a [GET] server call. 
         *  Using this will reload sticker from the server
         * @returns {undefined}
         */
        _self.refresh = function() {
            console.log("[Sticker] function refresh not implemented!");
        }
        /**
         * Saving new sticker if it not already exists. 
         * Otherwise it will update existing sticker.
         * this will cause a [POST] call 
         * @returns {undefined}
         */
        _self.save = function() {
            var b_id = _self.building_id;
            var sv_params = {
                url: CoderLeopard.boardApp.root_path + "/add/sticker/" + b_id,
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
        _self.remove = function(auth_array) {
            var b_id = _self.building_id;
            var s_id = _self.id;
            var rm_params = {
                url: CoderLeopard.boardApp.root_path + "/remove/sticker/" + b_id + "/" + s_id,
                async: false,
                object: auth_array
            }
            model.server.postJSONObject(rm_params);
        }
        //private stuff
        /**
         * be careful with this JSON structure.
         *  Even small typo can cause a 400 BAD REQUEST error on server
         * @returns {StickerModel} the server model for sticker
         */
        function getServerModelXX() {// delete the test function and use this one instead
            return {"id": _self.id, "bulletin_id": "", "email": _self.email,
                "password": _self.password, "title": _self.title,
                "summary": _self.summary, "type_Id": _self.type_Id,
                "reportCount": 0,
                "description": _self.description,
                "expiration_date": ""};
        }
        function getServerModel() {
            return {"id": "", "bulletin_id": "", "email": "solxiom@gmail.com",
                "password": "1234", "title": "test title",
                "summary": "suydsu sdfyudsf sf sdf", "type_Id": "general",
                "reportCount": 0,
                "description": "ajdasdjgsaj",
                "expiration_date": ""};
        }

    }
}(jQuery));


