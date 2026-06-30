
let form = document.getElementById("sign-up-form")
let eye = document.querySelector(".fa-eye");
let eyeSlash = document.querySelector(".fa-eye-slash");
let inputPassword = document.getElementById("password")
eye.addEventListener("click", () => {
    inputPassword.type = "text";
    eye.style.display = "none";
    eyeSlash.style.display = "inline-block";
});

eyeSlash.addEventListener("click", () => {
    inputPassword.type = "password";
    eyeSlash.style.display = "none";
    eye.style.display = "inline-block";
});
function validatePassword() {
    let passwordIn = document.getElementById("password").value
    let passwordError = document.getElementById("password-error");
    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    let passwordRegex2 = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    passwordError.textContent = ""

    if (passwordIn === "") {
        passwordError.textContent = "Mật khẩu không được để trống";
        return false;
    }
    if (passwordIn.length < 8) {
        passwordError.textContent = "Mật khẩu tối thiểu 8 ký tự"
        return false;
    }
    if (passwordRegex.test(passwordIn) === false) {
        passwordError.textContent = "Mật khẩu phải có cả chữ và số";
        return false;
    }
    if (passwordRegex2.test(passwordIn) === false) {
        passwordError.textContent = "Mật khẩu phải có cả chữ hoa và chữ thường";
        return false;
    }
    return true;
}
inputPassword.addEventListener("input", function () {
    document.getElementById("password-error").textContent = "";
});
form.addEventListener("submit", function (event) {
    event.preventDefault()
    // console.log("kiểm tra")
    document.getElementById("username-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    let inputEmail = document.getElementById("email").value
    let inputUsername = document.getElementById("username").value
    let inputPassword = document.getElementById("password").value
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  


    if (inputEmail === "") {
        document.getElementById("email-error").textContent = "Email không được để trống"
        return;
    }
    if (emailRegex.test(inputEmail) === false) {
        document.getElementById("email-error").textContent = "Email không đúng định dạng"
        return;
    }
    if (inputUsername === "") {
        document.getElementById("username-error").textContent = "Username không được để trống"
        return;
    }
    if (validatePassword() === false) {
        return;
    }
    // if (inputEmail === "") {
    //     alert("Email không được để trống")
    //     return;
    // }
    // if (emailRegex.test(inputEmail) === false) {
    //     alert("Email không đúng định dạng")
    //     // document.querySelector(".email-error").classList.remove("hidden")
    //     return;
    // }
    // if (inputUsername === "") {
    //     alert("Tên người dùng không được để trống")
    //     return;
    // }

    // if (inputPassword === "") {
    //     alert("Password không được để trống")
    //     return;

    // }
    // if (inputPassword.length < 8) {
    //     alert("Mật khẩu tối thiểu 8 ký tự")
    //     return;
    // }
    // if (passwordRegex.test(inputPassword) === false) {
    //     alert("Mật khẩu phải bao gồm cả chữ và số")
    //     return;
    // }
    // if (passwordRegex2.test(inputPassword) === false) {
    //     alert("Mật khẩu phải có cả chữ thường và chữ hoa")
    //     return;
    // }
    // alert("Đăng ký thành công");
    // setTimeout(function () {
    //     window.location.href = "sign-in.html";
    // }, 1500);
    let msg = document.getElementById("msg");
    let signUp = document.getElementById("sign-up-toast");


    msg.classList.add("show");//hiện hộp mess
    signUp.classList.remove("hidden");// hiện thông báo

    let users = JSON.parse(localStorage.getItem("users"));
    // console.log("users");

    let max = 0
    for (let i = 0; i < users.length; i = i + 1) {
        let number = Number(users[i].usercode.substring(1))
        if (number > max) {
            max = number;

        }
    }
    let newCode = max + 1;


    let newUser = {
        usercode: "U" + newCode,
        username: inputUsername,
        email: inputEmail,
        password: inputPassword,
        role: "admin",
        birthday: "",
        status: "Deactive",
        description: "National again month truth. Actually civil table put nearly base."

    }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
    setTimeout(() => {
        msg.classList.remove("show");
        signUp.classList.add("hidden");
        window.location.href = "sign-in.html";
    }, 1500);
});
