
'use strict';
/**
 * 
 * @returns {Model}
 * @author Kavan Soleimanbeigi
 */
'use strict';
function Model() {
    
    this.server = new ModelServer();
    this.buildings = [];
    this.refreshBuildings = function(model) {
        var list = this.server.getJSONObject({url:"/board/list/buildings",async: false});
        this.buildings = [];// making sure the array is empty
        var buildings_ar = this.buildings;
        $.each(list,function(){
            /*
             * notice: in this function the "this" no longer points to the Model class
             * but to the iterator item
             */
            this.model = model;// adding the model for each building item
            var b = new Building(this);// "this" : {id: ,address: ,model: }
            b.refreshStickers();
            b.refreshAddress();
            buildings_ar.push(b);
            
        });
        this.buildings = buildings_ar;
        console.table(this.buildings);
    }
}



