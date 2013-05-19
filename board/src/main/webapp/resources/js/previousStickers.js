/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


exampleData = [{
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


stickerId = 1;
existingStickers = new Array();
function loadPreviousStickers(data){
    
    
    for (i = 0; i < data.length; i++) {
        existingStickers[i] =  
        "<b>Id:</b> "+data[i].id + 
        // "</br> <b>Bulletin Id:</b> "+ReceivedStickers.allStickers[i].bulletin_id +
        // "</br> <b>Type Id:</b> "+ReceivedStickers.allStickers[i].type_id +
        "</br> <b>email:</b> "+data[i].email +
        // "</br> <b>password:</b> "+ReceivedStickers.allStickers[i].password +
        // "</br> <b>report Count:</b> "+ReceivedStickers.allStickers[i].report_count +
        "</br> <b>summary:</b> "+data[i].summary +
        "</br> <b>title:</b> "+data[i].title +
        "</br> <b>description:</b> "+data[i].description +
        "</br> <b>expire_date:</b> "+data[i].expire_date;
        
        
        
        $("#mainForSticks").prepend("<div id= seq-"+ data[i].id +" ></div>"); // Received Information from the user
        $("#seq-"+ data[i].id).attr("class","sticker");      
        $("#seq-"+ data[i].id).html(existingStickers[i]);
        
        $("#seq-"+ data[i].id).append("<div id=report><a class=link href=javascript:reportCounter("+ data[i].id +")>Report</a></div>"); // report  
        $("#report").attr("class","reportText");
        
        $("#seq-"+ data[i].id).append("<div id=deleteSticker><a class=link href=javascript:deleteSticker(" + data[i].id +")><b>X</b></a></div>"); // delete 
        $("#deleteSticker").attr("class","delSticker");
        
        $("#seq-"+ data[i].id).append("<div id=comment><a id=commentLink class=link href=javascript:void(0); onclick=commentOnSticker(" +data[i].id+ ")><b>Comment</b></a></div>"); // comment 
        $("#comment").attr("class","commOnSticker");
        
        
        
    }
    
}
