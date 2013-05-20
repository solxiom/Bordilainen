/* 
 * Author : Emad Nikkhouy
 */

building_id = "";
$(document).ready(function() {
    console.log("Document is ready");
    try {

        
        $('#chooseBuilding').load("resources/html/buildings.html");
        // $(document.body).css('background','none');
        // $(document.body).css({'background':'url("/board/resources/img/bulletin_board2.jpg")','background-repeat': 'no-repeat'});
        $(document.body).attr('class', 'firstPageBackground')
        listBuildings();
            
       
     
        
        //$("#dialogMain").load("resources/html/dialog.html");
        //listBuildingStickers('7890');
//        $("#addButton").click(addStickers);
    } catch (e) {
        console.log("code emad rid" );
    }
      loadFooter();

});

function addhandlerToCombo(){
    
    $('#buidlingComboBox').change( function(){
        
        var selectedBuildingName = $('#buidlingComboBox :selected').text()
        
        $('#header').load("resources/html/header1.html", function() {
            $('#headerTitle').text(selectedBuildingName); 
        });
        building_id = $('#buidlingComboBox').val();
        listBuildingStickers($('#buidlingComboBox').val());
        
        $("#chooseBuilding").remove();
        
        $(document.body).css('background','url("/board/resources/img/BulletinBoard.jpg")');
        $('#mainBody').css("background","none");
        $('#mainBody').css("overflow","visible");
  
    });
  
}
function loadFooter(){
    $('footer').load("/board/resources/html/footer.html");
    
}