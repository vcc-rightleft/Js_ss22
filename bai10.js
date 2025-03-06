let numbers = []; // Khởi tạo mảng rỗng

while (true) {
    let choice = prompt(
        "MENU\n\n" +
        "1. Nhập vào mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Thêm phần tử\n" +
        "4. Sửa phần tử\n" +
        "5. Xóa phần tử\n" +
        "6. Thoát\n\n" +
        "Lựa chọn của bạn:"
);

switch (choice) {
    case "1": 
        let input = prompt("Nhập vào các số, cách nhau bởi dấu phẩy (,):");
        numbers = input.split(",").map((num) => Number(num.trim()));
        alert("Mảng đã được nhập!");
    break;

    case "2": 
        alert("Mảng hiện tại: " + numbers.join(", "));
        break;

    case "3": 
        let addNum = Number(prompt("Nhập số cần thêm:"));
        numbers.push(addNum);
        alert("Đã thêm " + addNum);
        break;

    case "4": 
        let indexEdit = Number(prompt("Nhập vị trí cần sửa (tính từ 0):"));
        if (indexEdit >= 0 && indexEdit < numbers.length) {
        let newValue = Number(prompt("Nhập giá trị mới:"));
        numbers[indexEdit] = newValue;
        alert("Đã sửa thành " + newValue);
    } else {
        alert("Vị trí không hợp lệ!");
    }
    break;

    case "5": 
        let indexDelete = Number(prompt("Nhập vị trí cần xóa (tính từ 0):"));
        if (indexDelete >= 0 && indexDelete < numbers.length) {
        let deletedValue = numbers.splice(indexDelete, 1);
        alert("Đã xóa phần tử: " + deletedValue);
    } else {
        alert("Vị trí không hợp lệ!");
    }
    break;

    case "6":
        alert("Thoát chương trình.");
        break;

    default:
        alert("Lựa chọn không hợp lệ!");
}

    if (choice === "6") break; 
}
