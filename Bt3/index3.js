let input = prompt("Nhập vào một mảng, các phần tử cách nhau bởi dấu phẩy:");
let arr = input.split(",");

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!newArr.includes(arr[i])) {
    newArr.push(arr[i]);
  }
}

alert(newArr);
