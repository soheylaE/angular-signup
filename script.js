///let userNameInput = document.querySelector(".username")
//let passwordInput = document.querySelector(".password")
//let modal = document.querySelector(".modal")

//function dataValidation () {
    //let usernameValue = userNameInput.value
    //let passwordValue = passwordInput.value

//if (usernameValue.length < 10 || usernameValue.length === null || passwordValue.length < 8 || passwordValue.length === null) {
    //modal.innerHTML = "لطفا اطلاعات را به درستی وارد نمایید"
    //modal.style.background = "rgb(223, 28, 28)"
    //modal.style.display = "inline"
    //setTimeout(function () {
        //modal.style.display = "none"
    //}, 3000)
//} else {
    //modal.style.background = "green"
    //modal.innerHTML = "لاگین با موفقیت انجام شد"
    //modal.style.display = "inline"
//}

    //setTimeout(function () {
        //modal.style.display = "none"
    //}, 3000)
//}

let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

function dataValidation() {
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if (userNameValue.length < 12 || passwordValue.length < 8) {
        // alert('Error')
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید'
        modal.style.display = 'inline'
    } else {
        modal.style.background = 'green'
        modal.innerHTML = 'لاگین با موفقیت انجام شد'
        modal.style.display = 'inline'
    }

    setTimeout(function () {
        modal.style.display = 'none'
    }, 3000)
}