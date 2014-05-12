
(function($) {
     $.board.package("boardApp.model");
    /**
     * 
     * @returns {Model}
     * @author Kavan Soleimanbeigi
     */
    CoderLeopard.boardApp.model.Model = function(params) {
        'use strict';
        var _self = this;       
        //public interface
        _self.server = params.server;
        _self.buildings = [];
        _self._sticker = params.sticker;
        _self._building = params.building;

        _self.refreshBuildings = function() {
            var list = _self.server.getJSONObject({url: CoderLeopard.boardApp.root_path + "/list/buildings", async: false});

            _self.buildings = [];// making sure the array is empty
            $.each(list, function() {
                /*
                 * notice: in this function the "this" no longer points to the Model class
                 * but to the iterator item
                 */

                this.model = _self;// adding the model for each building item
                var b = new _self._building(this);// "this" : {id: ,address: ,model: }
                b.refreshAddress();
                _self.buildings.push(b);

            });
        }



    }

}(jQuery));


