let a=[]
let b="MISSISSIPPI"
let c={}
for(let i of b){
    // console.log(i)
    if(a.includes(i)){
        c[i]+=1
    }
    else{
        a.push(i)
        c[i]=1

    }
}
console.log(c)

