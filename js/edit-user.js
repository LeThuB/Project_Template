let users = JSON.parse(localStorage.getItem("users"));
// console.log(users)
let userEdit = JSON.parse(localStorage.getItem("userEdit"))
// console.log(userEdit)
document.getElementById("user-code").value = userEdit.usercode;
document.getElementById("email").value = userEdit.email;
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
let form = document.getElementById("edit-user-form")
form.addEventListener("submit", function (event) {
    event.preventDefault()

    let inputHovaten = document.getElementById("hovaten").value;
    let inputUsername = document.getElementById("username").value

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
    if (inputHovaten === "") {
        alert("Họ và tên không được để trống")
        return;
    }
    if (inputUsername === "") {
        alert("Username không được để trống")
        return;
    }
     if(inputPassword ===""){
        alert("Password không được để trống")
     }

    if (inputPassword.length < 8) {
        alert("Mật khẩu tối thiểu 8 ký tự")
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


})
