function bandingkanAngka(angka1, angka2) {
    if (angka1<angka2) {
        return console.log(true)
    } else if (angka1>angka2) {
        return console.log(false)
    } else if (angka1===angka2) {
        return console.log(-1)
    } else {
        return console.log ('masukan angka1 dan angka2 dengan input number(bukan string)')
    }
} 

console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka('empat', 4));
console.log(bandingkanAngka(3, 3)); 
console.log(bandingkanAngka(17, 2)); 