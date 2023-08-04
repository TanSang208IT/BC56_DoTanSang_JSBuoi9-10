var arrNhanVien = [];

document.querySelector("#btnThemNV").onclick = function () {
  var nv = new NhanVien();
  nv.taiKhoan = document.getElementById("tknv").value;
  nv.tenNhanVien = document.getElementById("name").value;
  nv.email = document.getElementById("email").value;
  nv.password = document.getElementById("password").value;
  nv.ngayLam = document.getElementById("datepicker").value;
  nv.luongCoBan = document.getElementById("luongCB").value * 1;
  nv.gioLam = document.getElementById("gioLam").value * 1;
  nv.heSoChucVu = document.getElementById("chucVu").value;
  console.log(nv);

  var slChucVu = document.querySelector("#chucVu");

  nv.chucVu = slChucVu[slChucVu.selectedIndex].innerHTML;
  console.log(slChucVu[slChucVu.selectedIndex].innerHTML);
// KIỂM TRA RỖNG 
  var valid = validation.kiemtraRong(nv.taiKhoan,'tknv') & validation.kiemtraRong(nv.tenNhanVien,'name') & validation.kiemtraRong(nv.email,'email') & validation.kiemtraRong(nv.password,'password');
 //KIỂM TRA KÍ TỰ
 var valid = valid & validation.kiemTraTatCaCacKyTu(nv.tenNhanVien,'name');
//KIỂM TRA EMAIL
  var valid = valid & validation.kiemTraEmail(nv.email,'email');
//KIỂM TRA GIÁ TRỊ
var valid = valid & validation.kiemTraGiaTri(nv.luongCoBan,'luongCB',1000000,20000000);
var valid = valid & validation.kiemTraGiaTri(nv.gioLam,'gioLam',80,200);
  arrNhanVien.push(nv);
  console.log(arrNhanVien);

  renderTable(arrNhanVien);
};

function renderTable (arrNV){
    var content = "";
    for ( var i = 0; i < arrNV.length; i++){
        var nhanVien = arrNV[i];
        content += `
        <tr>
        <td>${nhanVien.taiKhoan}</td>
        <td>${nhanVien.tenNhanVien}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.ngayLam}</td>
        <td>${nhanVien.chucVu}</td>
        <td>${nhanVien.tinhLuong().toLocaleString()}</td>
        <td>${nhanVien.xepLoai()}</td>
        <td>
        <button onclick="editNhanVien('${i}')" class="btn btn-success">Edit</i>
        </button>
        <button onclick="xoaNhanVien('${i}')" class="btn btn-warning">Delete</i>
        </button>
        </td>
        </tr>`;

    }
    document.getElementById("tableDanhSach").innerHTML = content;
}
//XOÁ NHÂN VIÊN
function xoaNhanVien (iDel){
arrNhanVien.splice(iDel,1);
renderTable(arrNhanVien);
}
//SỬA THÔNG TIN NHÂN VIÊN( không biết cách link nút Edit để mở bảng cập nhật thông tin)
// function editNhanVien(iEdit){
//   var nvEdit = arrNhanVien[iEdit];
//   document.getElementById("tknv").value = nvEdit.taiKhoan;
//   document.getElementById("name").value= nvEdit.tenNhanVien;
//   document.getElementById("email").value= nvEdit.email;
//   document.getElementById("password").value= nvEdit.password;
//   document.getElementById("datepicker").value= nvEdit;
//   document.getElementById("luongCB").value= nvEdit.luongCoBan;
//   document.getElementById("gioLam").value= nvEdit.gioLam;
//   document.getElementById("chucVu").value= nvEdit.chucVu;
// }