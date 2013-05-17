<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>


        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />

        <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
        <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

        <link rel="stylesheet" type="text/css" href="resources/button.css" />
        <link rel="stylesheet" type="text/css" href="resources/stickies.css" />
        <link rel="stylesheet" type="text/css" href="resources/dialog.css" />

        <script src="resources/dialogJS.js"></script>
        <script src="resources/previousStickers.js"></script>
        <script src="resources/addSticker.js"></script>
        <script src="resources/building.js"></script>
        <script src="resources/commenting.js"></script>

        <title>Bulletin Board</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>


    <body background="resources/BulletinBoard.jpg">
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




        <div id="dialog"  title="Add a Sticker">
            <p class="validateTips"> <font size="4"> All fields are required except the summary.</font> </p>
            <table>

                <tr>
                    <td>Type of the Sticker*:</td>
                    <td>
                        <font size="3">
                        <select id="typeId"></select>
                        </font>
                    </td>
                </tr>
                <tr>
                    <td>Email Address*:</td>
                    <td> <input type="text" id="email"> </td>
                </tr>
                <tr>
                    <td>Set a Password (For This Sticker)*:</td>
                    <td> <input type="password" id="pwd"> </td>
                </tr>
                <tr>
                    <td>Retype the Password*:</td>
                    <td> <input type="password" id="pwdConf"> </td>
                </tr>
                <tr>
                    <td>Title*:</td>
                    <td> <input type="text" id="title"> </td>
                </tr>
                <tr>
                    <td>Summary:</td>
                    <td> <textarea id="summary" rows="3" cols="20"></textarea> </td>
                </tr>
                <tr>
                    <td>Full Description*:</td>
                    <td> <textarea id="desc" rows="5" cols="20"></textarea> </td>
                </tr>
                <tr>
                    <td>Validity duration (days)*:</td>
                    <td> <input type="text" id="expiration"> </td>
                </tr>
            </table>

        </div>


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

