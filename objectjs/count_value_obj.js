var d = {'Alex': ['subj1', 'subj2', 'subj3'],'David': ['subj1', 'subj2']}
let c=0
for(let i in d ){
    for(let j in d[i]){
        c+=1
        
    }
}
console.log(c)