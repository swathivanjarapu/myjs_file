let a=require("readline-sync")
let b=a.questionInt("enter ")
for(let i=1;i<b;i++){
    if(i%7==0){
        console.log(i)
    }
}