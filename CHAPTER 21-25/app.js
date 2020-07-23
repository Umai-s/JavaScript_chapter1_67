// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var first=prompt("Enter your first name?");
// var last=prompt("Enter your last name?");
// var fullName=first+" "+last;
// alert("WELCOME, "+fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var u=prompt("Enter your favorite mobile phone model?");
// document.write("My favourite phone is: "+u);
// document.write("<br>Length of string: "+u.length);


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var s="Pakistani";
// document.write("String is: "+s);
// document.write("<br>Index of 'n': "+s.indexOf("n"));


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var w="Hello World";
// document.write("String is: "+w);
// document.write("<br>Last Index of 'l': "+w.lastIndexOf('l'));


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var s="Pakistani";
// document.write("String is: "+s);
// document.write("<br>Character at index 3: "+s.charAt(3));

// 6. Repeat Q1 using string concat() method.

// var first=prompt("Enter your first name?");
// var last=prompt("Enter your last name?");
// var fullName=first.concat(last);
// alert("WELCOME, "+fullName);


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var s="Hyderabad";
// document.write("City: "+s);;
// document.write("<br>After Replacement: "+s.replace("Hyder","Islam"));



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Actual string is: "+message);
// document.write("<br>After replacing: "+message.replace(/and/gi,"&"));


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var v="472";
// document.write("Value: "+v);
// document.write("<br>Type of: "+typeof(v));
// var s=472;
// document.write("<br>Value: "+s);
// document.write("<br>Type of: "+typeof(s));


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// 
// var u=prompt("Enter something in lowercase.");
// document.write("User input: "+u);
// document.write("<br>Uppercase: "+u.toUpperCase());


// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var u=prompt("Enter something in lowercase.");
// document.write("User input: "+u);
// var title =u.charAt(0).toUpperCase() + u.slice(1)
// document.write("<br>Titlecase: "+ title);



// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// document.write("Number : "+num);
// var newn= parseInt(num.toString().replace(".", ""));
// document.write("<br>Result : "+ newn);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// var spch = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
// var sp = function (string) {
//     for (var i = 0; i < spch.length; i++) {
//         if (string.indexOf(spch[i]) > -1) {
//             return true
//         }
//     }
//     return false;
// }
// var u = prompt("Enter username:");
// if (sp(u)) {
//         document.write("Please enter a valid username.");
// } else {
//         document.write("Username is:<b>"+u+"</b>");
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var user = prompt("Welcome to ABC bakery.What do you want to order?")
// user = user.toLowerCase();
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var u = a.includes(user);
// if (u == true) {
//     document.write(user + " is <b>available</b> at index " + a.indexOf(user) + " in our bakery");
// }
// else {
//     document.write(user + " is <b>not available</b> in our bakery");
// }


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var numbr = false;     
// var u = prompt("Enter your password.\n a. It should contain alphabets and numbers\n b. It should not start with a number\n c. It must at least 6 characters long", 'abc123');
// if (u.length < 6) {
//     document.write("<br>Your password must be at least <b>6</b> characters long.");
// }

// if (!(isNaN(parseInt(u[0])))) {
//     document.write("<br>Password should not start with <b>number</b>.");
// }
// for (var i = 1; i < u.length; i++) {
//     charAny = u.substr(i, 1);
//     if (isNumeric(charAny)) {
//         numbr = true;
//     }
// }
// if (numbr !== true) {
//     document.write("<br>Your password must include at least <b>1</b> digit.");
// }
// else
// document.write("<br>Thank you! Your Password is: " + "<b>"+u+"</b>");
// function isNumeric(character) {
//     return ("01234567890".search(character) > -1);
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var u = university.split("");
// for (var i = 0; i < u.length; i++)
//     document.write("<br>" + u[i]);


// 17. Write a program to display the last character of a user
// // input.
// var u=prompt("enter something");
// document.write("User input: "+u);
// var s=u.length-1;
// document.write("<br>Last character of input: "+u.charAt(s));


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string

// var s = "The quick brown fox jumps over the lazy dog";
// var ss=s.toLowerCase();
// var str=ss.split("the").length-1;
// document.write("There are "+str+" occurence(s) of word 'the'.");





