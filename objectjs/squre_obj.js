let a=require("readline-sync")
let b=a.questionInt("enter  ")
var d={}
for(let i=1;i<=b;i++){
    d[i]=i*i
}
console.log(d)