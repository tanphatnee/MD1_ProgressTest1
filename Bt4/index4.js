let inputArr = prompt("Nhập một mảng các số, cách nhau bằng dấu phẩy:").split(",");
let arr = inputArr.map(Number);

arr.sort(function(a, b) {
  return a - b;
});

alert(`Mảng đã được sắp xếp theo thứ tự tăng dần:${arr}`);
