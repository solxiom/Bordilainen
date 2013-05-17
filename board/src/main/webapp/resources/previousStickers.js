/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


ReceivedStickers = {
    "allStickers": [{
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
    }]
}

stickerId = 1;
existingStickers = new Array();
function loadPreviousStickers(){
    
    
    for (i = 0; i < ReceivedStickers.allStickers.length; i++) {
        existingStickers[i] =  
        "<b>Id:</b> "+ReceivedStickers.allStickers[i].id + 
        // "</br> <b>Bulletin Id:</b> "+ReceivedStickers.allStickers[i].bulletin_id +
        // "</br> <b>Type Id:</b> "+ReceivedStickers.allStickers[i].type_id +
        "</br> <b>email:</b> "+ReceivedStickers.allStickers[i].email +
        // "</br> <b>password:</b> "+ReceivedStickers.allStickers[i].password +
        // "</br> <b>report Count:</b> "+ReceivedStickers.allStickers[i].report_count +
        "</br> <b>summary:</b> "+ReceivedStickers.allStickers[i].summary +
        "</br> <b>title:</b> "+ReceivedStickers.allStickers[i].title +
        "</br> <b>description:</b> "+ReceivedStickers.allStickers[i].description +
        "</br> <b>expire_date:</b> "+ReceivedStickers.allStickers[i].expire_date;
        
        
        
        $("#mainForSticks").prepend("<div id= seq-"+ ReceivedStickers.allStickers[i].id +" ></div>"); // Received Information from the user
        $("#seq-"+ ReceivedStickers.allStickers[i].id).attr("class","sticker");      
        $("#seq-"+ ReceivedStickers.allStickers[i].id).html(existingStickers[i]);
        
        $("#seq-"+ ReceivedStickers.allStickers[i].id).append("<div id=report><a class=link href=javascript:reportCounter("+ ReceivedStickers.allStickers[i].id +")>Report</a></div>"); // report  
        $("#report").attr("class","reportText");
        
        $("#seq-"+ ReceivedStickers.allStickers[i].id).append("<div id=deleteSticker><a class=link href=javascript:deleteSticker(" + ReceivedStickers.allStickers[i].id +")><b>X</b></a></div>"); // delete 
        $("#deleteSticker").attr("class","delSticker");
        
        $("#seq-"+ ReceivedStickers.allStickers[i].id).append("<div id=comment><a id=commentLink class=link href=javascript:void(0); onclick=commentOnSticker("+ReceivedStickers.allStickers[i].id+")><b>Comment</b></a></div>"); // comment 
        $("#comment").attr("class","commOnSticker");
        
        
        
    }
    
}
