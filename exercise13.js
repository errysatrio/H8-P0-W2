function xo(str) {
    var numofx = (str.match(/x/g) || []).length;
    var numofo = (str.match(/o/g) || []).length;
    if (numofo===numofx) {
        return true
    } else {
        return false
    }   
  }
  
var temp = "xoxoxoxo";
var count = (temp.match(/x/g) || []).length;
console.log(count);

 
  console.log(xo('xoxoxo'));
  console.log(xo('oxooxo')); 
  console.log(xo('oxo')); 
  console.log(xo('xxxooo')); 
  console.log(xo('xoxooxxo')); 