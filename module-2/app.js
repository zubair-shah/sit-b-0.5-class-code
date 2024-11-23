/// Alert
// alert("Bismillah")

/// Prompt

// prompt("Enter You Name:")

// console.log(Math.floor(Math.random() * 10));

// document.write("Hi i am from javascript")

// document.getElementById("heading").innerHTML = "Zubair";
// document.getElementById("random-number").innerHTML = Math.floor(Math.random() * 10)


// var myName = prompt("Enter You Name:");
// let myName = prompt("Enter You Name:");
// const myName = prompt("Enter You Name:");
// const myName = "zubair";
// myName = "shaikh"

// document.getElementById("heading").innerHTML = myName;
// console.log(myName)

// let parentsTeachersNote = 16;

// let myName = "zubair1";
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

// let str1 = "12";
// let num1 = 12;

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

// let colorArray = new Array("purple", "green", "yellow")

// let colorArray2 = ["black", "green", "yellow"]
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


// let company = {
//     companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: [{
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "karachi",
//         state: "Pakistan",

//     }, {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "New York",
//         state: "USA",

//     }],
//     yearOfEstablishment: 2021,
// };
// company.address[0].city = "Toronto"
// company.address[0].state = "Canada"
// console.log(company)
// console.log(company.address[0].state)

// const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
// myArr3.sort();
// console.log(myArr3)
// myArr3.length = 0;
// console.log(myArr3[0]);


// let student = ['kaif', 'raif', 'owais', 'anas', 'shahnoor', 'abdulrafay']
// if (student[0] === "anas") {
//     student.splice(0, 1)
// }
// if (student[1] === "anas") {
//     student.splice(1, 1)
// }
// if (student[2] === "anas") {
//     student.splice(2, 1)
// }
// if (student[3] === "anas") {
//     student.splice(3, 1)
// }

// let student = ['kaif', 'raif', 'owais', 'anas', 'shahnoor', 'abdulrafay']
// let i = 0;
// while (i < 10) {
//     if (student[i] === "anas") {
//         student.splice(i, 1)
//     }
//     console.log('hello', i)
//     i++;
// }
// console.log(student)


// ================do-while-loop================
// let j = 11;
// do {
//     console.log("hi")
// } while (j < 10);


// =============for-loop====================

// for (let k = 0; k < 100; k++) {
//     console.log(`number `, k)
// }


// let array = []
// for (let k = 0; k < 100; k++) {
//     array.push(`number ${k}`)
// }
// console.log(array)


let mywork = [];

for (let k = 1; k <= 10; k++) {
    let ans = k % 2;
    let lessonObj = {
        name: `lesson ${k}`,
        status: ans === 0 ? false : true,
    }
    // if (k % 2 === 0) {
    //     lessonObj.status = false;  
    // }


    mywork.push(lessonObj)
}
// console.log(mywork)

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++) {
//     arrOfArrays.push([]);
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);
//     }
// }
// console.log(arrOfArrays)


// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//     names[i] = "hello " + names[i];
// }
// console.log(names);


// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++) {
//     if (names[i].startsWith("M")) {
//         delete names[i];
//         continue;
//     }
//     names[i] = "hello " + names[i];
// }
// console.log(names);

// let array = [
//     [1, 2, 3, 4, 5, 6, 7, 8],
//     [9, 10, 11, 12, 13, 14, 15, 16],
//     [9, 10, 11, 12, 13, 14, 15, 16],
//     [9, 10, 11, 12, 13, 14, 15, 16],
//     [9, 10, 11, 12, 13, 14, 15, 16],
//     [9, 10, 11, 12, 13, 14, 15, 16],
//     [9, 10, 11, 12, 13, 14, 15, 16],
//     [9, 10, 11, 12, 13, 14, 15, 16]
// ]
// console.table(array);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 4) {
//         break;
//     }

// }

// for (let i = 1; i < 11; i++) {
//     console.log(i);
//     if (i === 4) {
//         continue;
//     }
//     console.log('hi i am zubair')

// }

let groups = [
    ["zahid", "shahmeer", "Ali"],
    ["zubair", "zeeshan", "Mohsin"],
    ["hamza", "kaif", "hamid"],
];

// for (let i = 0; i < groups.length; i++) {

