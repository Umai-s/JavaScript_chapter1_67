// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// function f1() {
//     var n1 = prompt("Enter 1st number");
//     var n2 = prompt("Enter 2nd number");
//     var res = +n1 + +n2;
//     document.write("Sum of " + n1 + " and " + n2 + " is " + res);
// }

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// function f2() {
//     var n1 = prompt("Enter 1st number");
//     var n2 = prompt("Enter 2nd number");
//     var res = n1 - n2;
//     document.write("<br>Subtraction of " + n1 + " and " + n2 + " is " + res);
// }
// function f3() {
//     var n1 = prompt("Enter 1st number");
//     var n2 = prompt("Enter 2nd number");
//     var res = n1 * n2;
//     document.write("<br>Product of " + n1 + " and " + n2 + " is " + res);
// }
// function f4() {
//     var n1 = prompt("Enter 1st number");
//     var n2 = prompt("Enter 2nd number");
//     var res = n1 / n2;
//     document.write("<br>Division of " + n1 + " and " + n2 + " is " + res);
// }
// function f5() {
//     var n1 = prompt("Enter 1st number");
//     var n2 = prompt("Enter 2nd number");
//     var res = n1 % n2;
//     document.write("<br>Modulus of " + n1 + " and " + n2 + " is " + res);
// }


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// var v=0;
// document.write("Value after variable declaration is: "+v);
// v=2;
// document.write("<br>Initial value:"+ v );
// v++;
// document.write("<br>Value after increment is: " +v);
// v+=7;
// document.write("<br>Value after addition is: " +v);
// v--;
// document.write("<br>Value after decrement is: "+v);
// v%=3;
// document.write("<br>The remainder is : "+v);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie. Example output:
// var price=600;
// document.write("Total cost to buy 5 tickets to a movie is "+5*600+"PKR");


// 5. Write a script to display multiplication table of any
// number in your browser. E.g
// document.write("Table of 5")
// for(var i=1; i<=10;i++){
//     document.write("<br>5 x "+i+" = " + 5*i);
// }

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var c=25;
// document.write(c+ "oC is " + ( (c*9/5) +32) +"oF" );
// var f=70;
// document.write("<br> "+ f + "oF is " + ( (f-32) * 5/9) + "oC" );

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// document.write("<h3>Shopping cart</h3>");
// var p1=650, p2=100, q1=3, q2=7, ship=100;
// document.write("<br>Price of item 1 is "+ p1);
// document.write("<br>Quantity of item 1 is "+ q1);
// document.write("<br>Price of item 2 is "+ p2);
// document.write("<br>Quantity of item 2 is "+ q2);
// document.write("<br>Shipping charges "+ship);
// document.write("<br><br>Total cost of your order is "+ (650*3+100*7+100));

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
// document.write("<h3>Marks Sheet</h3>");
// var tm=980, mo=804;
// document.write("<br>Total marks: "+tm);
// document.write("<br>Marks obtained: "+mo);
// document.write("<br>Percentage: "+mo/tm*100+"%");



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var us=10, saudi=25;
// document.write("<h3>Currency in PKR</h3>");
// document.write("Total currency in PKR: "+ (us*104.80 + saudi*28));


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// var v=2;
// document.write("Number is: " +v+ "<br>Add 5: "+ (v+=5) +"<br> Multiply by 10: "+(v*=10)+"<br>Divide by 2: "+ (v/=2));


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
// var cy=2020, by=1999;
// document.write("Your age is "+ (cy-by));
// // 



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// document.write("<h3>The Geometrizer</h3>");
// var r=20;
// document.write("Radius of a circle: "+r);
// document.write("<br>The circumference is: "+ (2*3.142*r));
// document.write("<br>The area is: "+ (3.142*r*r));



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// document.write("<h3>The Lifetime Supply Calculator</h3>");
// var c="chocolate chip", age=15 ,agr=85, es=3;
// document.write("<br>Favourite Snack: "+c);
// document.write("<br>Current age: "+age);
// document.write("<br>Estimated Maximum Age: "+agr);
// document.write("<br>Amount of snacks per day: "+es);
// document.write("<br>You will need "+ (agr*es)+ " to last you until the ripe old age of "+agr);



