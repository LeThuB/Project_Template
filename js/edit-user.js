let users = JSON.parse(localStorage.getItem("users"));
// console.log(users)
let userEdit = JSON.parse(localStorage.getItem("userEdit"))
// console.log(userEdit)
document.getElementById("user-code").value = userEdit.usercode;
document.getElementById("email").value = userEdit.email;
let eye = document.querySelector(".fa-eye");
let eyeSlash = document.querySelector(".fa-eye-slash");
// let inputPassword = document.getElementById("password")
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
let inputPassword = document.getElementById("password");
inputPassword.addEventListener("input", function () {
    document.getElementById("password-error").textContent = "";
});
let form = document.getElementById("edit-user-form")
form.addEventListener("submit", function (event) {
    event.preventDefault()
    document.getElementById("hovatenError").textContent = "";
    document.getElementById("username-error").textContent = "";


    let inputHovaten = document.getElementById("hovaten").value;
    let inputUsername = document.getElementById("username").value

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
    if (inputHovaten === "") {
        document.getElementById("hovatenError").textContent = "Họ và tên không được để trống"
        return;
    }
    if (inputUsername === "") {
        document.getElementById("username-error").textContent = "Username không được để trống"
        return;
    }
    if (validatePassword() === false) {
        return;
    }

    let newEdit = {
        usercode: userEdit.usercode,
        hovaten: inputHovaten,
        username: inputUsername,
        birthday: inputBirthday,
        description: inputDescription,
        role: inputRole,
        email: userEdit.email,
        password: inputPassword,
        status: inputStatus
    }
    // console.log(newEdit)
    let index = users.findIndex(u => u.usercode === userEdit.usercode)
    users[index] = newEdit
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.removeItem("userEdit")
    // console.log(users)

    document.getElementById("edit-toast").classList.remove("hidden")
    document.getElementById("msg").classList.add("show")
    setTimeout(() => {
        window.location.href = "dashboard.html"
    }, 1500)
});
