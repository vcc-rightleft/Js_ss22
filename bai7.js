let a = prompt("Mời nhập vào dãy số:");
if (Number.isInteger(+a)) {
let num = a.split("").sort((a, b) => a - b).join("");
    alert(num);
} else {
    alert("Dãy số không hợp lệ");
}
