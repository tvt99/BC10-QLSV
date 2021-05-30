//Tạo đối tượng dssv từ lớp đối tượng DanhSachSinhVien
var dssv = new DanhSachSinhVien();

var validation = new Validation();

function getEle(id) {
    return document.getElementById(id);
}

/**
 * Thêm sinh viên
 */
// getEle("btnAdd").onclick = function () {
//     console.log(123);
// };

//callback function: tham số của 1 hàm, là 1 hàm khác
getEle("btnAdd").addEventListener("click", function () {
    //Lấy các thông tin từ user nhập vào thông qua các thẻ input
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _email = getEle("txtEmail").value;
    var _matKhau = getEle("txtPass").value;
    var _ngaySinh = getEle("txtNgaySinh").value;
    var _khoaHoc = getEle("khSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemLy = getEle("txtDiemLy").value;
    var _diemHoa = getEle("txtDiemHoa").value;

    //Tạo đối tượng sinhVien từ lớp đối tượng SinhVien
    //Từ khóa new: tạo đối tượng từ lớp đối tượng
    var sinhVien = new SinhVien(
        _maSV,
        _tenSV,
        _email,
        _matKhau,
        _ngaySinh,
        _khoaHoc,
        _diemToan,
        _diemLy,
        _diemHoa
    );

    // //isValid: là true -> cho phép thmee sv vào mảng
    // var isValid = true;

    // /**
    //  * Validation (kiểm tra tính hợp lệ của dữ liệu đầu vào)
    //  */
    // //kiểm tra validation mã SV
    // if(_maSV.trim() === ""){
    //     //thông báo lỗi
    //     getEle("divMaErr").innerHTML = "Ma sv khong duoc rong";
    //     //getEle("divMaErr").style.color = "red";
    //     getEle("divMMaErr").className = "alert alert-danger";
    //     isValid = false;
    // }else{
    //     getEle("divMaErr").innerHTML = "";
    //     getEle("divMaErr").className = "";
    //     isValid = true;
    // }

    //Kiểm tra validation cho hoten sv
    //if(_tenSV.trim())


       // /**
    //  * Validation (kiểm tra tính hợp lệ của dữ liệu đầu vào)
    //  */
    isValid &= validation.kiemTraRong(_maSV, "divMaErr", "Ma SV khong duoc rong") && validation.kiemTraDoDaiKiTu(_maSV, "divMaErr", "(*) Độ dài kí tự từ 4-20", 4, 20);

    isValid &= validation.kiemTraRong(_maSV, "divTenErr", "Ten SV khong duoc rong");

    isValid &= validation.kiemTraRong(_maSV, "divEmailErr", "Email SV khong duoc rong");

    isValid &= validation.kiemTraRong(_maSV, "divPassErr", "Pass SV khong duoc rong");

    isValid &= validation.kiemTraRong(_maSV, "divNgaySinhErr", "Ngay Sinh SV khong duoc rong");

    isValid &= validation.kiemTraRong(_maSV, "divToanErr", "Diem Toan SV khong duoc rong");

    isValid &= validation.kiemTraRong(_maSV, "divLyErr", "Diem Ly SV khong duoc rong");

    isValid &= validation.kiemTraRong(_maSV, "divHoaErr", "Diem Hoa SV khong duoc rong");
    //kiểm tra nếu như thoogn tin hợp lệ => add sv
    if(isValid){
        dssv.themSinhVien(sinhVien);
        console.log(dssv.list);
    } 

});

function taoBang(arr){
     //reset tbody 
     getEle("tbodySinhVien").innerHTML = "";

    for(var i = 0; i < arr.length; i++){
        //tạo dòng (tr)
        var tagTr = document.createElement("tr");

        //tạo cột (td) - 6 cột
        var tagTd_MaSV = document.createElement("td");
        var tagTd_TenSV = document.createElement("td");
        var tagTd_Email = document.createElement("td");
        var tagTd_NgaySinh = document.createElement("td");
        var tagTd_KhoaHoc = document.createElement("td");
        var tagTd_DTB = document.createElement("td");
    
        //tạo nội dung cho 6 cột
        tagTd_MaSV.innerHTML = arr[i].maSV;
        tagTd_TenSV.innerHTML = arr[i].tenSV;
        tagTd_Email.innerHTML = arr[i].email;
        tagTd_NgaySinh.innerHTML = arr[i].ngaySinh;
        tagTd_KhoaHoc.innerHTML = arr[i].khoaHoc;
        tagTd_DTB.innerHTML = arr[i].tinhDTB();

        //appenChild 6 cột vào dòng
        tagTr.appendChild(tagTd_MaSV);
        tagTr.appendChild(tagTd_TenSV);
        tagTr.appendChild(tagTd_Email);
        tagTr.appendChild(tagTd_NgaySinh);
        tagTr.appendChild(tagTd_KhoaHoc);
        tagTr.appendChild(tagTd_DTB);

        //appenChild dong vào tbody
        getEle("tbodySinhVien").appendChild(tagTr);
    }

}