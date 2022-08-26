function birthdayCakeCandles(candles) {
    // Write your code here
    let a=Math.max(...candles)
    let c=0
    for( let i of candles){
        if(i>=a){
            c++;
        }
    }
}