let modal = document.querySelector('.modal')

function validation() {

    var xv = document.getElementById('username').value;

    if (isNaN(xv)) {
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = '1لطفا اطلاعات را به درستی وارد نمایید'
        modal.style.display = 'inline'
    } 
    
    else if (xv == "") {
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = 'کد ملی خود را وارد نمایید'
        modal.style.display = 'inline'
    } 
    
    else if (xv.length < 10) {
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = 'کد ملی وارد شده کمتر از ده رقم است'
        modal.style.display = 'inline'
    } 
    
    else {
        var yy = 0;
        var yv = parseInt(yv);

        for (let i = 0; i < xv.length; i++) {
            yv = xv[i] * (xv.length - i);
            yy += yv;
        }

        var x = yy % 11;

        if (x === 0) {
            modal.style.background = 'green'
            modal.innerHTML = 'لاگین با موفقیت انجام شد'
            modal.style.display = 'inline'
        } 
        
        else {
            modal.style.background = 'rgb(223, 28, 28)'
            modal.innerHTML = 'کد ملی وارد شده نامعتبر است'
            modal.style.display = 'inline'
        }
        yy = 0;
    }
}

