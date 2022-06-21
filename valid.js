//validation for input

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var email_eror = document.getElementById('email_error');
var pass_eror = document.getElementById('pass_error');
email.addeventlistener('textinput',email_verify)
password.addeventlistener('textinput',pass_verify)
function validated(){
    if (email.value.length < 9) {
        email.style.border = "2px solid red";
        email_error.style.display = "block";

        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        email.style.border = "2px solid red";
        pass_error.style.display = "block";

        password.focus();
        return false;
    }
}
function email_verify(){
    if (email.value.length>= 8){
        email.style.border = "2px solid silver";
    email_error.style.display = "none";
    return true;

    }
}