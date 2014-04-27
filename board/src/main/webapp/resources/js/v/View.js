/* 
 * Author : Kavan Soleimanbeigi
 * 
 */

'use strict';
function View() {
    this.clear = function() {
        $("#chooseBuilding").empty();
        $('#mainBody').css("background", "none");
        $('footer').css("display", "none");
        $("#inner_header").css("display", "none");
        $("header").empty();
        $('#mainForSticks').empty();
        $('#sideBar').empty();
        $('body').css('background-image', 'none');
    }
}


