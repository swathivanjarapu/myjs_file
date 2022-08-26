// If this number is less than 10 then print "number is less than 10". If it is greater than 10 and 
// less than 20 then print "number is less than 20". Else if it is greater than 20 
// then print "greater than 20".


let a=require("readline-sync");
let b=a.questionInt("enter number");
if(b<=10){
    console.log("number is less than 10")
}
else if(b>10 && b<=20){
    console.log("number is less than 20")
}
else{
    console.log("greater than 20")
}