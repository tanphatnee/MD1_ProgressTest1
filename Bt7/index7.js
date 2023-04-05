let books = [
    { name: "Tôi thấy hoa vàng trên cỏ xanh" },
    { name: "Pro Git" },
    { name: "Sức mạnh của ngôn ngữ thể hiện" },
  ];
  
  // Hiển thị danh sách các sách trong cửa hàng
  console.log("Danh sách các sách trong cửa hàng:");
  for (let i = 0; i < books.length; i++) {
    console.log(`${i + 1}. ${books[i].name}`);
  }
  
  // Thêm một đầu sách mới vào cửa hàng
  let addNewBook = (newBookName) => {
    books.push({ name: newBookName });
  };
  
  // Cập nhật số lượng sách trong cửa hàng
  let updateBookQty = (bookIndex, newQuantity) => {
    // do nothing because we are not tracking quantity
  };
  
  // Xóa một cuốn sách khỏi cửa hàng
  let deleteBook = (bookIndex) => {
    books.splice(bookIndex, 1);
  };
  
  // Test các chức năng thêm, cập nhật và xóa sách
  console.log("Sau khi thêm sách mới và cập nhật số lượng sách:");
  addNewBook("Làm giàu không khó");
  updateBookQty(0, 10);
  for (let i = 0; i < books.length; i++) {
    console.log(`${i + 1}. ${books[i].name}`);
  }
  console.log("Sau khi xóa sách khỏi cửa hàng:");
  deleteBook(1);
  for (let i = 0; i < books.length; i++) {
    console.log(`${i + 1}. ${books[i].name}`);
  }
  