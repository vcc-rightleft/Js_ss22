let input = prompt("Mời nhập vào dãy số:");
if (Number.isInteger(Number(input))) {
    let max = input.split(""); 
    let max1 = max[0];
    for (let i = 1; i <= max.length-1; i++){
        if (max1 < max[i]) {
            max1 = max[i];
        }
    } alert(max1);
} else {alert("Dãy số không hợp lệ");}
