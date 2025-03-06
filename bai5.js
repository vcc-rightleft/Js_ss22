let chan = 0;
let le=0
let a = prompt("moi nhap vao");
if (Number.isInteger(+a)) {
    tong = a.split("");
    for (let i = 0; i < tong.length; i++){
        let num = Number(tong[i]);
        if (tong[i] % 2 == 0) {
            chan +=num ;
        } else {
            le +=num;
        }
    
    }
}alert("tong so le "+le+ " tong chan "+chan)