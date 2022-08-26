var l = [1,2,3,4,5,6]
var a = [2,3,1,0,6,7]
let b=[]
for(let i of l){
    if(!(a.includes(i))){
        b.push(i)
    }
}
console.log(b)