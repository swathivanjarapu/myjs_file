const num = 546767643;
const sumDigit = (num, sum = 0) => {
   if(num){
      return sumDigit(Math.floor(num / 10), sum + (num % 10));
   }
   return sum;
};
const sumRepeatedly = num => {
   while(num > 9){
      num = sumDigit(num);
   };
   return num;
};
console.log(sumRepeatedly(num));