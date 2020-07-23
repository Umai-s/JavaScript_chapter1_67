// 1. Write a function that displays current date & time in your
// browser.
// function date(){
//     var d=new Date();
//     document.write(d);
// }
// date();


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function name(first,last){
//     alert("GREETINGS! "+first+" "+last);
// }
// name('Umaima','Saleem');


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// var n1=prompt("Enter 1st number");
// var n2=prompt("Enter 2nd number");
// function add (){
//     return (+n1 + +n2);
// }
// var res=add(n1,n2);
// document.write("Answer is: "+res);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var n1 = prompt("Enter 1st number");
// var op = prompt("Enter operator (+ - * /).");
// var n2 = prompt("Enter 2nd number");
// function calc() {
//     if (op == '+')
//         return (+n1 + +n2);
//     else if (op == '-')
//         return (n1 - n2);
//     else if (op == '*')
//         return (n1 * n2);
//     else if (op == '/')
//         return (n1 / n2);

// }
// var res = calc(n1, op, n2);
// document.write("Answer is: " + res);



// 5. Write a function that squares its argument.

// var n = prompt("Enter any no. to be squared");
// function sq(a) {
//     return a * a;
// }
// var res = sq(n);
// document.write("Square is: " + res);



// 6. Write a function that computes factorial of a number.

// var n = prompt("Enter any no. to be squared");
// function sq(a) {
//     var factorial = 1;
//     for (var i = 1; i <= a; ++i) {
//         factorial *= i;
//     }
//     return factorial;
// }
// var res = sq(n);
// document.write("Factorial is: " + res);





// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var s=prompt("Enter starting number:");
// var e=prompt("Enter ending number:");

// function count(s,e){
//     for( var i=s;i<=e;i++){
//         document.write("<br>"+i);
//     }
// }
// count(s,e);



// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
//     Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function hyp(b, p) {
//     var h = sq(b) + sq(p);
//     return h;
// }
// function sq(a) {
//     return a * a;
// }

// var b = prompt("Enter base value:");
// var p = prompt("Enter perpendicular value:");
// var res = hyp(b, p);
// document.write("Result is: " + res);


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area() {
//     return w * h;
// }
// function a(w2, h2) {
//     return w2 * h2;
// }

// var w = prompt("Enter width value:");
// var h = prompt("Enter height value:");
// var res = area(w, h);
// document.write("Result is (as variables): " + res);
// var res = a(2, 4);
// document.write("<br>Result is (as values): " + res);



// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// var u = prompt("Enter any word");
// var chk = "";
// function check() {
//     for (var i = u.length - 1; i >= 0; i--) {
//         chk += u[i];
//     }
//     if (chk === u) {
//         document.write("<b>" + u + "</b>" + " is a palindrome word");
//     }
//     else
//         document.write("<b>" + u + "</b>" + " is a not palindrome word");
// }
// check(u);



// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// var s = prompt("Enter any string");
// document.write("Actual string: " + s);
// function title(s) {
//     var spl=s.toLowerCase().split(' ');
//     for (var i = 0; i < spl.length; i++) {
//         spl[i] = spl[i].charAt(0).toUpperCase() + spl[i].substring(1);
//     }
//     return spl.join(' ');
// }
// var str = title(s);
// document.write("<br>After capitializing: " + str);


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// var s = "Web Development Tutorial";
// document.write("Actual string: " + s);
// function lar(s) {
//     var spl = s.split(' ');
//     var longest = 0;
//     var r = '';
//     for (var i = 0; i < spl.length; i++) {
//         if (spl[i].length > longest) {
//             // r = spl[i];
//             longest=spl[i].length;
//             r=spl[i];
//         }
//     }
//     return r;
// }
// var str = lar(s);
// document.write("<br>Longest word is: " + str);



// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments: 'JSResourceS.com', 'o'

// var str = "hello", ch = "l", count = 0;
// function occ(str, ch) {
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) == ch) {
//             ++count;
//         }
//     }
//     return count;
// }
// var res = occ(str, ch);
// document.write("Word was : " + str);
// document.write("<br>Occurences of " + ch + " : " + res);


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".


// function calcCircumference(rad){
//         return 2*3.142*rad;
// }

// function calcArea(rad){
//     return 3.142*rad*rad;
// }

// var rad=2.3;
// document.write("The circumference is :" + calcCircumference(rad))
// document.write("<br>The area is :" + calcArea(rad))











































