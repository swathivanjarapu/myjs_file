let a= [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
let s=0
let d=0
for(let i of a){
    if(i%2==0){
        s+=i
    }
    else{
        d+=i
    }

}
console.log(s)
console.log(d)