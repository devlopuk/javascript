var message = prompt("Enter your message");
var typedmsg = message.length;
var length = 280 - typedmsg;
var res = message.slice(0, 280);

alert(res);
