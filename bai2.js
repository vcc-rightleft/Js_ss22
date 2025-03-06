let number = [1, 2, 4, 5, 6, 7, 8];
let a = Number(prompt("Moi nhap vao so"));
if (Number.isInteger(a)) {
    for (let i = 0; i <= number.length; i++) {
            if (a != number[i]) {
        alert("Chuc ban may man");
                break;
    } else {
                alert("Bingo");
                break;
    }
    }
}else{alert("moi nhap so")}