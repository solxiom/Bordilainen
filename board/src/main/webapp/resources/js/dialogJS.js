
function showDialog() {

//    loadBBNames();
    loadStickerTypes();

    $("#dialog").dialog({
        height: 660,
        width: 590,
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
                UIvalidation();
                createJSON($("#typeId").val(), $("#email").val(), $("#pwd").val(), $("#title").val(), $("#summary").val(), $("#desc").val(), $("#expiration").val());
                allFields.val("").removeClass("ui-state-error");
                $("#dialog").dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
        }
    });
    $("#dialog").dialog("open");


}

function UIvalidation() {
    email = $("#email");
    pwd = $("#pwd");
    pwdConf = $("#pwdConf");
    title = $("#title");
    desc = $("#desc");
    expiration = $("#expiration");

    valid = true;
    valid = validate(email, pwd, pwdConf, title, desc, expiration);

    if (valid) {
        cleanAfterValidation();
    }
}

function validate(email, pwd, pwdConf, title, desc, expiration) {
    allFields = $([]).add($("#email")).add($("#pwd")).add($("#pwdConf")).add($("#title")).add($("#summary")).add($("#desc"));
    allFields.removeClass("ui-state-error");

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

function cleanAfterValidation() {
    allFields = $([]).add($("#email")).add($("#pwd")).add($("#pwdConf")).add($("#title")).add($("#summary")).add($("#desc"));
    $("#expiration").removeClass("ui-state-error");
    updateTips("All required fields were entered correctly. Thanks!");
}

function checkRegexp(object, regexp, errorMessage) {
    if (!(regexp.test(object.val()))) {
        object.addClass("ui-state-error");
        updateTips(errorMessage);
        object.focus();
        return false;
    } else {
        return true;
    }
}

function checkPasswordMatch(pwd, pwdConf, errorMessage) {
    if (pwd.val() !== pwdConf.val()) {
        pwdConf.addClass("ui-state-error");
        updateTips(errorMessage);
        return false;
    } else {
        return true;
    }
}

function updateTips(t) {
    tips = $(".validateTips");
    tips.text(t).addClass("ui-state-highlight");
    setTimeout(function() {
        tips.removeClass("ui-state-highlight", 1500);
    }, 500);
}

function saveSticker() {
    UIvalidation();
}

function loadBBNames() {
    jsonBbIds = {
        "bbIds": [{
                "bbId": "2",
                "buildingName": "Väinö Auerin Katu 1"
            },
            {
                "bbId": "3",
                "buildingName": "Väinö Auerin Katu 3"
            },
            {
                "bbId": "4",
                "buildingName": "Koskela"
            },
            {
                "bbId": "5",
                "buildingName": "Ida Albergin Tie 1"
            }]
    }
    var listBuildings = "";
    for (var i = 0; i < jsonBbIds.bbIds.length; i++) {
        listBuildings += "<option value='" + jsonBbIds.bbIds[i].bbId + "'>" + jsonBbIds.bbIds[i].buildingName + "</option>";
    }
    $("#bbId").html(listBuildings);
}

function loadStickerTypes() {
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
    for (var i = 0; i < jsontype.typeIds.length; i++) {
        listTypes += "<option value='" + jsontype.typeIds[i].typeId + "'>" + jsontype.typeIds[i].type + "</option>";
    }
    $("#typeId").html(listTypes);
}

function createJSON(typeId, email, pwd, title, summary, desc, expiration) {

    jsonNewSticker = {
        "type_id": typeId,
        "email": email,
        "password": pwd,
        "title": title,
        "summary": summary,
        "description": desc,
        "expiration_date": expiration
    }

    createSticker(jsonNewSticker);  // function located at addSticker.js
    addStickerToBuilding(1, jsonNewSticker)
//    $.ajax({
//            type: "POST",
//            url: "pageAddress.php",
//            dataType: 'json',
//            data: { json: newArray }
//        });

}
