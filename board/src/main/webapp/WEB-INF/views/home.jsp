<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!--    Author: Emad Nikkhouy
-->
<!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" type="text/css" href="resources/css/button.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/stickies.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/dialog.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/newSticker.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/commentButtons.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/footer_header.css" />

        <!--Scripts start-->
        <!-- external -->
        <script src="http://code.jquery.com/jquery-1.9.1.js"></script><!--required for jquery 2.x-->
        <script src="http://code.jquery.com/jquery-2.0.0.js"></script>
        <!-- model -->
        <script src="resources/js/m/Model.js"></script>
        <script src="resources/js/m/Sticker.js"></script>
        <script src="resources/js/m/Building.js"></script>
        <!-- view -->
        <script src="resources/js/v/View.js"></script>
        <script src="resources/js/v/BuildingView.js"></script>
        <script src="resources/js/v/HomeView.js"></script>
        <!-- control -->
        <!-- server -->
        <script src="resources/js/server/ModelServer.js"></script>
        <!--departed codes but still in use-->
        <script src="resources/js/previousStickers.js"></script>
        <script src="resources/js/addSticker.js"></script>
        <script src="resources/js/callbacks.js"></script>
        <script src="resources/js/removeSticker.js"></script>
        <script src="resources/js/server.js"></script>
        <script src="resources/js/commenting.js"></script>
        <script src="resources/js/NavData.js"></script>
        <script src="resources/js/Navigation.js"></script>
        <!-- initial -->
        <script src="resources/js/initial.js"></script>
        <!--Scripts end-->


        <title>Bulletin Board</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>


    <body>

        <header></header>
        <div id="container">

            <div id="mainBody">
                <div id="body_wr">
                    <div id="inner_header"></div>
                    <div id="sideBar"></div>
                    <div id="chooseBuilding"></div>
                    <div id="newSticker">  </div>
                    <div id="mainForSticks"></div>
                    <div id="buildings"  title="Add a Sticker"></div>
                    <div id="dialogMain"> </div>
                </div>
            </div>
            <footer></footer>
        </div>


    </body>
</html>

