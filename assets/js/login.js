const  loginForm = document.querySelector("form");
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value.trim();
        var storedData = JSON.parse(localStorage.getItem("userData"));

        if (storedData && storedData.email === email && storedData.pass === password) {
            success();
        } else {
            error();
        }
    });
}

function error(){
    swal({
        title: "Tài khoản không tồn tại.",
        text: "Mời bạn đăng nhập lại",
        icon: "error",
        button: "Đồng ý",
      });
    }
function success(){
    swal({
        title: "Good job!",
        text:"Login success",
        icon:"success",
        button:"continue",
    }).then(()=> {
        window.location.href = "home.html";
    });
}    
