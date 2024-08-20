// // function showDialog() {
// //     //   console.log(arguments);
// //     var myString = "";

// //     // for (var i = 0; i < arguments.length; i++){
// //     //     myString += arguments[i] + " ";
// //     // }

// //     for(var param of arguments){
// //         myString += `${param} - `;
// //     }

// //     console.log(myString);
// // }

// // showDialog(1,2,3);

// function sum(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function calculate(a, b, operation) {
//     switch (operation) {
//         case "+":
//             return sum(a, b);
//         case "-":
//             return subtract(a, b);
//         case "*":
//             return multiply(a, b);
//         case "/":
//             return divide(a, b);
//         default:
//             return "Invalid operation";
//     }
// }

// confirm("Are you sure you want to delete this item?");
// var a = prompt("Enter a number");
// var b = prompt("Enter another number");
// var operation = prompt("Enter an operation");

// console.log(calculate(a, b, operation));

// var isPrototypeOf = String.prototype.includes

// if (isPrototypeOf) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }
// // object demo

// var person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// function printPerson(person) {
//     console.log(person.name);
//     console.log(person.age);
//     console.log(person.city);
// }


// for (var i = 0;i<10000; i++) {
//     console.log(i);
// }


// <button id="btn" >demo</button>
// document.getElementById('demo').innerHTML = 'Hello World';



document.getElementById('btn').addEventListener('click', function() {
    var first = 'Hello mày';
    var second = 'Hello World';

    if (document.getElementById('demo').innerHTML === first) {
        document.getElementById('demo').innerHTML = second;
    } else {
        document.getElementById('demo').innerHTML = first;
    }
});





