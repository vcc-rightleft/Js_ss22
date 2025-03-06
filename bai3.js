let a = Number(prompt("Mời nhập vào:"));
if (Number.isInteger(a)) {
    let b = String(a).split("").reverse().join("");
    alert(b);
} else {
    alert("day khong hop le");
}
