function callback(element){
    console.log(element);
    return element + 4;
  }
   
  let numbers = [10, 20, 30, 40, 50];
  let newArray = numbers.map(callback);
  console.log(newArray);