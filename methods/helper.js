var validation = {
    kiemtraRong: function(value,name){
        if(value.trim() === ''){
            document.querySelector(`[data-error-required=${name}]`).innerHTML = ` ${name} không được bỏ trống`;
            return false;
        }
    document.querySelector(`[data-error-required=${name}]`).innerHTML ="";
    return true;
    } ,
    kiemTraTatCaCacKyTu: function(value,name){
        var regexLetter = /^[A-Za-z]+$/;
        if(regexLetter.test(value)){
            document.querySelector(`[data-error-regexLetter=${name}]`).innerHTML = "";
            return true;
        }
        document.querySelector(`[data-error-regexLetter=${name}]`).innerHTML = "Họ & tên phải là kí tự";
        return true;
    },
    kiemTraEmail: function(value,name){
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(value)){
            document.querySelector(`[data-error-regexEmail=${name}]`).innerHTML = "";
            return true;
        }
        document.querySelector(`[data-error-regexEmail=${name}]`).innerHTML = "Email không hợp lệ";
        return true;

    },
    kiemTraGiaTri: function(value,name,minValue,maxValue){
        if(Number(value)<minValue||Number(value)>maxValue){
            document.querySelector(`[data-error-min-max-value=${name}]`).innerHTML = `${name} từ ${minValue} đến ${maxValue}`;
            return false;
        }
        return true;
    }
    
}