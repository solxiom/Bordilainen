/* 
 * Author : Kavan Soleimanbeigi
 * 
 */


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
    return  sessionStorage.getItem("building_name");
}