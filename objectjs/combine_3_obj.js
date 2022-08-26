var d1={1:10, 2:20}

var d2={3:30,2:40}

var d3={5:50,6:60}
for(let i in d1){
    for(let j in d2){
        if(i==j){
            d3[i]=d1[i]+d2[j]
            break
           
        }
        else{
            d3[i]=d1[i]
            d3[j]=d2[j]
        }
    }
}
console.log(d3)