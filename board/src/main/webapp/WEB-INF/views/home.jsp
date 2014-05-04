<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!--    Author: Emad Nikkhouy
        Modified: Kavan Soleimanbeigi
-->
<!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/button.css" />
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/stickies.css" />
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/dialog.css" />
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/newSticker.css" />
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/commentButtons.css" />
        <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/resources/css/footer_header.css" />

        <!--Scripts start-->
        <!-- external -->
        <script src="http://code.jquery.com/jquery-1.9.1.js"></script><!--required for jquery 2.x-->
        <script src="http://code.jquery.com/jquery-2.0.0.js"></script>
        <!-- model -->
        <script src="<%=request.getContextPath()%>/resources/js/m/Model.js"></script>
        <script src="<%=request.getContextPath()%>/resources/js/m/Sticker.js"></script>
        <script src="<%=request.getContextPath()%>/resources/js/m/Building.js"></script>
        <!-- view -->
        <script src="<%=request.getContextPath()%>/resources/js/v/View.js"></script>
        <script src="<%=request.getContextPath()%>/resources/js/v/BuildingView.js"></script>
        <script src="<%=request.getContextPath()%>/resources/js/v/HomeView.js"></script>
        <!-- control -->
        <script src="<%=request.getContextPath()%>/resources/js/c/Controller.js"></script>
        <!-- server -->
        <script src="<%=request.getContextPath()%>/resources/js/server/ModelServer.js"></script>
        <!--departed codes but still in use-->
        <script src="<%=request.getContextPath()%>/resources/js/NavData.js"></script>
        <!-- initial -->
        <script src="<%=request.getContextPath()%>/resources/js/URLData.js"></script>
        <script src="<%=request.getContextPath()%>/resources/js/App.js"></script>
        <script src="<%=request.getContextPath()%>/resources/js/initial.js"></script>
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
                    <div id="buildings"></div>
                    <div id="dialogMain"> </div>
                </div>
            </div>
            <footer></footer>
        </div>


    </body>
</html>

