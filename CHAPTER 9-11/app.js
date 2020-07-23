// 1. Write a program to take “city” name as input from user.If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt("Enter your city name.");
// if (city == "karachi" || city == "Karachi") {
//     document.write("Welcome to city  of lights");
// }
// else {
//     document.write("Welcome to " + city);
// }


// 2. Write a program to take “gender” as input from user.If the
// user is male, give the message: Good Morning Sir.If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Please enter your gender");
// if (gender == "male" || gender == "Male") {
//     document.write("Good Morning Sir");
// }
// else {
//     document.write("Good Morning Maam");
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var color = prompt("Please enter color of traffic signal");

// if (color == "red" || color == "Red") {
//     alert("Must Stop");
// }
// else if(color == "yellow" || color == "Yellow"){
//     alert("Ready to move");
// }
// else if(color == "green" || color == "Green"){
//     alert("Move Now");
// }
// else if(color==' '||color==""){
//     alert("There is no such color in traffic signals");
// }


// 4. Write a program to take input remaining fuel in car(in
//     litres) from user.If the current fuel is less than 0.25litres,
//         show the message “Please refill the fuel in your car”

// var fuel = prompt("Enter the amount of fuel left (in liters)");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car.");
// }
// else{
//     alert("You are good to go!");
// }



// 5. Run this script, & check whether alert message would be
// displayed or not.Record the outputs.

// a. THIS ONE RUNS CORRECTLY
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }


// b. THIS ONE DOES NOT RUNS.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c. THIS ONE RUNS CORRECTLY
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// d. THIS ONE RUNS CORRECTLY
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }


// e. THIS ONE RUNS CORRECLTY, SAYS TRUE
// if(true){
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// f. THIS ONE RUNS CORRECTLY
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// 6. Write a program to take input the marks obtained in three
// subjects & total marks.Compute & show the resulting
// percentage on your page.Take percentage & compute
// grade as per following table:

// var om = prompt("Enter marks obtained in three subjects.");
// var tm = prompt("Enter total marks of three subjects.");
// var p = om / tm * 100;
// document.write("<h1>Marks Sheet</h1>")

// document.write("<br>Total Marks: " + tm);
// document.write("<br>Marks obtained: " + om);
// document.write("<br>Percentage: " + p +"%");

// if (p >= 80) {
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent ");
// }
// else if (p >= 70) {
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Good ");
// }
// else if (p >= 60) {
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve ");
// }
// else if (p < 60) {
//     document.write("<br>Grade: Fail");
//     document.write("<br>Remarks: Sorry ");
// }


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var s=7;
// var u=prompt("Try to guess the secret number.");
// if(u == s){
//     alert("Bingo! Correct answer");
// }
// else if( (+u + +1) === s){
//     alert("Close enough to the correct answer.")
// }



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var n=prompt("Enter any number");
// if(n%3==0){
//     alert("The number is divisible by 3");
// }
// else{
//     alert("The number is NOT divisible by 3");
// }


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var n=prompt("Enter any number");
// if(n%2==0){
//     alert("The number is an EVEN number.");
// }
// else{
//     alert("The number is an ODD number.");
// }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var t=prompt("Please enter the current temperature");
// if(t>40){
//     alert("It is too hot outside.");
// }
// else if(t>30){
//     alert("The Weather today is Normal.");
// }
// else if(t>20){
//     alert("Today’s Weather is cool.");
// }
// else if(t>10){
//     alert("OMG! Today’s weather is so Cool.");
// }


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var n1=prompt("Please enter the first number.");
// var n2=prompt("Please enter the second number.");
// var op=prompt("Please enter the Operation (+, -, *, /, %).");
// if(op=='+'){
//     document.write("Result of addition: "+ (+n1 + +n2));
// }
// else if(op=='-'){
//     document.write("Result of subtraction: "+ (n1 - n2));
// }
// else if(op=='*'){
//     document.write("Result of multiplication: "+ (n1 * n2));
// }
// else if(op=='/'){
//     document.write("Result of division: "+ (n1 / n2));
// }
// else if(op=='%'){
//     document.write("Result of modulus: "+ (n1 % n2));
// }

