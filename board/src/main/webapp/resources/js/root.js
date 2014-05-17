/**
 * @author Kavan Soleimanbeigi
 * @returns {undefined}
 */
(function() {
//var root = "CoderLeopard";

    if (typeof window.CoderLeopard === "undefined") {
        window.CoderLeopard = {};
    }

    var package = function(str) {
        'use strict';

        var parent = CoderLeopard;
        var parts = str.split(".");
        if ("CoderLeopard" === parts[0]) {
            parts = parts.slice(1);
        }
        for (var i = 0; i < parts.length; i++) {
            var nextpart = parts[i];
            if (typeof parent[nextpart] === "undefined") {
                parent[nextpart] = {};
            }
            parent = parent[nextpart];
        }
    }

    //*************************************URLDATA
    var _urlData = function() {
        'use strict';
        var _self = this;
        //public interface
        _self.root_path = location.protocol + "//" + location.host + "/board";
        if (typeof window.CoderLeopard.boardApp === "undefined") {
            window.CoderLeopard.boardApp = {};
        }
        window.CoderLeopard.boardApp.root_path = _self.root_path;// adding global variable root_path
    }
    /**
     * 
     * @returns {URL Params}
     */
    _urlData.prototype.getURLParams = function() {
        'use strict';
        var params = {};
        try {
            var str_ar = window.location.href.split("?")[1];
            str_ar = str_ar.split("&");
            for (var i = 0; i < str_ar.length; i++) {
                var next_key = str_ar[i].split("=")[0];
                var next_value = str_ar[i].split("=")[1];
                params[next_key] = next_value;
            }
        } catch (e) {
            console.log(e);
            console.log("url params is null!");
            params = {};
        }
        return params;
    };
    /**
     * 
     * @returns {unresolved}
     */
    _urlData.prototype.getHashValue = function() {
        'use strict';
        var hash_str = window.location.hash.substring(2);
        hash_str = hash_str.split("?")[0];
        return hash_str;
    };
    /**
     * 
     * @returns {_L5._urlData.prototype@call;getHashValue@call;split}
     */
    _urlData.prototype.getHashArray = function() {
        'use strict';
        return this.getHashValue().split("/")
    };

    //
    var board = function() {
        this.subscription = {};

    };
    board.prototype.package = package;
    board.prototype.url = new _urlData();
    board.prototype.subscribe = function(key, fn) {
        'use strict';
        if (typeof this.subscription[key] === "undefined") {
            this.subscription[key] = [];
        }
        this.subscription[key].push(fn);
    };
    board.prototype.unsbscribe = function(key, fn) {
        'use strict';
        if (typeof this.subscription[key] === undefined) {
            this.subscription[key] = [];
        }
        this.subscription[key].splice(this.subscription[key].indexOf(fn), 1);
    };
    board.prototype.publish = function(params) {
        'use strict';
        
        if (typeof params === "undefined" || typeof params.key === "undefined") {
            return;
        }
        if (typeof this.subscription[params.key] === "undefined") {
            this.subscription[params.key] = [];
        }
        for (var i = 0; i < this.subscription[params.key].length; i++) {
            if (typeof this.subscription[params.key][i] === "function") {
                if (typeof params.data !== "undefined") {
                    this.subscription[params.key][i](params.data);
                }else{
                    this.subscription[params.key][i]();
                }
            }
        }
    };
    //****____________extending jQuery________*******
    if (typeof jQuery !== "undefined") {

        jQuery.extend({board: new board()});
    } else {
        console.log("[boardApp /root.js] jQuery is undefind! Can't extend jQuery!")
    }
}());

