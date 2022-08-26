var a=require("readline-sync")
var b=a.questionInt("enter number")
let i=2
let c=0
while(i<b){
    if(b%i==0){
        c+=1;
    }
    i++;
}
if(c==0){
    console.log("prime number")

}
else{
    console.log("not prime")
}
