let a= [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
let b=[]
for(let i of a){
    if(!(b.includes(i))){
        b.push(i)
    }
}
console.log(b)