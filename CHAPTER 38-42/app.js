// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b) {
//     var p = 1;
//     for (var i = 1; i <= b; i++) {
//         p *= a;
//     }
//     return p;
// }
// var a = prompt("Write any number for power to be calculated?");
// var b = prompt("Write power to be raised?");
// var c = power(a, b);
// document.write("Power of <b>" + a + "</b> raised to the power <b>" + b + " </b>= <b>" + c+"</b>");


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// var a = prompt("Enter any year");
// leap(a);
// function leap(a) {
//     if (a % 4 == 0) {
//         document.write("<b>" + a + " </b>is a leap year.")
//     }
//     else
//         document.write("<b>" + a + " </b>is not a leap year.")
// }


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = s(s − a)(s − b)(s − c)
// where, s = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions.


// var a = prompt("Enter 1st side of triangle?");
// var b = prompt("Enter 2nd side of triangle?");
// var c = prompt("Enter 3rd side of triangle?");
// var s = calc_s(a, b, c);
// var ar = area(s, a, b, c);
// document.write("Area is :<b> " + ar + "</b>");

// function calc_s(a, b, c) {
//     var s = (+a + +b + +c) / 2;
//     return s;
// }
// function area(s, a, b, c) {
//     var area = s * (s - a) * (s - b) * (s - c);
//     var ar = Math.sqrt(area);
//     return ar;
// }



// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// var a = prompt("Enter marks of first subject?");
// var b = prompt("Enter marks of second subject?");
// var c = prompt("Enter marks of third subject?");
// mainFunction();

// function average(a, b, c) {
//     var avg = (+a + +b + +c) / 3;
//     return avg;
// }

// function percentage(a, b, c) {
//     var p = (+a + +b + +c) / 300 * 100;
//     return p;
// }

// function mainFunction() {
//     var avg = average(a, b, c);
//     var p = percentage(a, b, c);
//     document.write("Average is : <b>" + avg + "</b>")
//     document.write("<br>Percentage is : <b>" + p + "</b>")
// }




// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// var find_index = function(str, item) {
//     for (var i = 0; i < str.length; ++i) {
//         if (str[i] === item) {
//             return i+1;
//         }
//     }

//  };
//  document.write("Index of <b>l</b> in 'apple'  is : " + "<b>"+find_index("apple",'l' )+ "</b>" );





// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// var str = "Hello there, whats up?";
// var s = delVowels(str);
// document.write("<br>With vowels: <b>" + str + "</b>");
// document.write("<br>Without vowels: <b>" + s);
// function delVowels(str) {
//     return str.replace(/[aeiou]+/ig, '');
// }



// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Please read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// function findVowelOcc() {
//     var str = "Please read this application and give me gratuity";
//     var count = 0;
//     var vowel = false;

//     for (var letter of str.toLowerCase()) {
//         switch (letter) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 {
//                     if (vowel) {
//                         count++;
//                          vowel = false;
//                     } else {
//                         vowel = true;
//                     }
//                     break;
//                 }
//             default:
//                 vowel = false
//         }
//     }
//     document.write("String is: <b>"+str+"</b>")
//     return count
// }
// var r = findVowelOcc();
// document.write("<br>No of times double vowels occured: <b>" +r);



// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// var d = prompt("Enter distance between any two cities in km.");
// meters(d);
// feet(d);
// inches(d);
// centimeters(d);
// function meters(d) {
//     document.write("Distance in meters is: <b>"+ d * 1000 +"</b>");
// }
// function feet(d) {
//     document.write("<br>Distance in feet is: <b>"+ d * 3281 +"</b>");
// }
// function inches(d) {
//     document.write("<br>Distance in inches is: <b>"+ d * 39370 +"</b>");
// }
// function centimeters(d) {
//     document.write("<br>Distance in centimeters is: <b>"+ d * 100000 +"</b>");
// }


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// var count = 1, w_Hrs, o_time, over_time;
// while (count <= 2) {
//     w_Hrs = prompt("Enter the working hours of employee no: " + count);
//     if (w_Hrs > 40) {
//         o_time = w_Hrs - 40;
//         over_time = o_time * 12.00;
//         document.write("<br>Employee No " + count + " overtime pay is: " + over_time);
//     }
//     else
//         document.write("<br>You have to work for more than 40 hours to get over time pay\n");
//     count++;
// }


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// var amount = prompt("Please input amount for withdraw : ");
// document.write("<br>Required notes of Rs. 100  :  <b>", Math.floor(amount / 100) + "</b>");
// document.write("<br>Required notes of Rs. 50   :  <b>", Math.floor((amount % 100) / 50) + "</b>");
// document.write("<br>Required notes of Rs. 10   :  <b>", Math.floor((((amount % 100) % 50) / 10)) + "</b>");
// document.write("<br>Amount still remaining Rs. :  <b>", Math.floor((((amount % 100) % 50) % 10) )+ "</b>");



























