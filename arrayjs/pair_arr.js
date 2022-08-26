let a=[10, 11, 12, 13, 14, 17, 18, 19];
let b=30
let c=[]
for(let i of a){
    for(let j of a){
        if(i+j===b){
            c.push([i,j])
        }
    }
}
console.log(c)