(function($) {
    CoderLeopard.package("boardApp.view");
    /**
     * @class the main class for the view package. All view moduls can be accessed from this class.
     * all classes of the package will need an instance of this class. 
     * This class also keeps all the functions common between the package classes. It works like kind of super class but not quite
     * @returns {View}
     * @author Kavan Soleimanbeigi
     */
    var _view = CoderLeopard.boardApp.view.View = function(params) {
        'use strict';
        var _self = this;
        /**
         * the home view
         */
        _self.home = params.home(_self);
        /**
         * the board/building view
         */
        _self.board = params.board(_self);
    }
    /**
     * clear and reset all the elements to their the default mode. It works for any view in the application
     * @returns {undefined}
     */
    _view.prototype.clear = function() {
        $("#chooseBuilding").empty();
        $('#mainBody').css("background", "none");
        $('footer').css("display", "none");
        $("#inner_header").css("display", "none");
        $("header").empty();
        $('#mainForSticks').empty();
        $('#sideBar').empty();
        $('body').css('background-image', 'none');
    }
}(jQuery));


