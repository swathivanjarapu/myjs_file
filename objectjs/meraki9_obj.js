let a=[{"first":"1"},{"second": "2"},{"third": "1"},{"four": "5"},{"five":"5"},{"six":"9"},{"seven":"7"}]
let b=[]
for(let i of a){
    // console.log(i)
    for(let j in i){
        if(!(b.includes(i[j]))){
            b.push(i[j])
        }
    }
}
console.log(b)