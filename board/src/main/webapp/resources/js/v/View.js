
/**
 * @class the main class for the view package. All view moduls can be accessed from this class.
 * all classes of the package will need an instance of this class. 
 * This class also keeps all the functions common between the package classes. It works like kind of super class but not quite
 * @returns {View}
 * @author Kavan Soleimanbeigi
 */
'use strict';
function View() {
    /**
     * clear and reset all the elements to their the default mode. It works for any view in the application
     * @returns {undefined}
     */
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
    /**
     * the home view
     */
    this.home = new HomeView(this);
    /**
     * the board/building view
     */
    this.board = new BuildingView(this);
}


