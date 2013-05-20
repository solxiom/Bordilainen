/* 
    Author: Emad Nikkhouy
    Email: emad.nikkhouy@gmail.com
 */


sampleData = [{
    "id": 1, 
    "bulletin_id": 1,
    "type_id": 1,
    "email": "1@gmail.com",
    "password":"123",
    "report_count": 0,
    "summary": "something",
    "tilte": "something also",
    "description": "something",
    "expire_date": "17/05/2013"
},

{
    "id": 2, 
    "bulletin_id": 2,
    "type_id": 2,
    "email": "2@gmail.com",
    "password":"123",
    "report_count": 0,
    "summary": "something",
    "tilte": "something also",
    "description": "something",
    "expire_date": "17/05/2013"
},

{
    "id": 3, 
    "bulletin_id": 3,
    "type_id": 3,
    "email": "3@gmail.com",
    "password":"123",
    "report_count": 0,
    "summary": "something",
    "tilte": "something also",
    "description": "something",
    "expire_date": "17/05/2013"
},

{
    "id": 4, 
    "bulletin_id": 4,
    "type_id": 4,
    "email": "4@gmail.com",
    "password":"123",
    "report_count": 0,
    "summary": "something",
    "tilte": "something also",
    "description": "something",
    "expire_date": "17/05/2013"
}
]

var sticker_values = new Object();
stickerId = 1;
existingStickers = new Array();
function loadPreviousStickers(data){
    
    for (i = 0; i < data.length; i++) {
        
        existingStickers[i] =  
        "<b>Title:</b> "+data[i].title +
        "</br> <b>Summary:</b> "+data[i].summary +
        "</br> <b>Description:</b> "+data[i].description;
        
        sticker_values [data[i].id] = existingStickers[i];
        
        $("#mainForSticks").prepend("<div id= seq-"+ data[i].id +" ></div>"); 
        $("#seq-"+ data[i].id).attr("class","sticker");      
        $("#seq-"+ data[i].id).html(existingStickers[i]);
        
        $("#seq-"+ data[i].id).append("<div id=deleteSticker><a class=link href=javascript:void(0); onclick=loadDeleteStickerUI('" +data[i].id+ "')><b>X</b></a></div>"); // delete 
        $("#deleteSticker").attr("class","delSticker");
        
        $("#seq-"+ data[i].id).append("<div id=comment><a id=commentLink class=link href=javascript:insertComment('" +data[i].id+ "')><b>Comment</b></a></div>"); // comment 
        $("#comment").attr("class","commOnSticker");
               
    }
}
