function NhanVien(){
this.taiKhoan = "";
this.tenNhanVien = "";
this.email = "";
this.password = "";
this.ngayLam = "";
this.luongCoBan = 0;
this.chucVu = "";
this.gioLam = 0;
this.heSoChucVu = 1;

this.tinhLuong = function(){
    var tongLuong = this.luongCoBan * this.gioLam * this.heSoChucVu;
    return tongLuong;
}

this.xepLoai = function () {
    if (this.gioLam >= 192){
        return "Xuất Sắc";
    } else if(this.gioLam < 192 & this.gioLam >= 176){
        return "Giỏi";
    } else if (this.gioLam < 176 & this.gioLam >= 160){
        return "Khá";
    } else {
        return "Trung Bình";
    }
}
}