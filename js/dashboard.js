//hiển thị danh sách users lên bảng
let users = JSON.parse(localStorage.getItem("users")) || []
// console.log(users)
function renderUsers(list = users) {
  let tBody = document.getElementById("table-body");
 
  tBody.innerHTML = ""
  list.forEach((element, index) => {
    let tr = document.createElement("tr")
   
    tr.innerHTML = `
      <td>${element.usercode}</td>
       <td>${element.username}</td>
       <td>${element.email}</td>
       <td>${element.role}</td>
       <td>${element.birthday}</td>
        <td class ="${element.status.toLowerCase()}">${element.status}</td>
    
    
          <td>  <div class="action-buttons">
                <button id=${index} class="btn-edit">Sửa</button>
                <button id=${index} class="btn-delete">Xóa</button>
              </div>
          </td>
    `
    tBody.appendChild(tr)
  })
 
}

 renderUsers()


//xóa từng hàng

let tBody = document.getElementById("table-body")
tBody.addEventListener("click", function (event) {
  //  console.log(event.target)
  if (event.target.classList.contains("btn-delete")) {
   let xoa = confirm("Bạn có chắc chắn muốn xóa")
    if (xoa){let deleteUser = Number(event.target.id)

    // console.log("kiểm tra" + deleteUser)
    // console.log(typeof(event.target.id))
    users.splice(deleteUser, 1)
    localStorage.setItem("users", JSON.stringify(users))
    renderUsers()}
  }
})
// console.log(users)
//tìm kiếm user theo thên 
let searchBox = document.getElementById("search-box");
searchBox.addEventListener("input", function (event) {

  let search = document.getElementById("search-box").value.toLowerCase()
  let user = users.find(user => user.username.toLowerCase() === search)
  console.log(user)
  if (user) {
    renderUsers([user])
  }
  else {
    renderUsers([])
  }
  if (search === "") {
    renderUsers()
  }
})

//tính năng điều hướng sang trang chỉnh sửa edit

// let tBody = document.getElementById("table-body")
tBody.addEventListener("click", function (event) {
  //  console.log(event.target)
  if (event.target.classList.contains("btn-edit")) {
    let index = Number(event.target.id)
    let userEdit = users[index]
    // console.log(userEdit)
    localStorage.setItem("userEdit",JSON.stringify(userEdit))
    window.location.href= "edit-user.html"
  }


})
let userEdit = JSON.parse(localStorage.getItem("userEdit"))
