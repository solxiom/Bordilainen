(function($){
/* 
 * Author : Kavan Soleimanbeigi
 */
$(document).ready(function() {
    $.ajaxSetup({
        error: function (x, status, error) {
            /**
             * here with this catch all jQuery ajax errors
             */
            if (x.status == 401) {
//                console.log("Sorry, you should provide correct auth");
            }
            else {
//                console.log("An error occurred: " + status + "nError: " + error);
            }
        }
    });
    new CoderLeopard.boardApp.App().start();
});

}(jQuery));
