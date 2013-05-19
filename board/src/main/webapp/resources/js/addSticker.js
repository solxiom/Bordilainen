
receivedInfo = {
    Id: 1,
    BBId: 1,
    email: "emad.nikkhouy@gmail.com",
    summuary: "Nothing",
    title: "sell",
    description: "want to sell my bycicle",
    expirationDate: 3,
    typeId: 1
};

//function addStickers() {
//    //moved
//    $("button").click(function() {
//        try {
//            $("#dialogMain").load("resources/html/dialog.html");
//            showDialog();
//            $("#dialog").dialog("open");
//        } catch (e) {
//            console.log("code javad rid: showDialog() ride sharhe dastan: ");
//        }
//        
//    });
//}

//stickerId = 1;
//function createSticker(jsonNewSticker) {     // receives json 
//
//
//    str = "<b>Email:</b> " + jsonNewSticker.email +
//    "</br> <b>Title:</b> " + jsonNewSticker.title +
//    "</br> <b>Summary:</b> " + jsonNewSticker.summary +
//    "</br> <b>Description:</b> " + jsonNewSticker.description +
//    "</br> <b>Entry expires: </b>" + jsonNewSticker.expiration_date;
//
//    $("#mainForSticks").prepend("<div id= seq-" + stickerId + " ></div>"); // Received Information from the user
//    $("#seq-" + stickerId).attr("class", "sticker");
//    $("#seq-" + stickerId).html(str);
//
//    $("#seq-" + stickerId).append("<div id=report><a class=link href=javascript:reportCounter(" + stickerId + ")>Report</a></div>"); // report  
//    $("#report").attr("class", "reportText");
//
//    $("#seq-" + stickerId).append("<div id=deleteSticker><a class=link href=javascript:deleteSticker(" + stickerId + ")><b>X</b></a></div>"); // delete 
//    $("#deleteSticker").attr("class", "delSticker");
//
//    $("#seq-" + stickerId).append("<div id=comment><a id:commentLink class=link href=javascript:commentOnSticker(" + stickerId + ")><b>Comment</b></a></div>"); // comment
//    $("#comment").attr("class", "commOnSticker");
//    //currentId = $(this).attr('id');
//    stickerId++;
//
//}

reportCount = 0;
function reportCounter(ID) {
    reportCount++;

    //console.log(reportCount);
    console.log(reportCount);
    if (reportCount == 5) {
        try {
            deleteSticker(ID);
        } catch (e) {
            console.log("Could not use deleteSticker()");
        }
    }
}

function deleteSticker(ID) {
    console.log("inside delete sticker");
    //$("#seq-" + ID).load("resources/html/deleteSticker.html")

}

function showDialog() {
    console.log("inside here");
    try {
        $('#newSticker').load('resources/html/dialogDiv.html');
//        loadStickerTypes();
        console.log("after loadStickerTypes()...");
    } catch (e) {
        console.log("failed to load dialogDiv.html! message: " + e.message);
    }
    $("#newSticker").css("display", "block");
}

function addSticker() {
    console.log("within addSticker()...");
    var valid = UIvalidation();
    if (valid) {
        json1 = createJSON($("#email").val(), $("#pwd").val(), $("#pwdConf").val(), $("#title").val(), $("#summary").val(), $("#desc").val(), $("#expiration").val());
        
        addStickerToBuilding(building_id, json1);
        
        $("#innerDivNewSticker").remove();
        
        console.log(json1);
        console.log("addStickerToBuilding() called...");
        
    }
}

function closeDialog() {
    console.log("within closeDialog()...");
    $("#innerDivNewSticker").remove();
}

function UIvalidation() {
    console.log("within UIValidation()...");
    email = $("#email");
    pwd = $("#pwd");
    pwdConf = $("#pwdConf");
    title = $("#title");
    desc = $("#desc");
    expiration = $("#expiration");

    valid = true;
    valid = validate(email, pwd, pwdConf, title, desc, expiration);

    return valid;
}

function validate(email, pwd, pwdConf, title, desc, expiration) {
    console.log("within validate()...");
    allFields = $([]).add($("#email")).add($("#pwd")).add($("#pwdConf")).add($("#title")).add($("#summary")).add($("#desc"));
    allFields.removeClass("ui-error");

    bValid = true;

    bValid = bValid &&
            checkRegexp(email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "Please enter your email address correctly.");
    bValid = bValid &&
            checkRegexp(pwd, /^\s*\S.*$/, "Please enter a password.");
    bValid = bValid &&
            checkRegexp(pwdConf, /^\s*\S.*$/, "Please confirm your password.");
    bValid = bValid &&
            checkPasswordMatch(pwd, pwdConf, "Password mismatch.");
    bValid = bValid &&
            checkRegexp(title, /^\s*\S.*$/, "Please enter a title.");
    bValid = bValid &&
            checkRegexp(desc, /^\s*\S.*$/, "Please enter a description.");
    bValid = bValid &&
            checkRegexp(expiration, /^\s*\S.*$/, "Please specify a lifetime for your sticker.");
    bValid = bValid &&
            checkRegexp(expiration, /^([1-9]|[1-9][0-9]|[1][0-7][0-9]|180)$/, "Please eneter a number in the range 1-180");

    return bValid;
}

function checkRegexp(object, regexp, errorMessage) {
    if (!(regexp.test(object.val()))) {
        object.addClass("ui-error");
        updateTips(errorMessage);
        object.focus();
        return false;
    } else {
        return true;
    }
}

function checkPasswordMatch(pwd, pwdConf, errorMessage) {
    if (pwd.val() !== pwdConf.val()) {
        pwdConf.addClass("ui-error");
        updateTips(errorMessage);
        return false;
    } else {
        return true;
    }
}

function updateTips(message) {
//    tips = $(".validateTips");
    $(".validateTips").html("<br> <b>" + message + "</b>");
//    tips.text(t).addClass("ui-state-highlight");
//    setTimeout(function() {
//        tips.removeClass("ui-state-highlight", 1500);
//    }, 500);
}

function loadStickerTypes() {
    console.log("loadStickerTypes()...");
    jsontype = {
        "typeIds": [{
                "typeId": "2",
                "type": "Selling Ad"
            },
            {
                "typeId": "3",
                "type": "Buying Ad"
            },
            {
                "typeId": "4",
                "type": "Event Announcement"
            },
            {
                "typeId": "5",
                "type": "Subrent Ad"
            },
            {
                "typeId": "6",
                "type": "Lost Stuff"
            },
            {
                "typeId": "7",
                "type": "Job Ad"
            }]
    }
    var listTypes = "";
    el = $("#typeId");
    listBuildings += "<option value=Nothing > - Select sticker type - </option>";
    for (var i = 0; i < jsontype.typeIds.length; i++) {
        listTypes += "<option value='" + jsontype.typeIds[i].typeId + "'>" + jsontype.typeIds[i].type + "</option>";
    }
//    console.log(listTypes);
//    console.log(el);
//    el2 = document.getElementById("typeId");
//    el2.innerHtml = listTypes;
//    document.getElementById("typeId").innerHTML = listTypes;
    console.log(listTypes);
    $("#typeId").html(listTypes);
}

function createJSON(email, pwd, title, summary, desc, expiration) {
    jsonNewSticker = {
        "email": email,
        "password": pwd,
        "title": title,
        "summary": summary,
        "description": desc,
        "expiration_date": expiration
    };
    return jsonNewSticker;
}