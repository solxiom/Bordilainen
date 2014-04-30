/* 
 * Author : Kavan Soleimanbeigi
 * 
 */

'use strict'

function NavData() {

}
NavData.prototype.setCurrentPage = function(current_page) {
    sessionStorage.setItem("current_page", current_page);

}
NavData.prototype.setBuildingId = function(building_id) {
    sessionStorage.setItem("building_id", building_id);
}
NavData.prototype.setBuildingName = function(building_name) {
    sessionStorage.setItem("building_name", building_name);
}
NavData.prototype.getCurrentPage = function() {
    return  sessionStorage.getItem("current_page");
}
NavData.prototype.getBuildingId = function() {
    return  sessionStorage.getItem("building_id");
}
NavData.prototype.getBuildingName = function() {
    var address = undefined;
    var building_id = sessionStorage.getItem("building_id");
    if (building_id !== null && building_id !== "" && building_id !== undefined
            && building_id !== "undefined") {
        address = $.ajax({
            type: "GET",
            url: root_path+"/address/" + navData.getBuildingId(),
            dataType: "json",
            async: false,
            contentType: 'application/json; charset=utf-8',
        }).responseText;
    }
    return address;
}