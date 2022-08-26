var a=['m','a','l','a','y','a','l','a','m'];
let i=a.length-1;
let b=[]
while(i>=0){
    b.push(a[i]);
    i--;
}
console.log(b)
if(a===b){
    console.log("palidrome")
}
else{
    console.log("not palidrome")
}