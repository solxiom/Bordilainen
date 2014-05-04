
'use strict'
/**
 * 
 * @returns {NavigationData}
 * @author Kavan Soleimanbeigi
 */

function URLData() {
//public interface
    this.root_path = location.protocol + "//" + location.host + "/board";
    /**
     * 
     * @returns {unresolved}
     */
    this.getURLParams = function() {
        return buildParamMap();
    };
    /**
     * 
     * @returns {Controller.extractHashValue.hash_str}
     */
    this.getHashValue = function() {
        return extractHashValue();
    };
 
    this.getHashArray = function(){
        return buildHashArray();
    };
    //private stuff
    function buildHashArray() {
        return extractHashValue().split("/");
    }
    function buildParamMap() {
        var params = {};
        var str_ar = window.location.href.split("?")[1];
        str_ar = str_ar.split("&");
        for (var i = 0; i < str_ar.length; i++) {
            var next_key = str_ar[i].split("=")[0];
            var next_value = str_ar[i].split("=")[1];
            params[next_key] = next_value;
        }
        return params;
    }
    function extractHashValue() {
        var hash_str = window.location.hash.substring(2);
        hash_str = hash_str.split("?")[0];
        return hash_str;
    }
    function getCurrentPage() {
        var hash = window.location.hash.substring(2);
    }
}