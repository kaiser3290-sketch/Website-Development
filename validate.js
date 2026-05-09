function validate(e) {
    if (e) {
        e.preventDefault();
    }
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var message_box = document.getElementById("message");
    var text = "";
    if (email === "") {
        text = "Plz enter your email";
    }
    else if (password === "") {
        text = "plz enter your password";
    }
    else {
        text = "login succesful";
        document.getElementById("login-form").style.display = "none";
    }
    message_box.innerHTML = text;
}
document.getElementById("login-form").onsubmit = validate;
