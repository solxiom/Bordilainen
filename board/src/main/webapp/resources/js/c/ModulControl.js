/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function($){
    function TestController(){
        
        this.sayHello = function(){
            console.log("Hello from controller!");
        }
    }
    
    if(window.TestApp === undefined){
        window.TestApp = {};
    }
    window.TestApp.controller = new TestController();
    
}(jQuery));
(function($){
    function TestView(){
        
        this.sayHello = function(){
            console.log("Hello from view!");
        }
    }
//    console.log("jQuery: " + $);
    if(typeof window.TestApp === undefined){
        window.TestApp = {};
    }
    window.TestApp.view = new TestView();
    
}(jQuery));
