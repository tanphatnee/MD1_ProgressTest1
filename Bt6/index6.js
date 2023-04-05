// Nhập vào ngày, tháng, năm
let ngay = parseInt(prompt("Nhập ngày: "));
let thang = parseInt(prompt("Nhập tháng: "));
let nam = parseInt(prompt("Nhập năm: "));

// Kiểm tra ngày tháng năm có đúng định dạng không
if (isNaN(ngay) || isNaN(thang) || isNaN(nam)) {
  alert("Ngày tháng năm không hợp lệ!");
} else if (thang < 1 || thang > 12) {
  alert("Tháng không hợp lệ!");
} else if (ngay < 1 || ngay > new Date(nam, thang, 0).getDate()) {
  alert("Ngày không hợp lệ!");
} else {
  // Tính ngày tiếp theo
  let ngayTiepTheo = ngay + 1;
  let thangTiepTheo = thang;
  let namTiepTheo = nam;
  let soNgayTrongThang = new Date(nam, thang, 0).getDate();

  if (nam % 4 == 0 && (nam % 100 != 0 || nam % 400 == 0)) {
    // Năm nhuận
    soNgayTrongThang = 29;
  }

  if (ngayTiepTheo > soNgayTrongThang) {
    ngayTiepTheo = 1;
    thangTiepTheo = thang + 1;
    if (thangTiepTheo > 12) {
      thangTiepTheo = 1;
      namTiepTheo = nam + 1;
    }
  }

  // Đưa ra thông tin về ngày tiếp theo
  alert(`Ngày tiếp theo là ngày: ${ngayTiepTheo}/${thangTiepTheo}/${namTiepTheo}`);
}
