// Num : 1.

var arr = [[]];

// Num : 2.

var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];

// Num : 3.

for (var i = 1; i<= 10; i++){
    console.log(i);
}

// Num : 4.

var num = prompt("Enter a number:");

var length = prompt("Enter the length of the table:");

for (var i =1; i<= length; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}

// Num : 5.
var fruits =["apple", "banana","mango","orenge","steawberry",]
for (var i=0; i< fruits.length; i++){
    console.log(fruits[i]);
}

// Num : 6.

document.write("<h1>" + "Counting:" + "<h1/>")
document.write("<p>"+ "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15" + "</p>")


document.write("<h1>" + "Revers Counting:" + "<h1/>")
document.write("<p>"+ "10,9,8,7,6,5,4,3,2,1" + "</p>")

document.write("<h1>" + "Even" + "<h1/>")
document.write("<p>"+ "1,3,5,7,9,11,13,16,18,20" + "</p>")


document.write("<h1>" + "Odd:" + "<h1/>")
document.write("<p>"+ "1,3,5,7,9,11,13,15,17,19" + "</p>")
 

document.write("<h1>" + "Series:" + "<h1/>")
document.write("<p>"+ "2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000" + "</p>")

// Num : 7.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to Kabab Ji Bakery. What do you want to order sir?");

if (A.includes(userInput)) {
    alert(`${userInput} is available at index 2 in our bakery!`);
  } else {
    alert(`${userInput} We are sorry. chocolate is not available in our bakery.`);
  }
  
// Num : 8.


var A = [24, 53, 78, 91, 12, 100];

var largest = A[0];

for (let i = 1; i < A.length; i++) {
if (A[i] > largest) {
largest = A[i];
}
}
alert("Largest number: " + largest);


// Num : 9.


var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (let i = 1; i < A.length; i++) {
if (A[i] < smallest) {
smallest = A[i];
}
}

alert("Smallest number: " + smallest);



// Num : 10.

var multiples = [];
for (let i = 5; i <= 100; i += 5) {
multiples.push(i);
}
console.log(multiples.join("\n"));
