// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// var n=10;
// document.write("Result: ");
// document.write("<br>The value of n is: "+n);
// document.write("<br>................................................");
// document.write("<br><br>The value of ++n is: "+ (++n));
// document.write("<br>Now the value of n is: "+n);
// document.write("<br><br>The value of n++ is: "+ (n++));
// document.write("<br>Now the value of n is: "+n);
// document.write("<br><br>The value of --n is: "+ (--n));
// document.write("<br>Now the value of n is: "+n);
// document.write("<br><br>The value of n-- is: "+ (n--));
// document.write("<br>Now the value of n is: "+n);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1;
// document.write("<br>Initially : a= "+a +" , b=" +b);
// var result = --a - --b + ++b + b--;
// document.write("<br>Result of (--a - --b + ++b + b--) is = "+ result);

// var a = 2, b = 1;
// document.write("<br>Pre-decrement of a in this step (--a) =" + (--a));
// var a = 2, b = 1;
// document.write("<br>Subtraction of Pre-decrement a and b in this step (--a - --b) =" + (--a - --b));
// var a = 2, b = 1;
// document.write("<br>Subtraction and Addition of Pre-decrement a and b(--a - --b + ++b) =" + (--a - --b + ++b));
// var a = 2, b = 1;
// document.write("<br>Subtraction and Addition of Pre-decrement a and b(--a - --b + ++b + b--) =" + (--a - --b + ++b + b--));



// 3. Write a program that takes input a name from user &
// greet the user.
// var i=prompt("Enter your name please:");
// alert("Greetings "+i +"! Have a nice day :)");



// 5. Write a program to take input a number from user &
//    display it’s multiplication table on your browser.If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var n = prompt("Please enter a number:");
// if (n == isNaN() || n == " " || n=='') {
//     for (var i = 1; i <= 10; i++) {
//         document.write("<br>5 x " + i + " = " + 5 * i);
//     }
// }
// else {
//     for (var i = 1; i <= 10; i++) {
//         document.write("<br>" + n + "x " + i + " = " + n * i);

//     }
// }

// 6. 
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// var s1 = prompt("Enter subject 1:");
// var s2 = prompt("Enter subject 2:");
// var s3 = prompt("Enter subject 3:");
// var tm = 100;
// var o1 = prompt("Enter obtained marks of : " + s1);
// var o2 = prompt("Enter obtained marks of : " + s2);
// var o3 = prompt("Enter obtained marks of : " + s3);
// var p1 = o1 / tm * 100;
// var p2 = o2 / tm * 100;
// var p3 = o3 / tm * 100;
// document.write("<table><tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th>    <th> Percentage</th></tr> <tr> <td>" + s1 + "</td>  <td>" + tm + "</td>    <td>" + o1 + "</td>    <td>" + p1 + "%</td></tr > <tr>    <td>" + s2 + "</td>    <td>" + tm + "</td>    <td>" + o2 + "</td>    <td>" + p2 + "%</td></tr><tr>    <td>" + s3 + "</td>    <td>" + tm + "</td>    <td>" + o3 + "</td>    <td>" + p3 + "%</td></tr><tr>    <th></th> <th>"+ (+tm + +tm + +tm)+"</th>    <th>"+( +o1 + +o2 + +o3)+"</th>    <th>"+ (+p1 + +p2 + +p3)/3 +"%</th></tr></table> ");
