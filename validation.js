let inputEmailElm = document.querySelector("#inputEmail")
let modal = document.querySelector('.modal')

function emailcheck() {

    inputEmailElmValue = inputEmailElm.value
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/; 

    console.log(inputEmailElmValue)
    if (!(inputEmailElmValue.match(regex))) {
        modal.style.background = "rgb(223, 28, 28)"
        modal.innerHTML = "ایمیل وارد شده صحیح نمیباشد"
        modal.style.display = "inline"
        setTimeout(function () {
        modal.style.display = 'none'
        }, 3000)
        return false;
    }
    else{
        return true;
    }
    
}

let passwordElm = document.querySelector("#inputPass")
let passwordSecondElm = document.querySelector("#inputPasstwo")


function checkpassword () {

    let passwordElmValue = passwordElm.value
    let passwordSecondElmValue = passwordSecondElm.value

    console.log(passwordElmValue)
    console.log(passwordSecondElmValue)

    if (passwordElmValue.length < 8 || passwordElmValue === null || passwordSecondElm.length < 8 || passwordSecondElm === null){
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = "رمز وارد شده صحیح نمیباشد"
        modal.style.display = 'inline'
        setTimeout(function () {
        modal.style.display = 'none'
        }, 3000)
        return false;
    }
    else if (passwordElmValue === passwordSecondElmValue){
        return true;
    }
    else {
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = "رمز وارد شده صحیح نمیباشد"
        modal.style.display = 'inline'
        setTimeout(function () {
        modal.style.display = 'none'
        }, 3000)
        return false;
    }
    
}

let myInputElm = document.querySelector("#myInput")
let myButtonElm = document.querySelector("#myButton")

function mobileCheck() {

    let inputElmValue = myInputElm.value
    let buttonElmValue = myInputElm.value

    var regex = /^[0]?[9][0-9]{9}$/

    if (regex.test(inputElmValue)) {
        return true;
    }
    else{
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = "شماره همراه وارد شده صحیح نمیباشد"
        modal.style.display = 'inline'
        setTimeout(function () {
         modal.style.display = 'none'
        }, 3000)
        return false;
    }
    
    
}


function gendercheck (){

    let radios = document.getElementsByName("gender");
    console.log("radios");

    for (var i=0; i < radios.length; i++){
        if(radios[i].checked) {
            return true;
        }
    }
    
    modal.style.background = 'rgb(223, 28, 28)'
    modal.innerHTML = "جنسیت را وارد کنید"
    modal.style.display = 'inline'
    setTimeout(function () {
        modal.style.display = 'none'
    }, 3000)
    return false;
}


let inputNameElm = document.querySelector("#inputName")

function checkname () {

    let inputNameElmValue = inputNameElm.value
    
    if (inputNameElmValue == 0){
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = "اسم و فامیل را وارد کنید"
        modal.style.display = 'inline'
        setTimeout(function () {
        modal.style.display = 'none'
        }, 3000)
        return false;
    }
    else{
        // alert("shod")
        return true;
    }

    
}