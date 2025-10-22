$(document).ready(function () {
    console.log("ready");
    const first_name = $("#first_name");
    const last_name = $("#last_name");
    const email = $("#email");
    const phone = $("#phone");
    const company = $("#company");
    const canopy_size = $("#canopy_size");
    const country = $("#country249");
    const how_did_you_hear_other = $("#how_did_you_hear_other");
    const privacy_policy = $("#privacy_policy");
    const phone_optin = $("#phone_optin");
    const special_tracking = $("#special_tracking");
    const email_preferences = $("#email_preferences");

    const handleEmailPreferences = function (elemByID) {
        if (!elemByID.is(":checked")) {
            elemByID.val("False");
            console.log("EmailPreferences", elemByID.val());
            //  elemByID.parent().addClass("error");
            elemByID.focus();
            //  return false;
        } else {
            elemByID.parent().removeClass("error");
            elemByID.blur();
            elemByID.val("True");
            console.log("EmailPreferences", elemByID.val());
            // elemByID.siblings('.errors-above').addClass('hidden').text('')
        }
    };

    const handlePhoneOptinCheck = function (elemByID) {
        if (!elemByID.is(":checked")) {
            elemByID.val("False");
            console.log("PhoneOption", elemByID.val());
            elemByID.parent().addClass("error");
            elemByID.focus();
            return false;
        } else {
            elemByID.parent().removeClass("error");
            elemByID.blur();
            elemByID.val("True");
            console.log("PhoneOption", elemByID.val());
            // elemByID.siblings('.errors-above').addClass('hidden').text('')
        }
    };

    phone_optin.on("change", function () {
        handlePhoneOptinCheck(phone_optin);
    });

    email_preferences.on("change", function () {
        handleEmailPreferences(email_preferences);
    });

    const handleSpecialTracking = function (elemByID) {
        if (elemByID) {
            elemByID.val("AROYA Intelligent Irrigation");
            console.log("Special Tracking", elemByID.val());
        }
    };

    const init = function () {
        if (phone_optin) {
            phone_optin.val("True");
            phone_optin.is(":checked");
        }

        if (email_preferences) {
            email_preferences.val("True");
            email_preferences.is(":checked");
        }

        handleSpecialTracking(special_tracking);
    };

    init();
    $("#submit").click(function (e) {
        e.preventDefault();

        const handleTextField = function (elemByID) {
            if (!elemByID.val()) {
                console.log(elemByID.val());
                elemByID.parent().addClass("error");
                elemByID.focus();
                /*    elemByID
                         .siblings('.errors-above')
                         .removeClass('hidden')
                         .text('Input Fields can not be Empty!!') */
                return false;
            } else {
                elemByID.parent().removeClass("error");
                elemByID.blur();
                // elemByID.siblings('.errors-above').addClass('hidden').text('')
            }
        };

        const handlePhoneOptin = function (elemByID) {
            if (!elemByID.is(":checked")) {
                elemByID.val("False");
                console.log("PhoneOption", elemByID.val());
                elemByID.parent().addClass("error");
                elemByID.focus();
                return false;
            } else {
                elemByID.parent().removeClass("error");
                elemByID.blur();
                elemByID.val("True");
                console.log("PhoneOption", elemByID.val());
                // elemByID.siblings('.errors-above').addClass('hidden').text('')
            }
        };

        const handleCheckBox = function (elemByID) {
            if (!elemByID.is(":checked")) {
                console.log(elemByID.val());
                elemByID.parent().addClass("error");
                elemByID.focus();
                return false;
            } else {
                elemByID.parent().removeClass("error");
                elemByID.blur();
                // elemByID.siblings('.errors-above').addClass('hidden').text('')
            }
        };

        const handleEmailField = function (elemByID) {
            emailVal = $.trim(elemByID.val());
            function IsEmail(x) {
                const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!regex.test(x)) {
                    return false;
                } else {
                    return true;
                }
            }
            console.log(emailVal);
            if (!emailVal) {
                elemByID.parent().addClass("error");
                elemByID.focus();
                /*  elemByID
               .siblings('.errors-above')
               .removeClass('hidden')
               .text('Input Fields can not be Empty!!') */
                return false;
            } else if (IsEmail(emailVal) === false) {
                elemByID.parent().addClass("error");
                elemByID.focus();
                elemByID.siblings(".errors-above").addClass("hidden").text("Input Fields can not be Empty!!");
            } else {
                elemByID.parent().removeClass("error");
                elemByID.blur();
                elemByID.siblings(".errors-above").toggleClass("hidden").text("");
                return true;
            }
        };

        const handleSelectField = function (elemByID) {
            if (!elemByID.val()) {
                console.log(elemByID.val());
                elemByID.parent().addClass("error");
                elemByID.focus();
                return false;
            } else {
                elemByID.parent().removeClass("error");
                elemByID.blur();
                // elemByID.siblings('.errors-above').addClass('hidden').text('')
            }
        };
        handleTextField(first_name);
        handleTextField(last_name);
        handleTextField(phone);
        handleTextField(company);
        handleEmailField(email);
        handleSelectField(canopy_size);
        handleSelectField(country);
        handleTextField(how_did_you_hear_other);
        handleCheckBox(privacy_policy);
        handlePhoneOptin(phone_optin);
        handleSpecialTracking(special_tracking);
        handleEmailPreferences(email_preferences);
    });
});

