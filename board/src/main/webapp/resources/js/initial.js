/* 
 * Author : Emad Nikkhouy
 */

building_id = "";
$(document).ready(function() {
    console.log("Document is ready");
    try {

        $('#chooseBuilding').load("resources/html/buildings.html");
        $(document.body).attr('class', 'firstPageBackground')
        listBuildings();
            
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
        
        $("#chooseBuilding").empty();
        
        $(document.body).css('background','url("/board/resources/img/BulletinBoard.jpg")');
        $('#mainBody').css("background","none");
        $('#mainBody').css("overflow","visible");
  
    });
  
}

function showHome(){
    
 
    console.log("inside showHome()");
    $("#header").empty();
    
    $('#chooseBuilding').load("resources/html/buildings.html",function(){
           
    });   
    listBuildings();
    loadFooter();
    $(document.body).attr('class', 'firstPageBackground');
    
}

function loadFooter(){
    $('footer').load("/board/resources/html/footer.html");
    
}