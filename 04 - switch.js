var a = parseInt(prompt("Please enter number one"));
var b = parseInt(prompt("Please enter number two"));
var op = prompt ("Please enter +,*,/,-");

calculator(a,b,op);

function calculator (a,b,optimize)
{

switch(op) {

case "+":
return a+b
break;

case "-":
return a-b
break;

case "*":
return a*b
break;

case "/":
return a/b
break;
}
}
