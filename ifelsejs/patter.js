var a=require("readline-sync")
var b=a.questionInt("enter ")
var s=''
for(let i=1;i<b;i++){
    if(i%2==0){
        s+=(-i)
      
    }
    
    else{
        s+=i
    }
}
console.log(s)