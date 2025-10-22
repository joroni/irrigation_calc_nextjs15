/************ BEST VERSION in Validation and UI */



const input = document.querySelectorAll('.form-input');

function addClass(input) {
    input.parentNode.classList.add('active');
}

function removeClass(input) {
    input.parentNode.classList.remove('active');
}

function requiredCheckBlur(inputtx) {
    if (inputtx.value.length == 0) {
        removeClass(inputtx);
        //return false;
    } else {
        addClass(inputtx);
        //return true;
    }

}

for (let i = 0; i < input.length; i++) {
    let item = input[i];
    item.addEventListener('focus', () => addClass(item));
    item.addEventListener('change', () => addClass(item));
    item.addEventListener('blur', () => requiredCheckBlur(item));
}


function checkCountryVal(i) {
    //var subjectSel = document.getElementById("country");
    /*  var subjectSel = document.getElementById('country249');
     var topicSel = document.querySelector(".form-field.state");
     var stateSel = document.getElementById("state249");
     console.log(i);
     let thisVal = 'United States';
     if (i.replace(/\s+/g, '').toLowerCase() == thisVal.replace(/\s+/g, '').toLowerCase()) {   
         topicSel.classList.remove('hidden');
         addClass(subjectSel);
     } else {
         topicSel.classList.add('hidden');
         stateSel.selectedIndex = null;
     } */
    //var subjectSel = document.getElementById('country249');
    var topicSel = document.querySelector('.form-field.state');
    var state = document.getElementById('state249');
    var topicSelUS = document.getElementById('state247');
    var topicSelCan = document.getElementById('state248');
    let stateVal = state.value;
    console.log(i);

    topicSelUS.addEventListener('input', function() {
        let selectedOptTextUS =
            topicSelUS.options[topicSelUS.selectedIndex].value;
        state.value = selectedOptTextUS;
        console.log(state.value);
    });

    topicSelCan.addEventListener('input', function() {
        let selectedOptTextCan =
            topicSelCan.options[topicSelCan.selectedIndex].value;
        state.value = selectedOptTextCan;
        console.log(state.value);
    });


    const checkState = () => {
        if (state.value === '585136') {
            showError(state, 'Please correct the errors above.');
        } else {
            showSuccess(state);
            console.log(state.value);
            // valid = true;
        }
    };
    let thisVal = 'United States';
    let thisValCan = 'Canada';
    if (
        event.target.value.replace(/\s+/g, '').toLowerCase() ==
        thisVal.replace(/\s+/g, '').toLowerCase()
    ) {
        topicSel.classList.remove('hidden');
        topicSelUS.classList.remove('hidden');
        topicSelCan.classList.add('hidden');
        checkState();
    } else if (
        event.target.value.replace(/\s+/g, '').toLowerCase() ==
        thisValCan.replace(/\s+/g, '').toLowerCase()
    ) {
        topicSel.classList.remove('hidden');
        topicSelCan.classList.remove('hidden');
        topicSelUS.classList.add('hidden');
        checkState();
    } else {
        topicSel.classList.add('hidden');
    }
    state.onchange = function(event) {
        checkState();
    };


}

