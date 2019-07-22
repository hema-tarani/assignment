var chances = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function NextPage() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "hema" && password == "1998") {
        alert("SignIn successfully");
        window.location = "home.html"; // Redirecting to other page.
        return false;
    }
    else if (username == "hema" && password != "1998") {
        alert("Invalid Password");
    }
    else {
        chances--;// Decrementing by one.
        alert("Enter valid Credentials");
        // Disabling fields after 3 attempts.
        if (chances == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("signin").disabled = true;
            return false;
        }
    }
}