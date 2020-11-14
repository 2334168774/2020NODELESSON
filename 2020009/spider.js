const cheerio=require("cheerio");

// const $=cheerio.load("<h1>hello spider</h1>");
// $("h1").text("hello node");

// console.log($("h1").html());

const $=cheerio.load("<ul><li>li node1</li><ul>");

$("ul").append("<li>li node 2</li>");

$("li").each(function(index,el){
    console.log($(this).text());
})