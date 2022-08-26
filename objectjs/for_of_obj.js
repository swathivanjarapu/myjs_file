// let product = {
//     name:'Amazon Echo Dot',
//     price:39.99,
//     quantity:25
//   };
//   for(let pdt of Object.keys( product)){ //TypeError
//     console.log(pdt);
//   }
  


// let product = {
//     name:'Amazon Echo Dot',
//     price:39.99,
//     quantity:25
//   };
//   for(let pdt of Object.values( product)){ //TypeError
//     console.log(pdt);
//   }
  


let product = {
    name:'Amazon Echo Dot',
    price:39.99,
    quantity:25
  };
  for(let pdt of Object.entries( product)){ //TypeError
    console.log(pdt);
  }
  