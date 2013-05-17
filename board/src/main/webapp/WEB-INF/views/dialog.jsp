<%-- 
    Document   : dialog
    Created on : 17-May-2013, 13:42:49
    Author     : nikkhouy
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>jQuery UI Dialog - Default functionality</title>
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
        <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
        <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
        <!--<link rel="stylesheet" href="/resources/demos/style.css" />-->
       
        <script>
            $(function() {
                var email = $("#email"),
                pwd = $("#pwd"),
                pwdConf = $("#pwdConf"),
                title = $("#title"),
                summary = $("#summary"),
                desc = $("#desc"),
                allFields = $([]).add(email).add(pwd).add(pwdConf).add(title).add(summary).add(desc),
                tips = $(".validateTips");

                function updateTips(t) {
                    tips.text(t).addClass("ui-state-highlight");
                    setTimeout(function() {
                        tips.removeClass("ui-state-highlight", 1500);
                    }, 500);
                }

                function checkRegexp(o, regexp, n) {
                    if (!(regexp.test(o.val()))) {
                        o.addClass("ui-state-error");
                        updateTips(n);
                        return false;
                    } else {
                        return true;
                    }
                }

                $("#dialog").dialog({
                    height: 640,
                    width: 570,
                    modal: true,
                    autoOpen: false,
                    show: {
                        effect: "blind",
                        duration: 1000
                    },
                    hide: {
                        effect: "explode",
                        duration: 1000
                    },
                    buttons: {
                        "Add Sticker": function() {
                            console.log("within the function: add sticker");
                            var bValid = true;
                            allFields.removeClass("ui-state-error");

                            bValid = bValid &&
                                checkRegexp(email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "Please enter your email address correctly.");
                            bValid = bValid && 
                                checkRegexp(pwd, /^\s*\S.*$/, "Please enter a password.");
                            bValid = bValid && 
                                checkRegexp(pwdConf, /^\s*\S.*$/, "Please confirm your password.");
                            bValid = bValid && 
                                checkRegexp(title, /^\s*\S.*$/, "Please enter a title.");
                            bValid = bValid && 
                                checkRegexp(desc, /^\s*\S.*$/, "Please enter a description.");
                            

                            //                            if (bValid) {
                            //                                alert("Email address is in the correct format.");
                            //                            }
                            //                            else {
                            //                                alert("Email address should be in a correct format.");
                            //                            }

                            //                            if (email == "") {
                            //                                alert("Please enter your email address!");
                            //                            }
                            //                            else if (pwd == "") {
                            //                                alert("Please enter a password for this sticker!");
                            //                            }
                            //                            else if (pwdConf == "") {
                            //                                alert("Please confirm the password by re/entering it!");
                            //                            }
                            //                            else if (pwdConf != pwd) {
                            //                                alert("The ");
                            //                            }

                        },
                        Cancel: function() {
                            $(this).dialog("close");
                        }
                    },
                    close: function() {
                        allFields.val("").removeClass("ui-state-error");
                    }
                });

                $("#btnAddSticker").click(function() {
                    $("#dialog").dialog("open");
                });

            });
        </script>
    </head>
    <body>

        

    </body>
</html>