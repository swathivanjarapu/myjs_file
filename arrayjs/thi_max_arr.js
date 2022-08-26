var a=[50, 40, 23, 70, 56, 12, 5, 10, 7]
let max=0;
let sec=0;
let thi=0;
for(let i=0;i<a.length;i++){
    if(a[i]>max){
        thi=sec
        sec=max
        max=a[i]
       
    }
    else if(a[i]>sec){
        thi=sec
        sec=a[i]
    }
    else if(a[i]>thi){
        thi=a[i]
    }
}
console.log(thi)
console.log(sec)
console.log(max)