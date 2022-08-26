// function myfun(n){
//     if(n<=1){
//         return n
//     }
//     else{
//         return (myfun(n-1)+myfun(n-2))
//     }
// let a=10
// if(a<=0){
//     console.log("enter positive num")
// }
// else{
//     console.log("fiboni series")
//     for(let i=1;i<a;i++){
//         console.log(myfun(i))
//     }

// }
// }

let s=1
let f=0
while(f<=10){
    console.log(f)
    console.log(s)
    f=f+s
    s=f+s
}