/************ Country State  ************/

function checkCountryVal(i) {
    var topicSel = document.querySelector(".form-field.state");
    var state = document.getElementById("state249");
    var topicSelUS = document.getElementById("state247");
    var topicSelCan = document.getElementById("state248");
    let stateVal = state.value;
    console.log(i);

    topicSelUS.addEventListener("input", function () {
        let selectedOptTextUS = topicSelUS.options[topicSelUS.selectedIndex].value;
        state.value = selectedOptTextUS;
        console.log(state.value);
    });

    topicSelCan.addEventListener("input", function () {
        let selectedOptTextCan = topicSelCan.options[topicSelCan.selectedIndex].value;
        state.value = selectedOptTextCan;
        console.log(state.value);
    });

    const checkState = () => {
        if (state.value === "585136") {
            showError(state, "Please correct the errors above.");
        } else {
            //  showSuccess(state);
            console.log(state.value);
            // valid = true;
        }
    };
    let thisVal = "United States";
    let thisValCan = "Canada";
    if (event.target.value.replace(/\s+/g, "").toLowerCase() == thisVal.replace(/\s+/g, "").toLowerCase()) {
        topicSel.classList.remove("hidden");
        topicSelUS.classList.remove("hidden");
        topicSelCan.classList.add("hidden");
        checkState();
    } else if (event.target.value.replace(/\s+/g, "").toLowerCase() == thisValCan.replace(/\s+/g, "").toLowerCase()) {
        topicSel.classList.remove("hidden");
        topicSelCan.classList.remove("hidden");
        topicSelUS.classList.add("hidden");
        checkState();
    } else {
        topicSel.classList.add("hidden");
    }
    state.onchange = function (event) {
        checkState();
    };
}

const input = document.querySelectorAll(".pfah-input");

function velidateEmail(emailInput) {
    if (emailInput.type == "email") {
        console.log("this is an email type");

        if (emailInput.value.indexOf("@") != -1 && emailInput.value.indexOf(".") != -1) {
            //green border
            return true;
        } else {
            //red border
            //input.style.borderColor = "#e74c3c";
            emailInput.parentNode.classList.add("error");
            return false;
        }
    }
}

function isDirty(input) {
    input.parentNode.classList.add("is-dirty");
}

function addClass(input) {
    input.parentNode.classList.add("active");
}

function removeClass(input) {
    input.parentNode.classList.remove("active");
}

function removeError(input) {
    input.parentNode.classList.remove("error");
}

function requiredCheckBlur(inputtx) {
    if (!inputtx.value) {
        removeClass(inputtx);
        isDirty(inputtx);
        velidateEmail(inputtx);
        //return false;
    } else {
        addClass(inputtx);
        removeError(inputtx);
        velidateEmail(inputtx);
        //return true;
    }
}

for (let i = 0; i < input.length; i++) {
    let item = input[i];
    item.addEventListener("focus", () => addClass(item));
    item.addEventListener("change", () => addClass(item));
    item.addEventListener("blur", () => requiredCheckBlur(item));
}
