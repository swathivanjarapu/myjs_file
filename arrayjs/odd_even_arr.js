let a=[23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
let o=0;
let e=0
for (let i of a){
    if(i%2==0){
        e+=1

    }
    else{
        o+=1
    }
}
console.log(e)
console.log(o)