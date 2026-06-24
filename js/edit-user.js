let userEdit = JSON.parse(localStorage.getItem("userEdit"))
// console.log(userEdit)
document.getElementById("user-code").value = userEdit.usercode;
    document.getElementById("email").value = userEdit.email;
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
    if(inputHovaten===""){
        alert("Họ và tên không được để trống")
        return;
    }
if(input)
        // let newEdit = {
        //     usercode: userEdit.usercode,
        //     hovaten: inputHovaten,
        //     username: inputUsername,
        //     birthday: inputBirthday,
        //     description: inputDescription,
        //     role: inputRole,
        //     email: userEdit.email,
        //     password: inputPassword,
        //     status: inputStatus
        // }

})

