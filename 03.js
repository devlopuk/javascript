var name = prompt("Enter your name");

var nameLength = name.length;

var firstChar = name.slice(0,1);
var restofname = name.slice(1,nameLength);

var firstcap = firstChar.toUpperCase();
var rest = restofname. toLowerCase();

alert(firstcap + rest);
