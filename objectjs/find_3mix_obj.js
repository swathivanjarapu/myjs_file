var d = {'a':50,'b':58,'c':56,'d':40,'e':100,'f':20}
let a=[]
let b=0
let m=0
let t=0
for(let i in d){
    if(d[i]>b){
        t=m
        m=b
        b=d[i]
        
    }else if(d[i]>m){
        t=m
        m=d[i]
    }else if(d[i]>t){
        t=d[i]
    }

}
console.log([b,m,t])
console.log(Math.sqrt(-1));   
