let number = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8];
let a = prompt("Moi nhap vao");
let dem = 0;
for (let i = 0; i < number.length; i++){
    if (+a === +number[i]) {
        dem++;
    }
} dem > 0 ? alert("so " + a + " xuat hien " + dem + " trong mang") : alert("so " + a + " khong ton tai trong mang");
