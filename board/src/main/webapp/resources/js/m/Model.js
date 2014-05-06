
/**
 * 
 * @returns {Model}
 * @author Kavan Soleimanbeigi
 */
function Model() {
    'use strict';
    var _self = this;
    _self.server = new ModelServer();
    _self.buildings = [];

    _self.refreshBuildings = function() {
        var list = _self.server.getJSONObject({url: root_path + "/list/buildings", async: false});

        _self.buildings = [];// making sure the array is empty
        $.each(list, function() {
            /*
             * notice: in this function the "this" no longer points to the Model class
             * but to the iterator item
             */

            this.model = _self;// adding the model for each building item
            var b = new Building(this);// "this" : {id: ,address: ,model: }
            b.refreshAddress();
            _self.buildings.push(b);

        });
    }



}




