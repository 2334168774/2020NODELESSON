var buf1 = Buffer.from("h w","utf-8");

var buf2 = buf1.slice(0,5);
console.log(buf2.toString("utf-8"));