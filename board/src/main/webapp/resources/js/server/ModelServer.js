
'use strict';
/**
 * 
 * @returns {undefined}
 * @author Kavan Soleimanbeigi
 */
'use strict';
function ModelServer() {

}
ModelServer.prototype.getJSONObject = function(params) {
    var object = undefined;
    var data = $.ajax({
        type: "GET",
        url: params.url,
        dataType: "json",
        async: params.async,
        contentType: 'application/json; charset=utf-8'
    }).responseText;
    try {
        object = JSON.parse(data);
    } catch (e) {
        console.log("ModelServer Error:  Parsing string to object failed!");
        console.log("error msg:" + e);
    }
    return object;
}
ModelServer.prototype.getJSONData = function(params) {
    var data = $.ajax({
        type: "GET",
        url: params.url,
        dataType: "json",
        async: params.async,
        contentType: 'application/json; charset=utf-8'

    }).responseText;

    return data;
}
ModelServer.prototype.postJSONObject = function(params) {
    $.ajax({
        type: "POST",
        url: params.url,
        data: JSON.stringify(params.object),
        dataType: "json",
        async: params.async,
        contentType: 'application/json; charset=utf-8',
        success: function(msg) {
            if (typeof params.callback !== undefined &&
                    typeof params.callback === 'function') {
                params.callback(msg);
            }
        }
    });

}