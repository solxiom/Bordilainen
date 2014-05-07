/**
 * @author Kavan Soleimanbeigi
 * @returns {undefined}
 */
(function(){
//    var root = "CoderLeopard";
    
    if(typeof window.CoderLeopard === "undefined" ){
        window.CoderLeopard = {};
    }
    
    var package = function(str){
       'use strict';
       var parent = CoderLeopard;
       var parts = str.split(".");
       if("CoderLeopard" === parts[0]){
           parts = parts.slice(1);
       }
       for(var i = 0; i < parts.length; i++){
           var nextpart = parts[i];
           if(typeof parent[nextpart] === "undefined"){
               parent[nextpart] = {};
           }
           parent = parent[nextpart];
       }        
    }
    window.CoderLeopard.package = package;
}());

