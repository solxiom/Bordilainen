/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function listBuildings(){
    
}

function listBuildingStickers(buildingId){
    
}

function listStickersComments(stickerId){
    
}

function listStickersTypes(){
    
}

function addStickerToBuilding(buildingId, stickerDetails){
//should be post method
//buildingId part of URL
//stickerDetails part of parameters 

   
// receives log object
$.ajax({
  type: "POST",
  url: url,
  data: data,
  success: success,
  dataType: dataType
});

}

function addCommentToSticker(stickerId, commentDetails){
// stickerId part of URL
// commentDetails part of parameters
// receives log object
}

function addReport(stickerId){
// not supported yet
}

function addBuilding(){
    
}

function removeBuilding(buildingId){
  // UI does not support this    
}

function removeSticker(boardId, stickerId, email, password){
    
}






