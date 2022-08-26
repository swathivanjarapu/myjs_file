// let a=[[78, 76, 94, 86, 88],[91, 71, 98, 65, 76],[95, 45, 78, 52, 49]]
// let i=0;
// let s=0;
// while(i<a.length){
//     let j=0
//     while(j<a[i].length){
//         s+=a[i][j]
//         j++
//     }
//     i++
// }
// console.log(s)


var a=[[78, 76, 94, 86, 88],[91, 71, 98, 65, 76],[95, 45, 78, 52, 49]]
var s=0;
for(let i of a){
    for(let j of i){
        s+=j
    }
}
console.log(s)

