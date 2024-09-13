/// Alert
// alert("Bismillah")

/// Prompt

// prompt("Enter You Name:")

// console.log(Math.floor(Math.random() * 10));

// document.write("Hi i am from javascript")

// document.getElementById("heading").innerHTML = "Zubair";
document.getElementById("random-number").innerHTML = Math.floor(Math.random() * 10)


// var myName = prompt("Enter You Name:");
// let myName = prompt("Enter You Name:");
// const myName = prompt("Enter You Name:");
// const myName = "zubair";
// myName = "shaikh"

// document.getElementById("heading").innerHTML = myName;
// console.log(myName)

// let parentsTeachersNote = 16;

let myName = "zubair1";
// let myName2 = 'zubair2';
// let myName3 = `zubair3`;
// console.log(myName)
// console.log(myName2)
// console.log(myName3)
// let myAge = 24;
// let currentSemester = 5;

// let mydata = "my name is zubair and my age is " + myAge + "\ncurrently i am studying in " + currentSemester + "th semester";
// console.log(mydata)

// let myNewData = `my name is zubair and my age is ${myAge}
// currently i am studying in ${currentSemester}th semester`
// console.log(myNewData)

// console.log("Hi testing github pull")

//======================Number====================


// let num = 10;  //integer
// let decNr = 1.5; //floating point number
// let expNr = 1.4e15; //exponential number

// console.log(num)
// console.log(expNr)

//====================bigint================

// let bigNr = 90071992547409920n;

// console.log(bigNr + num)   //error


// ============= Undefined =================

// let anas;

// console.log(anas)

// ==============null================

// let firstName = null;
// console.log(firstName)
// firstName = prompt("Enter your first name")
// console.log(firstName)


// ===============Boolean ================

// let isFeesSubmit = false;
// let isFeesSubmit2 = true;



// ================Symbol==========================
// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// let symbol1 = Symbol("JavaScript is fun!");


// =================typeof for checking data types================
// console.log(typeof isFeesSubmit)
// console.log(typeof isFeesSubmit2)
// console.log(typeof firstName)
// console.log(typeof anas)
// console.log(typeof bigNr)
// console.log(typeof num)
// console.log(typeof myName)
// console.log(typeof symbol1)



// =================comparison ================

let str1 = "12";
let num1 = 12;

// console.log(str1 == num1)
// console.log(str1 === num1)

// let x = 14;
// let y = 17;
// console.log(x === y)
// console.log(x !== y)

// console.log(x > y)
// console.log(x < y)
// console.log(x <= y)
// console.log(x >= y)

// =================logical operators ================
// let x = 1;
// let y = 2;
// let z = 3;
// console.log(x < y && y < z);
// console.log(x > y && y < z);
// console.log(x > y && x === y)
// console.log(x > y || x === y)
// console.log(!(x < y));



// =============operators==============
// let x = 2;
// let y = 2;
// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x ** 2)

// =============Datatype conversion===============

let x = "2";
let y = 2;
console.log("String to Number", Number(x))
console.log("Number to String ", String(y))
console.log("String to Boolean", Boolean("i am zubair"))
console.log("String to Boolean", Boolean(""))
console.log("Number to Boolean", Boolean(10))
console.log("null to boolean", Boolean(null))
console.log("undefined to boolean", Boolean(undefined))




// ============hypotenus calculator ==================
// let a = +prompt("Enter you value of a")
// let b = +prompt("Enter you value of b")
// let result = Math.sqrt(a ** 2 + b ** 2);
// console.log(result)