//     let matches = 0;
//     for (let j = 0; j < groups[i].length; j++) {
//         if (groups[i][j].startsWith("M")) {
//             matches++;
//         } else {
//             continue;
//         }
//         if (matches === 2) {
//             console.log("Found a group with two names starting with M")
//             console.log(groups[i]);
//             break;
//         }
//     }

// }

// let step = 3;
// for (let i = 0; i < 1000; i += step) {
//     if (i > 10) {
//         break;
//     }
//     console.log(i);
// }

// let a = 15;
// let b = 10;
// console.log(a + b)

// let c = 10;
// let d = 20;
// console.log(c + d)

// function sayHello() {
//     let input = prompt("Enter your name");
//     console.log("Hello, " + input)

// }


// for (let index = 0; index < 3; index++) {
//     sayHello();
// }

// function addTwoNumbers() {
//     let number1 = +prompt("Enter a number")
//     let number2 = +prompt("Enter a second number")
//     console.log("the addition of two numbers is ", number1 + number2)
// }

// addTwoNumbers()
// let varContainingFunction = function () {
//     let varInFunction = "I'm in a function.";
//     console.log("hi there!", varInFunction);
// };
// varContainingFunction();
// let a = 5;

function addTwoNumbers(num1 = 4, num2 = 6, operator) {
    let result = num1 + num2;
    console.log(result)
    return result;

}
// let num1 = +prompt("enter first number")
// let num2 = +prompt("enter second number")

// console.log(number1)

// addTwoNumbers(argument1, argument2, '-')
// console.log(addTwoNumbers(num1, num2))
// let result2 = addTwoNumbers(num1, num2);
// console.log(result2);

// if (result2 === 20) {
//     alert("20 is found");
// }

// function returnHello() {
//     return "hello";
// }

// console.log(returnHello())

// const result = () => "hello";

// console.log(result());


// const sayHello = (data = "zubair") => {

//     return `hello ${data}`
// };

// let inputFromUser = prompt("Enter your name");
// console.log(inputFromUser)
// // if (!inputFromUser) {
// //     inputFromUser = undefined;
// // }
// console.log(sayHello(inputFromUser));

// let numbers = [1, 2, 3];
// let numbers2 = [...numbers, 4, 5];
// console.log('Number', numbers2)

function sumAllNumbers(x, y, ...z) {
    let c = "hello"

    if (true) {
        let d = "owais"
        console.log(d)
        console.log(c)
    }
    // console.log(d)
}

let a = 'zubair';

// sumAllNumbers(5, 5, 6, 7, 8)

// (function () {
//     console.log("IIFE!");
// })()


// function recursiveFunction(nr) {
//     if (nr === 0) {
//         return 1
//     } else {
//         return nr * recursiveFunction(nr - 1)
//     }
// }

// console.log(recursiveFunction(3));



// -----------chapter-8-builtin-javascript---------

// let x = 8;
// console.log(isNaN(x))


// let currentDate = new Date();
// console.log(currentDate)
// // let currentDate1 = new Date("Sat Jun 05 2021 11:40:12");
// currentDate.setFullYear(2009)
// console.log(currentDate)
// console.log("Day of week:", currentDate.getDay())
// console.log("Day of month:", currentDate.getDate());
// console.log("Month:", currentDate.getMonth());
// console.log("Year:", currentDate.getFullYear());
// console.log("Seconds:", currentDate.getSeconds());
// console.log("Milliseconds:", currentDate.getMilliseconds());
// console.log("Time:", currentDate.getTime());
// console.log("Time:", currentDate.getHours());
// console.log("Time:", currentDate.getMinutes());
// console.log("unix:", Date.now());
// console.log('toDateString:', currentDate.toDateString())
// console.log('toTimeString:', currentDate.toTimeString())

// let time = 2024
// function sayHello() {
//     console.log('hello')

// }
// function changeNumber() {
//     console.log('changeNumber')
//     time = 2025;
// }

// if (time === 2025) {
//     alert("happy new year")
// } else {
//     setInterval(sayHello, 1000)
// }
// setTimeout(changeNumber, 3000)
// ======================array-methods=================


