let inputString = prompt("Nhập vào một chuỗi:");
let words = inputString.split(" ");
let resultString = "";
for (let i = 0; i < words.length; i++) {
  let currentWord = words[i];
  let capitalizedLetter = currentWord.charAt(0).toUpperCase();
  let restOfWord = currentWord.slice(1);
  resultString += capitalizedLetter + restOfWord + " ";
}
alert(resultString);
