let a=require("readline-sync")
let b=a.question("enter number")
var s=""
for (let i=b.length-1;i>=0;i--){
    s+=b[i]

}
if(b==s){
    console.log("palidrom")
}
else{
    console.log("it's not ")
}