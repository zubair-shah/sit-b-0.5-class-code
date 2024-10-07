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

// let x = "2";
// let y = 2;
// console.log("String to Number", Number(x))
// console.log("Number to String ", String(y))
// console.log("String to Boolean", Boolean("i am zubair"))
// console.log("String to Boolean", Boolean(""))
// console.log("Number to Boolean", Boolean(10))
// console.log("null to boolean", Boolean(null))
// console.log("undefined to boolean", Boolean(undefined))




// ============hypotenus calculator ==================
// let a = +prompt("Enter you value of a")
// let b = +prompt("Enter you value of b")
// let result = Math.sqrt(a ** 2 + b ** 2);
// console.log(result)

// let isRaining = true;
// if (isRaining) {
//     console.log('yes barish horahi he')
// } else {
//     console.log('no barish nhi horahi he')
// }

// let age = +prompt("Enter your age");

// function makeOffer() {
//     let age = document.getElementById('input').value;
//     console.log(age)
//     if (age < 3) {
//         console.log("1 se 2 saal tk ticket free he")
//         document.getElementById('para').innerHTML = "1 se 2 saal tk ticket free he";
//     }
//     else if (age >= 3 && age < 12) {
//         console.log("30% off for you")
//     } else {
//         console.log("70% off for you")
//     }

// }


// =======================ternary-operator=============

// let age = +prompt("Enter your age");
// let access = null;
// if (age < 18) {
//     access = "Not Allow"
// } else {
//     access = "Allow"
// }
// let access2 = age > 18 && age < 40 ? "Allow" : "Not Allow";
// // let access2 = age > 18 ? age < 40 ? "Allow" : "Not Allow" : "Not Allow";
// console.log(access)
// console.log(access2)

// let activity = "lunch";

// let activity = "Breakfast";

// if (activity === "Get up") {
//     console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//     console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//     console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//     console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//     console.log("It is 5:00PM");
// } else if (activity === "Dinner") {
//     console.log("It is 6:30PM");
// } else {
//     console.log("It is 9:00PM");
// }
// let activity = "Drive to work";
// switch (activity) {
//     case "Breakfast":
//         console.log("It is 7:00AM");
//     case "Drive to work":
//         console.log("It is 8:00AM");
// }


// let age = 'abc';
// let age = 17;

// switch (true) {
//     case age < 18:
//         console.log("Your are not allowed to enter in game center");
//         break;
//     case age > 18:
//         console.log("Your are  allowed to enter in game center");
//         break;
//     default:
//         console.log("Invalid age");
// }


// ================Arrays ========================
// let std1Name = "Owais"
// let std1age = 16;
// let std1isFeeSubmit = true;
// let std1RollNumber = 1;

let colorArray = new Array("purple", "green", "yellow")

let colorArray2 = ["black", "green", "yellow"]
// let std1 = ["Shahnoor", 21, true]
// console.log(std1)

// console.log(colorArray)
// console.log(colorArray2)


// let array1 = new Array(10);
// let array2 = [10];
// console.log(array1)
// console.log(array2)
// let cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars)
// cars[0] = "cultus";
// cars[1] = "Ferrari";
// cars[4] = "Fiat";
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[3])
// console.log(cars[-1])
// console.log(cars)
// console.log(cars.length)

// let students = ["owais", "shahnoor", "Anas"];
// console.log(students)
// students.push("Abdul Rafay");
// students.unshift("Abdul Rafay", "Kaif");
// students.unshift("Abdul Rafay");
// students.unshift("Kaif");
// console.log(students)
// students.shift();
// students.pop();
// console.log(students)

// let arrayFruits = ["apple", "banana", "mango"]
// let array = ["english", "math"]
// array.splice(1, 0, "urdu", "islamiyat")
// console.log(array)


// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr6.concat(arr5)
// console.log(arr5)
// console.log(arr6)
// console.log(arr7)

// let students = ["kaif", "hamza", "shahnoor", "hamza", "abdul rafay"];
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort()
// console.log(names)
// console.log(students.indexOf("hamza", 4))

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// let MixedArray = [array1, array2, array3]
// let mixedArray2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9,
//         [11, 12, 13,
//             [14, 15, 16]
//         ]
//     ]
// ]
// console.log(MixedArray)
// console.log(mixedArray2)
// console.log(mixedArray2[2][3][3][0])


// ========objects======================
// let stduent1 = ['zubair', 'shamim', 23, 1234, 1233, 1234, 7, 6, 'math', 'english', 'urdu', 'science', 'islamiyat']

// let studentObject = {
//     name: "zubair",
//     fatherName: "shamim",
//     age: 23,
//     contactNo: 340829383,
//     rollNo: 1234,
//     class: 7,
//     subjects: ['math', 'english', 'urdu', 'science', 'islamiyat']
// }
// console.log(studentObject.name)
// console.log(studentObject.subjects[2])
// console.log(studentObject.age)
// studentObject.age = 24;
// studentObject.subjects[2] = "Social Studies";
// console.log(studentObject.subjects[2])
// console.log(studentObject.subjects)
// console.log(studentObject.subjects[0])
// console.log(studentObject['name'])

// let company = {
//     companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida",
//     },
//     yearOfEstablishment: 2021,
// };
// company.address.city = "karachi";
// console.log(company.address.city)
// console.log(company.yearOfEstablishment)


// let company2 = {
//     companyName: "Healthy Candy",
//     activities: [
//         "food manufacturing",
//         "improving kids' health",
//         "manufacturing toys",
//     ],
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida",
//     },
//     yearOfEstablishment: 2021,
// };
// company2.activities[2] = "abdul rafay"
// console.log(company2.activities[2])


let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "karachi",
        state: "Pakistan",

    }, {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "New York",
        state: "USA",

    }],
    yearOfEstablishment: 2021,
};
// company.address[0].city = "Toronto"
// company.address[0].state = "Canada"
// console.log(company)
// console.log(company.address[0].state)

// const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
// myArr3.sort();
// console.log(myArr3)
// myArr3.length = 0;
// console.log(myArr3[0]);