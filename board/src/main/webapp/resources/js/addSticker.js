
/*
 *
 * @author Javad Sadeqzadeh Boroujeni
 */

function showDialog() {
    console.log("inside here");
    try {
        $('#newSticker').load('resources/html/dialogDiv.html');

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
        sticker = {
            id: "",
            email: $("#email").val(),
            password: $("#pwd").val(),
            type_Id: "general",
            reportCount: "",
            summary: $("#summary").val(),
            title: $("#title").val(),
            description: $("#desc").val(),
            expiration_date: $("#expiration").val()
        };
        addStickerToBuilding(navData.getBuildingId(), sticker);
        console.log(sticker);
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
