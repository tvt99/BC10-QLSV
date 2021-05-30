function Validation(){
    this.kiemTraRong = function(input, divId, mess){
        if(input.trim() === ""){
            //thông báo lỗi
            getEle(divId).innerHTML = mess;
            //getEle(divId).style.color = "red";
            getEle("divMMaErr").className = "alert alert-danger";
            return false;
        }else{
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
    }

    this.kiemTraDoDaiKiTu = function(input, divID, mess, min, max){
        if(input.length >= min && input.length <= max){
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }
        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert alert-danger";
        return false;
    }

    this.kiemTraKiTuChuoi = function(input,divId, mess){
        var letter = "^[A-Za-z]+$";
        if(input.match(letter)){
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;        
        }
        getEle(divId).innerHTML = "";
        getEle(divId).className = "";
        return true;
    }

}