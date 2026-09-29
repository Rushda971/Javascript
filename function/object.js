//printing object
// const car={
//     type:"bmw",
//     model:"XXCAUG",
//     year:"2006"
// }//object literal -defining object in multiple line(readble)
// console.log(car);//accessing whole object
// console.log(car.type)//accessing particular object
//adding values in object
// car.purchase="2007";
// console.log(car);
//accessing object
//dot notation
// console.log(car.year);
//bracket notation
// console.log(car["year"]);
//js object method
// car.history=function(){
//     return this.year+" "+this.purchase;
// }
// console.log(car.history());
// const nested={
//     a:1,
//     b:2,
//     c:{d:3,e:4,
//         f:{g:5,h:6}
//     }
// };
//object ko humesha const main declare karte hai
//ek object dusre object ke kabhi eqaul nhi hota hai,they check address 
console.log({a:1}=={a:1});
console.log({a:1}==={a:1});

// delete car.purchase;
// console.log(car);

//check weather it exist or not
// let result=("purchase" in car);
// console.log(result);

//object constructor

// Objects are containers for Properties and Methods
// Properties are named Values stored as key:value pairs
// Methods are Functions stored as key:function() pairs.

//object ka datatype -object hota hai 
//baaki object ke andar values koi bhi datatype ki ho sakte hai

//how to count how many object are inside a nested object
// const nested={
//     a:1,
//     b:2,
//     c:{d:3,e:4,
//         f:{g:5,h:6}
//     }
// };

// function countObject(obj){
//     let count=0;
//     for(let key in obj){
//         if(typeof obj[key]==="object"){
//             count++;
//             count+=countObject(obj[key]);
//         }
//     }return count;
// }
// console.log(countObject(nested));

//merge two object
// const obj1={name:"liza",id:1234,place:"andheri"};
// const obj2={name:"faiza",id:89354,place:"mira road"};
// let merge={...obj1,...obj2};
// let  assigned=Object.assign({},obj1,obj2);
// console.log(merge);
// console.log(assigned);

//salary
// const employees=[
//     {name:"Aman",salary:35000},
//     {name:"Riya",salary:45000},
//     {name:"Karan",salary:50000},
//     {name:"Neha",salary:30300}

// ];
// const result=employees.filter(emp=>emp.salary>40000).map(emp=>emp.name);
// console.log(result);

//create a function of employees whose salary is more 40000rs
// const data1={
//     width:100,
//     height:200,
//     title:"BOX"
// };
// function multiple(obj){
//     const newObj={};
//     for(let key in obj){
//         if(typeof obj[key]==="number")
//             newObj[key]=obj[key]*2;
//         else{
//             newObj[key]=obj[key];
//         }
//     }
//         return newObj;
// }
// console.log(multiple(data1));

const obj={
    name:prompt("enter you name:"),
    vowel:function(){
        let word="aeiouAEIOU";
        let count=0;
        for(let key of this.name){
            if(word.includes(key)){
                count++;
            } 
    }
    return count;
    }
};
console.log(obj.vowel());



//Bank account 
//account number
//name
//balance
//deposite()
//withdraw()


const bankAccount = {
    name: "Rushda",
    balance: 590000000,

    withdraw: function () {
        let amount = Number(prompt("Enter amount to withdraw:"));

        if (amount > this.balance) {
            console.log("Invalid amount entered. Please enter a valid amount.");
        } else {
            console.log("Processing your payment, please wait!");
            this.balance -= amount;
        }
    },

    deposit: function () {
        let amount = Number(prompt("Enter amount to deposit:"));

        if (amount <= 0) {
            console.log("Please enter a valid amount.");
        } else {
            console.log("Processing deposit...");
            this.balance += amount;
        }
    },

    showInfo: function () {
        return `Name: ${this.name}, Balance: ${this.balance}`;
    }
};

console.log(bankAccount.showInfo());

// Example usage:
// bankAccount.deposit();
// bankAccount.withdraw();
// console.log(bankAccount.showInfo());






// Intermediate
// 5. Sum All Values
// Given an object with numeric values:

// Return the total score.
// Output: 263
// const scores = {
//   math: 90,
//   science: 85,
//   english: 88
// };
// function totalscore(){
// let score=0;
// for(let key in obj){
//     if(typeof obj[key]==="number"){
//     score=obj[key];

//     }
// }
// return 
// }
// 6. Convert Object to Array
// const person = {
//   name: "Alice",
//   age: 25
// };

// Convert it into:

// [
//   ["name", "Alice"],
//   ["age", 25]
// ]
// 7. Find Highest Value
// const salaries = {
//   John: 50000,
//   Emma: 75000,
//   Alex: 60000
// };

// Return the employee with the highest salary.

// Output:

// "Emma"
// 8. Nested Objects
// const user = {
//   name: "John",
//   address: {
//     city: "Mumbai",
//     pincode: 400001
//   }
// };
// Print the city.
// Change the pincode.
// Add a street property inside address.
// Advanced
// 9. Deep Clone an Object

// Write a function that creates a deep copy of an object.

// Example:

// const obj = {
//   name: "John",
//   details: {
//     age: 25
//   }
// };

// Changing the clone should not affect the original.

// 10. Group By Property

// Given:

// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 21 },
//   { name: "C", age: 20 }
// ];

// Convert to:

// {
//   20: [
//     { name: "A", age: 20 },
//     { name: "C", age: 20 }
//   ],
//   21: [
//     { name: "B", age: 21 }
//   ]
// }
// 11. Flatten Nested Object

// Input:

// {
//   user: {
//     name: "John",
//     address: {
//       city: "Delhi"
//     }
//   }
// }

// Output:

// {
//   "user.name": "John",
//   "user.address.city": "Delhi"
// }
// 12. Object Frequency Counter

// Given:

// ["apple", "banana", "apple", "orange", "banana", "apple"]

// Output:

// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
// Interview-Level Challenge

// Implement your own version of:

// Object.keys()
// Object.values()
// Object.entries()

// without using the built-in methods.

// Example:

// myKeys({ a: 1, b: 2 });
// ["a", "b"]