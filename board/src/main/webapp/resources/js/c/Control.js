/* 
 * Author : Kavan Soleimanbeigi
 * 
 */
'use strict';

function Controller() {
    this.setCurrentPage = function(name) {
        sessionStorage.setItem("current_page", current_page);
    }
    this.getCurrentPage = function() {
        return  sessionStorage.getItem("current_page");
    }
    this.setCurrentBuildingId = function(building_id) {
        sessionStorage.setItem("building_id", building_id);
    }
    this.getCurrentBuildingId = function() {
        return  sessionStorage.getItem("building_id");
    }

}


