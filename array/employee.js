//product name
const product=[
    {name:"Laptop",price:50000},
    {name:"Mouse",price:500},
    {name:"Keyboard",price:1500}
];

let product1=product.forEach(function(current){
    if(current.name>1000){
        console.log(current.name)
    }
}
);
console.log(product1);
//calclaute total price
let total=0;
let totalbill=product.reduce((accumulator,cuurentitem)=>currentitem+accumulator);
console.log(totalbill);
