
let form = document.getElementById("sign-in-form")

let users = JSON.parse(localStorage.getItem("users"))
// console.log(users)
 let inputEmail = document.getElementById("email");
  let inputPassword = document.getElementById("password");
  inputEmail.addEventListener("input", function () {
        document.getElementById("email-error").textContent = "";
        document.getElementById("login-error").classList.add("hidden");
    })
    inputPassword.addEventListener("input", function () {
        document.getElementById("password-error").textContent = "";
        document.getElementById("login-error").classList.add("hidden");
    });
form.addEventListener("submit", function (event) {
    event.preventDefault()
    // console.log("kiểm tra")
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("login-error").classList.add("hidden");
   
    if (inputEmail.value === "") {
        document.getElementById("email-error").textContent = "Email không được để trống"
        return;
    }
    
    if (inputPassword.value === "") {
        document.getElementById("password-error").textContent = "Mật khẩu không được để trống";
        return;
    }
    
    let user = users.find(
        user => user.email === inputEmail.value && user.password === inputPassword.value
    )
    if (user === undefined) {
        document.getElementById("login-error").classList.remove("hidden");
        document.getElementById("msg").classList.add("show");
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
