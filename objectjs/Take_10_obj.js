let a=require("readline-sync")
let b=a.questionInt("enter ")
let d={}
for(let i=1;i<=b;i++){
    c=a.questionInt("enter num ")
    e=a.question("enter ")
    d[e]=c
}
console.log(d)