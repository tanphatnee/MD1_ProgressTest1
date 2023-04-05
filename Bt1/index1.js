let str = prompt("Nhập chuỗi cần đảo ngược: ");
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
let reversedStr = reverseString(str);
alert(`Chuỗi đảo ngược: ${reversedStr}`);
