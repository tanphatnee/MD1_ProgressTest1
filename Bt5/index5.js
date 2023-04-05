let employees = ["Lâm", "Hùng", "Phát"];
let CRUD = "";

do {
    CRUD = prompt("Nhập CRUD để thêm, đọc, sửa hoặc xoá nhân viên: ").toUpperCase();
    
    switch (CRUD) {
        case "R":
            console.log("Danh sách nhân viên:");
            for (let i = 0; i < employees.length; i++) {
                console.log(`${i + 1}. ${employees[i]}`);
            }
            break;
        case "C":
            let newEmployee = prompt("Nhập tên nhân viên mới:");
            employees.push(newEmployee);
            console.log(`Thêm nhân viên "${newEmployee}" thành công!`);
            break;
        case "U":
            let index = +prompt("Nhập số thứ tự của nhân viên cần sửa:");
            let newName = prompt("Nhập tên mới cho nhân viên:");
            employees[index - 1] = newName;
            console.log(`Cập nhật thành công tên nhân viên số ${index} thành "${newName}"`);
            break;
        case "D":
            let indexToDelete = +prompt("Nhập số thứ tự của nhân viên cần xoá:");
            let employeeToDelete = employees[indexToDelete - 1];
            employees.splice(indexToDelete - 1, 1);
            console.log(`Xoá nhân viên "${employeeToDelete}" thành công!`);
            break;
        default:
            alert("Bạn đã nhập sai lựa chọn, vui lòng nhập lại!");
    }
} while (CRUD !== "Q");
