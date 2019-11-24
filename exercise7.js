console.log('nomor 2')
var rows1=10
for (let i = 0; i < rows1; i++) {
    console.log('*')
    }
    
    
console.log('nomor 2')
var rows2 = 5
let i = 0
var hasil =''

for (let j = 0; j < rows2; j++) {
    while (i<rows2) {
        i++
        hasil+='*'
    }
    console.log(hasil)
}



console.log('nomor 3')
var rows3=5
j=''
for (let k = 0; k < rows3; k++) {
    k +='*'
    for (let i =0; i < rows3; i++) {
        j +='*'
        console.log(j)
    }
}