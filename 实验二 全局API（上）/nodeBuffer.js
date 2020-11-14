var buf = Buffer.alloc(10);
console.log(buf);
var buf1 = Buffer.from("hello","utf-8");
console.log(buf1);

var base64Str = buf1.toString("basse64");


console.log(buf1.toString("base64"));