function contactUs(event) {

    var first_name = document.getElementById("first_name249"),
        last_name = document.getElementById("last_name249"),
        phone = document.getElementById("phone249"),
        email = document.getElementById("email249"),
        facility_type_chips =  document.getElementsByName("facility_type_chips"),
        company = document.getElementById("company249"),
        country = document.getElementById("country249"),
        state = document.getElementById("state249"),
        how_did_you_hear_other = document.getElementById("how_did_you_hear_other249"),
        privacy_policy = document.getElementById("privacy_policy249"),
        submitEl = document.querySelector('.submit input'),
        /*   email_preferences = document.getElementById("email_preferences").checked;
         website_comments = document.getElementById("website_comments").value,
          products_food = document.getElementById("products_food").value, */
        tomatch = /^\d{3}-\d{3}-\d{4}$/,
        emailMatch = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        form = document.querySelector('.contactFooter.form'),
        errors = [];

    var errorMessage2 = document.querySelector('small.errors-above');
    const showError = (input, message) => {
        input.parentNode.classList.add('error');
        errorMessage2.classList.add('show');
        errorMessage2.textContent = message;
        event.preventDefault();
    };


    const showErrorChkbox = (input, message) => {
        var parChk = input.parentNode.closest('div');
        parChk.classList.add('error');
        errorMessage2.classList.add('show');
        errorMessage2.textContent = message;
        event.preventDefault();
    };

    const showSuccessChkbox = (input) => {
        var parChk = input.parentNode.closest('div');
        parChk.classList.remove('error');
        errorMessage2.textContent = '';
    }

    const showSuccess = (input) => {
        input.parentNode.classList.remove('error');
        errorMessage2.textContent = '';
    }


    const checkFirstName = () => {
        if (!first_name.value) {
            errors.push("first_name is required");
            showError(first_name, 'Please correct the errors above.');
            removeClass(first_name);
        } else {
            showSuccess(first_name);
            addClass(first_name);
            // valid = true;
        }
    }

    const checkLastName = () => {
        if (!last_name.value) {
            showError(last_name, 'Please correct the errors above.');
            errors.push("last_name is required");
        } else {
            showSuccess(last_name);
            // valid = true;
        }
    }

    const checkPhone = () => {
        if (!phone.value.trim()) {
            showError(phone, 'Please correct the errors above.');
            errors.push("The Phone Number is required.");
        }
        /* else if (!tomatch.test(phone.value.trim())) {
                   errors.push("The phone number must be formated as follows: XXX-XXX-XXXX.");
                   showError(phone, 'The phone number must be formated as follows: XXX-XXX-XXXX.');
               } */
        else {
            showSuccess(phone);
            // valid = true;
        }
    }

    const checkEmail = () => {
        if (!email.value.trim()) {
            showError(email, 'Email cannot be blank.');
            errors.push("The email is required.");
        } else if (!emailMatch.test(email.value.trim())) {
            errors.push("The email must be formated as follows: name@domain.com.");
            showError(email, 'Email is not valid.');
        } else {
            showSuccess(email);
            // valid = true;
        }
    }

    const checkCompany = () => {
        if (!company.value) {
            showError(company, 'Please correct the errors above.');
            errors.push("The company is required.");
        } else {
            showSuccess(company);
            // valid = true;
        }
    }

    const checkPrivacy = () => {
        if (!privacy_policy.checked) {
            showErrorChkbox(privacy_policy, 'Please correct the errors above.');
            errors.push("The privacy_policy is required.");
        } else {
            showSuccessChkbox(privacy_policy);
            // valid = true;
        }
    }



    const checkHowDidHearUs = () => {
        if (!how_did_you_hear_other.value) {
            errors.push("how_did_you_hear_other is required");
            showError(how_did_you_hear_other, 'Please correct the errors above.');
        } else {
            showSuccess(how_did_you_hear_other);
            // valid = true;
        }
    }

    const checkCountry = () => {
        // let stateSelect = state.parentNode;
        if (!country.value) {
            showError(country, 'Please correct the errors above.');
            errors.push("The country is required.");

        }
        /* else if (country.value == 'United States') {
                   stateSelect.classList.remove('hidden');
               } */
        else {
            showSuccess(country);
            // valid = true;
        }
    }

    /*   const checkState = () => {
          // let stateSelect = state.parentNode;
          if (!state.value) {
              showError(state, 'Please correct the errors above.');
              errors.push("By selecting USA for country, state is required.");
          }
       
          else {
              showSuccess(country);
              // valid = true;
          }
      } */


    const btnloader = document.createElement('span');
    btnloader.classList.add("button-loader");
    submitEl.parentNode.insertBefore(btnloader,
        submitEl.nextSibling);
    const buttonloader = document.querySelector('.button-loader');
    var submitButton = (function(btnval) {
        switch (btnval) {
            case 'disable':
                submitEl.value = "Request Demo";
                submitEl.classList.remove('submitting-form');
                submitEl.classList.add('disabled-form');
                btnloader.remove();
                submitEl.disabled = 'disabled';
                break;
            case 'enable':
                submitEl.value = "Request Demo";
                submitEl.disabled = false;
                submitEl.classList.remove('submitting-form');
                submitEl.classList.remove('disabled-form');
                submitEl.classList.remove('cancelled-form');
                btnloader.remove();
                break;
            case 'submitting':
                submitEl.value = "Sending...";
                submitEl.disabled = true;
                buttonloader.classList.add('show');
                submitEl.classList.remove('cancelled-form');
                submitEl.classList.add('submitting-form');
                submitEl.classList.remove('disabled-form');
                buttonloader.classList.add('show');
                break;
            case 'cancelled':
                submitEl.value = "Request Demo";
                submitEl.disabled = true;
                submitEl.classList.remove('submitting-form');
                submitEl.classList.add('cancelled-form');
                submitEl.classList.remove('disabled-form');
                btnloader.remove();
                break;
        }
    });

    const checkErrors = () => {

        if (errors.length) {
            event.preventDefault();
            console.log(errors.join("\n"));
            // submitButton('cancelled');
            // setTimeout(submitButton('cancelled'), 4000);
        }
    }


    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args);
                submitButton('enable');
            }, delay);
        };
    };



    checkFirstName();
    checkEmail();
    checkLastName();
    checkCountry();
    // checkState();
    checkCompany();
    checkHowDidHearUs();
    checkPhone();
    checkPrivacy();
    checkErrors();






    form.addEventListener('input', debounce(function(e) {
        switch (e.target.id) {
            case 'first_name':
                checkFirstName();
                break;
            case 'email':
                checkEmail();
                break;
            case 'last_name':
                checkLastName();
                break;
            case 'company':
                checkCompany();
                break;
            case 'phone':
                checkPhone();
                break;
            case 'country':
                checkCountry();
                break;
            case 'how_did_you_hear_other':
                checkHowDidHearUs();
                break;
            case 'privacy_policy':
                checkPrivacy();
                break;
        }
    }));




    if (errors.length) {
        submitButton('cancelled')
    } else {
        submitButton('submitting');
      //  e.preventDefault();
    }




}


