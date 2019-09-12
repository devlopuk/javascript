var number1 = parseInt(prompt("Please enter number one to multiply"));
var number2 = parseInt(prompt("Please enter number two to multiply"));

calculator(number1,number2,multiply);

function calculator (number1,number2,operator)
{
operator(number1,number2);
}
function addition(num1,num2)
{
var add = num1+num2;
console.log(add);
}

function subtract(num1,num2)
{
var sub = num1-num2;
console.log(sub);
}
function multiply(num1,num2)
{
var multi = num1*num2;
console.log(multi);
}
