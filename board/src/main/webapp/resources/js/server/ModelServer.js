
/**
 * 
 * @returns {undefined}
 * @author Kavan Soleimanbeigi
 */
function ModelServer() {
    'use strict';
    this.testAdd = function() {
        var object = {"id": "", "bulletin_id": "", "email": "k@k.k",
            "password": "1234", "title": "new sticker title",
            "summary": "basjsjh ashgs sgh", "type_Id": "general",
            "reportCount": "",
            "description": "sdafhgfh safhgsdf safahf asfdahsd",
            "expiration_date": "23/6/2014"};
        var url = root_path + "/add/sticker/test/1cc14ca8xbb4bx4397xb42cx83202c3688d1";
        var async = false;
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(object),
            dataType: "json",
            async: async,
            contentType: 'application/json; charset=utf-8',
            complete: function(msg) {
                console.log("server response: ");
                console.log(msg);
            }
        });
    }
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
    $.ajax({
        type: "GET",
        url: params.url,
        dataType: "json",
        async: params.async,
        contentType: 'application/json; charset=utf-8',
        complete: function(data) {
            params.data = data.responseText;
        }

    });

    return params.data;
}
ModelServer.prototype.postJSONObject = function(params) {
//    console.log(params.object);
//    console.log(JSON.stringify(params.object));

    $.ajax({
        type: "POST",
        url: params.url,
        data: JSON.stringify(params.object),
        dataType: "json",
        async: params.async,
        contentType: 'application/json; charset=utf-8',
        complete: function(msg) {
            if (typeof params.callback !== undefined &&
                    typeof params.callback === 'function') {
                params.callback(msg);
            }
        }
    });

}