// let array = ["Shahnoor", 'anas', 'kaif', 'abdulrafay', 'owais'
// ]
// function filterName(element, index) {
//     if (element.startsWith('a')) {
//         return element
//     }

// }

// let filteredArray = array.filter(filterName)
// console.log(filteredArray)

// let arr2 = ["grapefruit", 4, "hello", 5.6, true];
// arr2.copyWithin(0, 3, 4);


// function IcreaseOneNumber(arrayItem) {
//     return arrayItem + 1
// }
// let arr3 = [1, 2, 3, 4];
// let answer = arr3.map(item => item * 5)
// console.log(arr3);
// console.log(answer);

// let arrayNew = [10, 20, 30]

// [50, 100, 150]

// let bb = ["so", "bye", "bye", "bye", "bye", "love"];

// console.log(bb.indexOf('bye', 3))
// console.log(bb.lastIndexOf('bye'))

// ======================string-methods==================================
// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

// let letters = ["a", "b", "c"];
// let x = letters.join('-');
// console.log(x);

// let searchStr = 'hello javascript'
// let notFound = searchStr.search("javascript");
// let notFound = searchStr.indexOf("javascript");
// console.log(notFound);


// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0, 3);
// console.log("1:", substr1);
// console.log("2:", substr2);


// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);

// let s3 = "hello hello";
// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);




// let stringToConvert = prompt("Enter a string to convert")
// Hi I Am Zubair And I Am 23 Years Old

// function makeCapitalized(str) {
//     let lowerCaseStr = str.toLowerCase();
//     console.log(lowerCaseStr);
//     let CapitalizedWordsArray = [];
//     let splitArray = lowerCaseStr.split(' ')
//     console.log(splitArray);
//     splitArray.forEach((item) => {

//         let upperCaseLetter = item.slice(0, 1).toUpperCase()
//         let remainLetters = item.slice(1)
//         let capitalizedWords = upperCaseLetter.concat(remainLetters)
//         CapitalizedWordsArray.push(capitalizedWords)
//         // console.log(capitalizedWords);
//         // console.log(upperCaseLetter);
//         // console.log(remainLetters)
//         // console.log(item);
//     })

//     // console.log(CapitalizedWordsArray.join(' '))
//     return CapitalizedWordsArray.join(' ')

// }
// let solution = makeCapitalized(stringToConvert)
// console.log(solution)



// const students = [
//     {
//         name: "John Doe",
//         semester: 3,
//         father_name: "Doe",
//         isFeePaid: true,
//         courses: ["Mathematics", "Physics", "Computer Science"]
//     },
//     {
//         name: "Jane Smith",
//         father_name: "Smith",
//         semester: 2,
//         isFeePaid: true,
//         courses: ["Biology", "Chemistry", "English"]
//     },
//     {
//         name: "Emily Johnson",
//         father_name: "Johnson",
//         semester: 4,
//         isFeePaid: false,
//         courses: ["Economics", "Statistics", "Marketing"]
//     },
//     {
//         name: "zubair Johnson",
//         father_name: "Johnson",
//         semester: 4,
//         isFeePaid: false,
//         courses: ["Economics", "Statistics", "Marketing"]
//     }
// ];
// students.forEach((item, index) => {
//     console.log('item', item)
//     document.querySelector('table').innerHTML += `
//        <tr>
//         <td>1</td>
//         <td>${item.name}</td>
//         <td>Shamim</td>
//         <td>7</td>
//         <td>true</td>
//         <td>Maths,English,urdu</td>
//     </tr>`
// })


let x = 6.78;
let y = 5.34;
console.log("X:", x, "becomes", Math.round(x));
console.log("Y:", y, "becomes", Math.round(y));
console.log("X:", x, "becomes", Math.ceil(x));
console.log("Y:", y, "becomes", Math.ceil(y));
console.log("X:", x, "becomes", Math.floor(x));
console.log("Y:", y, "becomes", Math.floor(y));


function generateRandomNumber(min, max) {
    for (let i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * (max - min) + min);
        console.log(random)
    }
}

generateRandomNumber(10, 30)



// ==============DOm===================

// let element = document.querySelector('h1')
// let element = document.querySelector('#abc')
// let element = document.querySelector('.xyz')
let element = document.querySelector('.xyz').classList.add("zubair")
console.log(element)