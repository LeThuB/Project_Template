
let users = JSON.parse(localStorage.getItem("users")) || [];
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

let form = document.getElementById("add-new-user-form")
inputPassword.addEventListener("input", function () {
    document.getElementById("password-error").textContent = "";
});
form.addEventListener("submit", function (event) {
    event.preventDefault()
    // console.log("kiểm tra")
    document.getElementById("hovatenError").textContent = "";
    document.getElementById("username-error").textContent = "";
    document.getElementById("email-error").textContent = "";

    let inputHovaten = document.getElementById("hovaten").value;
    let inputUsername = document.getElementById("username").value
    let inputEmail = document.getElementById("email").value.trim()
    let inputPassword = document.getElementById("password").value
    let inputRole = document.getElementById("role").value
    let inputBirthday = document.getElementById("dob").value

    let inputStatus;

    if (document.getElementById("status-active").checked) {
        inputStatus = document.getElementById("status-active").value;

    } else {
        inputStatus = document.getElementById("status-deactive").value;
    }
    //  console.log(inputStatus);
    let inputDescription = document.querySelector(".description-text-input").value
    // console.log(inputDescription)
    if (inputHovaten === "") {
        document.getElementById("hovatenError").textContent = "Họ và tên không được để trống"
        return;
    }
    if (inputUsername === "") {
        document.getElementById("username-error").textContent = "Username không được để trống"
        return;
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputEmail === "") {
        document.getElementById("email-error").textContent = "Email không được để trống"
        return;
    }
    if (emailRegex.test(inputEmail) === false) {
        document.getElementById("email-error").textContent = "Email không đúng định dạng"
        return;
    }

    if (validatePassword() === false) {
        return;
    }

    let max = 0;
    for (let i = 0; i < users.length; i = i + 1) {
        let number = Number(users[i].usercode.substring(1))
        if (number > max) {
            max = number;
        }
    };
    let newCode = "U" + (max + 1);
    let newUser = {
        usercode: newCode,
        hovaten: inputHovaten,
        username: inputUsername,
        birthday: inputBirthday,
        description: inputDescription,
        role: inputRole,
        email: inputEmail,
        password: inputPassword,
        status: inputStatus
    }
    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users));
    //   localStorage.setItem("users", JSON.stringify(users))//lưu thông tin người dùng mới vào localstorage

    let msg = document.getElementById("msg");
    let add = document.getElementById("add-toast");

    add.classList.remove("hidden");// hiện thông báo
    msg.classList.add("show");//hiện hộp mess
    setTimeout(() => {
        document.getElementById("msg").classList.remove("show");
        window.location.href = "dashboard.html"
    }, 1500);
});
document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "dashboard.html"
});
