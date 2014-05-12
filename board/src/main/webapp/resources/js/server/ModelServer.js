(function($) {
     $.board.package("boardApp.server");
    /**
     * 
     * @returns {undefined}
     * @author Kavan Soleimanbeigi
     */
    var _modelServer = CoderLeopard.boardApp.server.ModelServer = function() {
        'use strict';
    }

    _modelServer.prototype.getJSONObject = function(params) {
        'use strict';
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
    _modelServer.prototype.getStringData = function(params) {
        'use strict';
        $.ajax({
            type: "GET",
            url: params.url,
            dataType: "string",
            async: params.async,
            contentType: 'application/json; charset=utf-16',
            complete: function(data) {
                params.data = data.responseText;

            }

        });

        return params.data;
    }
    _modelServer.prototype.postJSONObject = function(params) {
        'use strict';
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

}(jQuery));