let d1 = {'a': 100, 'b': 200, 'c':300}
let d2 = {'a': 300, 'b': 200, 'd':400}
let c={}
for(let i in d1){
    if(i in d2){
        d2[i]=d1[i]+d2[i]

    }
    else{
        d2[i]=d1[i]
    }
    
}


console.log(d2)
