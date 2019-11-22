console.log('tugas 1')
function shoutOut() {
return console.log('Halo Function!')    
}

console.log(shoutOut())

console.log('tugas 2')
function calculateMultiply(num1,num2) {
    return console.log(num1*num2)
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);

console.log('tugas 3')

function processSentence(name,age,address,hobby) {
    return console.log('nama saya '+name+', umur saya '+age+', alamat saya di '+address+', dan saya punya hobby yaitu '+hobby)
}

var name = 'Agus';
var age = 30;
var address = 'Jln. Malioboro, Yogjakarta';
var hobby = 'gaming';

var fullsentence =processSentence (name,age,address,hobby)
console.log(fullsentence)