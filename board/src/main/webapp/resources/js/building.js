function loadBuildings(data) {
    
//    for (var i = 0; i < data.length; i++) {
//        console.log("osoitelainen: " + data[i].address + " id "+data[i].id);
//    }
    
    var listBuildings = "";
    for (var i = 0; i < data.length; i++) {
          console.log(data[i].address);
          listBuildings += "<option value='" + data[i].id + "'>" + data[i].address + "</option>";
    }
    $("#buidlingComboBox").html(listBuildings);
    //    for (i=0; i<data.length; i++){
    //        console.log(data[i].address);
    //       // $('<option/>').html(data[i].address).appendTo('#buidlingComboBox');
    //        $('#buidlingComboBox').append($('<option></option>').val(data[i].address).html(data[i].address));
    //    }
    $("#chooseBuilding").load("resources/html/buildings.html");
}
 
//$(document).ready(function (){
//    loadBuildings();
//});