var errorMessage2 = document.querySelector('small.errors-above'),
    state = document.getElementById('state249');
//  errors = [];
const showError = (input, message) => {
    input.parentNode.classList.add('error');
    errorMessage2.classList.add('show');
    errorMessage2.textContent = message;
    event.preventDefault();
};

const showSuccess = (input) => {
    input.parentNode.classList.remove('error');
    errorMessage2.textContent = '';
};
/* 
function checkCountryFooter(i) {
    //var subjectSel = document.getElementById("country");
    var topicSel = document.querySelector('.form-field.state');
    console.log(i);

    let thisVal = 'United States';
    if (
        i.replace(/\s+/g, '').toLowerCase() ==
        thisVal.replace(/\s+/g, '').toLowerCase()
    ) {
        topicSel.classList.remove('hidden');
    } else {
        topicSel.classList.add('hidden');
    }
} */
/* var subjectSel = document.getElementById('country249');
var topicSel = document.querySelector('.form-field.state');
var state = document.getElementById('state249');
var topicSelUS = document.getElementById('state247');
var topicSelCan = document.getElementById('state248');

if (subjectSel) {
    subjectSel.onchange = function(event) {
        let thisVal = 'United States';
        let thisValCan = 'Canada';
        if (
            event.target.value.replace(/\s+/g, '').toLowerCase() ==
            thisVal.replace(/\s+/g, '').toLowerCase()
        ) {
            topicSel.classList.remove('hidden');
            topicSelUS.classList.remove('hidden');
            topicSelCan.classList.add('hidden');
            checkState();
        } else if (
            event.target.value.replace(/\s+/g, '').toLowerCase() ==
            thisValCan.replace(/\s+/g, '').toLowerCase()
        ) {
            topicSel.classList.remove('hidden');
            topicSelCan.classList.remove('hidden');
            topicSelUS.classList.add('hidden');
            checkState();
        } else {
            topicSel.classList.add('hidden');
        }
    };

    state.onchange = function(event) {
        checkState();
    };

    const checkState = () => {
        if (state.value === '585136') {
            showError(state, 'Please correct the errors above.');
            //  errors.push("By selecting USA for country, state is required.");
        } else {
            showSuccess(state);
            // valid = true;
        }
    };
} */