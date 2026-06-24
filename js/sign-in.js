

let form = document.getElementById("sign-in-form")

let users = JSON.parse(localStorage.getItem("users"))
// console.log(users)
form.addEventListener("submit", function (event) {
    event.preventDefault()
    // console.log("kiểm tra")
    let inputEmail = document.getElementById("email").value
    let inputPassword = document.getElementById("password").value
    if (inputEmail === "") {
        alert("Email không được để trống")
        return;
    }
    if (inputPassword === "") {
        alert("Password không được để trống")
        return;
    }
    let user = users.find(
        user => user.email === inputEmail && user.password === inputPassword
    )
    if (user === undefined) {
        alert("Email hoặc mật khẩu không tồn tại")
        return;
    }
    document.getElementById("msg").classList.add("show")
    document.getElementById("login-toast").classList.remove("hidden");
    // alert("đăng nhập thành công")
    setTimeout(() => {
        // document.getElementById("msg").classList.remove("show")
        // document.getElementById("login-toast").classList.add("hidden")
     window.location.href = "dashboard.html";
}, 1500);
   
})
