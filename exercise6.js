console.log('Soal nomor 1')
console.log('LOOPING PERTAMA')
var word='I love coding'
var i=1

while(i<=20){
    console.log(i++,'- '+word)
}

console.log('LOOPING KEDUA')
var word2 ='I will become fullstack developer'
while (i>=1){
    console.log(i--,'- '+word2)
}

console.log('Soal Nomor 2')

console.log('LOOPING PERTAMA')
for(i=1; i<=20; i++){
    console.log(i+'- '+word)
}
console.log('LOOPING KEDUA')
for (i=20;i>=1;i--){
    console.log(i+'- '+word2)
}

console.log('Soal Nomor 3')
console.log('Soal Nomor 3.1 & 3.2')
while (i<=100){
    if(i%2===0){
        console.log(i++,'GENAP')
    } else {
    console.log(i++,'GANJIL')
    }
}

console.log('Soal Nomor 3.3 dan 3.4')

console.log('counter pertambahan 2')
for (i=1;i<=100;i+=2) {
    if (i%3===0){
        console.log(i,' KELIPATAN 3')
    } else {
        console.log(i)
    }
        
    } 
console.log('counter pertambahan 5')
for (i=1;i<=100;i+=5) {
    if (i%6===0){
        console.log(i,' KELIPATAN 6')
    } else {
        console.log(i)
    }
}

console.log('counter pertambahan 9')
for (i=1;i<=100;i+=9) {
    if (i%10===0){
        console.log(i,' KELIPATAN 10')
    } else {
        console.log(i)
    }
}