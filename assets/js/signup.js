const  signupForm = document.getElementById("submit")
    signupForm.addEventListener("click", (event) => {
        event.preventDefault();
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        var fullName = document.getElementById("fullName").value.trim();
        var email = document.getElementById("email").value.trim();
        var phoneNumber = document.getElementById("phoneNumber").value.trim();
        var password = document.getElementById("password").value.trim();
        var passwordConfirmation = document.getElementById("passwordConfirm").value.trim();
        var phoneRegex = /^\d{10,15}$/; 
        var phoneNumber = document.getElementById("phoneNumber").value.trim();
        var fullNameVali = fullName !== "";
        var emailVali = emailRegex.test(email);
        var phoneVali = phoneRegex.test(phoneNumber);
        var passwordVali = passwordRegex.test(password);
        var passwordConfirmationVali = password === passwordConfirmation;
        displayErrorMessage(
            "name-error",
            fullNameVali,
            "Full Name is required"
        );
        displayErrorMessage(
            "email-error",
            emailVali,
            "Email is not valid"
        );
        displayErrorMessage(
            "phone-error",
            phoneVali,
            "Phone is not valid"
        );
        displayErrorMessage(
            "password-error",
            passwordVali,
            "Password must contain at least 8 characters including at least one number, one letter and one special character."
        );
        displayErrorMessage(
            "passwordConfirm-error",
            passwordConfirmationVali,
            "Password confirmation does not match the password."
        );
        if (fullNameVali && 
            emailVali &&
            passwordVali &&
            phoneNumber &&
            passwordConfirmationVali) {

            saveToLocalStorage(fullName, email, phoneNumber, password);
            success();
        }
    });

function displayErrorMessage(id, isVali,message){
    var errorElement = document.getElementById(id);
    if (!isVali){
        errorElement.textContent = message;
    } else{
        errorElement.textContent ="";
    }
}
function success(){
    swal({
        title: "Good job!",
        text: "Signup Success",
        icon: "success",
        button: "Continue",
      }).then(() => {
        window.location.href = "home.html";
      });
}
function saveToLocalStorage(fullName,email,phoneNumber,pass){
    var userData ={
        fullName:fullName,
        email:email,
        phoneNumber:phoneNumber,
        pass:pass,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
}

