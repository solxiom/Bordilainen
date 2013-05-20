/* 
 * Author : Emad Nikkhouy
 */

building_id = "";
$(document).ready(function() {
    console.log("Document is ready");
    try {

            
        $('#chooseBuilding').load("resources/html/buildings.html");
        $(document.body).css('background','none');
        listBuildings();
            
       
     
        
        //$("#dialogMain").load("resources/html/dialog.html");
        //listBuildingStickers('7890');
        $("#addButton").click(addStickers);
    } catch (e) {
        console.log("code emad rid" );
    }

});

function addhandlerToCombo(){
    
    $('#buidlingComboBox').change( function(){
        
        var selectedBuildingName = $('#buidlingComboBox :selected').text()
        
        $('#header').load("resources/html/header.html", function() {
            $('#headerTitle').text(selectedBuildingName); 
        });
        building_id = $('#buidlingComboBox').val();
        listBuildingStickers($('#buidlingComboBox').val());
        
        $("#chooseBuilding").remove();
        
        $(document.body).css('background','url("/board/resources/img/BulletinBoard.jpg")');
        
  
    });
  
}