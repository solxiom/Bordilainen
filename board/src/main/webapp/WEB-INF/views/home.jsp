<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>


        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />

        <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
        <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

        <link rel="stylesheet" type="text/css" href="resources/css/button.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/stickies.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/dialog.css" />

        <script src="resources/js/dialogJS.js"></script>
        <script src="resources/js/previousStickers.js"></script>
        <script src="resources/js/addSticker.js"></script>
        <script src="resources/js/building.js"></script>
        <script src="resources/js/commenting.js"></script>
        <script src="resources/js/server.js"></script>

        <title>Bulletin Board</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>


    <body background="resources/img/BulletinBoard.jpg">
        <table width="100%" cellspacing="0">

            <tr>
                <td align="center">
                    <h1 style="font-family: cursive;"><font color="blue"> <strong>Bulletin Boardilainen</strong></font></h1>
                </td>
            </tr>

            <tr>
                <td align="right">
                    <font color="black"><b>TOAS Codecamp</b></font>
                </td>
            </tr>
<!--            <tr>
                <td><select id="buidlingComboBox"></select></td>
            </tr>-->

        </table>


        <table align="right">
            <tr>
                <td><button id="addButton" class="button"> + </button></td>
            </tr>
        </table>

        <div id="mainForSticks"></div>



        <div id="buildings"  title="Add a Sticker"></div>




        <div id="dialogMain"> </div>


        <div id="Comm"  title="Add Comment" class="hidden">
            <p>Please insert your comment:</p>
            <table>

                <tr>
                    <td>Comment:</td>
                    <td> <textarea id="user_comment" rows="2" cols="47"></textarea> </td>
                </tr>
                <tr>
                    <td><div id="mainForComments" ></div></td>
                </tr>

            </table>

        </div>



    </body>
</html>

