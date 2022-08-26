var a=require("readline-sync")
var b=a.questionInt("enter number")
if(b>=5 &&b<18){
    console.log("You can go school");
}
if(b>=18 && b<21){
    console.log("You can vote in elections")
}
if(b>=21 && b<24){
    console.log("You can drive a car");
}
if(b>=24 && b<25){
    console.log("You can marry");
}
if(b>=25 ){
    console.log("You can drink");
}