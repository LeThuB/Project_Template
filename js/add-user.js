

let users = JSON.parse(localStorage.getItem("users"))

let form = document.getElementById("add-new-user-form")
form.addEventListener("submit", function (event) {
    event.preventDefault()
    // console.log("kiểm tra")
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
        alert("Họ và tên không được để trống")
        return;
    }
    if (inputUsername === "") {
        alert("Username không được để trống")
        return;
    }
    if (inputEmail === "") {
        alert("Email không được để trống")
        return;
    }

    // let emailRegex = /^[^\s@]+@[\s@]+\.[\s@]+$/;

    // if (emailRegex.test(inputEmail) === false) {
    //     alert("Email không đúng định dạng")
    //     return;
    // }
    //??tại sao thông báo email không đúng định dạng hiện lên dù nhập đúng
    if (inputPassword.length < 8) {
        alert("Mật khẩu tối thiểu 8 ký tự")
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
    localStorage.setItem("users", JSON.stringify(users))//lưu thông tin người dùng mới vào localstorage

    let msg = document.getElementById("msg");
    let add = document.getElementById("add-toast");
   
    add.classList.remove("hidden");// hiện thông báo
     msg.classList.add("show");//hiện hộp mess
    setTimeout(() => {
        document.getElementById("msg").classList.remove("show");

    }, 2000);
});
document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "dashboard.html"
});
