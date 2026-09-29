// # Function Declaration


// ### Q1. Password Validator--Regular Expression
// Write a function declaration `validatePassword(password)` that returns:
// * Minimum 8 characters
// * At least 1 uppercase letter
// * At least 1 number

// Example:
// validatePassword("Hello123"); // true
// validatePassword("hello"); // false




// ### Q2. EMI Calculator

// Write a function declaration:
// calculateEMI(principal, rate, years)
// Return the monthly EMI.

// Example:
// calculateEMI(500000, 8.5, 5);



// ### Q3. Find Second Largest Number

// ```javascript
// findSecondLargest([10, 50, 20, 80, 60]);
// ```

// Output:

// ```javascript
// 60
// ```

// ---

// # Anonymous Function

// ### Q4. Custom Sorting

// Sort employees by salary using an anonymous function.

// ```javascript
// const employees = [
//   { name: "Rahul", salary: 40000 },
//   { name: "Amit", salary: 70000 },
//   { name: "Neha", salary: 50000 }
// ];
// ```

// Expected:

// ```javascript
// [
//   { name: "Rahul", salary: 40000 },
//   { name: "Neha", salary: 50000 },
//   { name: "Amit", salary: 70000 }
// ]
// ```

// ---

// ### Q5. Custom Filter

// Use an anonymous function inside `filter()` to return all users older than 18.

// ```javascript
// const users = [
//   { name: "A", age: 15 },
//   { name: "B", age: 22 },
//   { name: "C", age: 30 }
// ];
// ```

// ---

// ### Q6. Transaction History

// Use `forEach()` with an anonymous function.

// ```javascript
// const transactions = [500, -200, 1000, -300];
// ```

// Print:

// ```text
// Credit: 500
// Debit: 200
// Credit: 1000
// Debit: 300
// ```

// ---

// # Arrow Function

// ### Q7. Product Discount Calculator

// Create an arrow function:

// ```javascript
// const getFinalPrice = (price, discount)
// ```

// Example:

// ```javascript
// getFinalPrice(1000, 20);
// ```

// Output:

// ```javascript
// 800
// ```

// ---

// ### Q8. Search User

// Using arrow function and `find()`:

// ```javascript
// const users = [
//   { id: 1, name: "Rahul" },
//   { id: 2, name: "Amit" },
//   { id: 3, name: "Neha" }
// ];
// ```

// Find user with id = 2.

// ---

// ### Q9. Group Even and Odd Numbers

// Using arrow functions:

// Input:

// ```javascript
// [1, 2, 3, 4, 5, 6]
// ```

// Output:

// ```javascript
// {
//   even: [2, 4, 6],
//   odd: [1, 3, 5]
// }
// ```

// ---

// # Objects

// ### Q10. Bank Account Object

// Create:

// ```javascript
// const account = {
//   holderName: "Rahul",
//   balance: 5000
// };
// ```

// Methods:

// ```javascript
// deposit(amount)
// withdraw(amount)
// transfer(amount)
// ```

// Conditions:

// * Cannot withdraw more than balance.
// * Cannot transfer negative amount.

// ---

// ### Q11. Shopping Cart Object

// Create:

// ```javascript
// const cart = {
//   items: []
// };
// ```

// Methods:

// ```javascript
// addItem()
// removeItem()
// getTotal()
// ```

// Example:

// ```javascript
// cart.addItem("Mouse", 500, 2);
// cart.addItem("Keyboard", 1000, 1);
// ```

// Expected total:

// ```javascript
// 2000
// ```

// ---

// ### Q12. Student Management System

// Object structure:

// ```javascript
// {
//   name: "Rahul",
//   marks: {
//     math: 90,
//     science: 85,
//     english: 88
//   }
// }
// ```

// Create methods:

// ```javascript
// getTotal()
// getAverage()
// getGrade()
// ```

// ---

// # Mixed (Functions + Objects + Array Methods)

// ### Q13. Online Food Ordering System

// Data:

// ```javascript
// const orders = [
//   { item: "Pizza", price: 300, qty: 2 },
//   { item: "Burger", price: 150, qty: 3 },
//   { item: "Cold Drink", price: 50, qty: 4 }
// ];
// ```

// Tasks:

// 1. Calculate bill.
// 2. Add GST 18%.
// 3. Find most expensive item.
// 4. Print invoice.

// ---

// ### Q14. Employee Payroll System

// ```javascript
// const employees = [
//   { name: "John", salary: 40000 },
//   { name: "Alice", salary: 50000 },
//   { name: "Bob", salary: 60000 }
// ];
// ```

// Tasks:

// 1. Add 12% bonus.
// 2. Deduct 5% tax.
// 3. Return final salary.

// Use:

// ```javascript
// map()
// ```

// ---

// ### Q15. Movie Rating System

// ```javascript
// const movies = [
//   { name: "Movie A", rating: 4.5 },
//   { name: "Movie B", rating: 3.2 },
//   { name: "Movie C", rating: 4.8 }
// ];
// ```

// Tasks:

// * Find highest rated movie.
// * Find average rating.
// * Filter movies rating > 4.

// ---

// # Interview-Level Challenge

// ### Q16. Build a Mini Expense Tracker

// Requirements:

// ```javascript
// addExpense(title, amount)
// removeExpense(id)
// getTotalExpense()
// getHighestExpense()
// showExpenses()
// ```

// Data:

// ```javascript
// {
//   id: 1,
//   title: "Food",
//   amount: 500
// }
// ```

// Example:

// ```javascript
// addExpense("Food", 500);
// addExpense("Travel", 1000);
// addExpense("Shopping", 2000);
// ```

// Expected:

// ```text
// Total Expense: 3500
// Highest Expense: Shopping (2000)
// ```

// This type of problem combines:

// * Function declarations
// * Anonymous functions
// * Arrow functions
// * Objects
// * Arrays
// * `map`, `filter`, `find`, `reduce`
// * Real-world business logic

// and is very similar to questions asked for JavaScript developer internships and junior frontend roles.
