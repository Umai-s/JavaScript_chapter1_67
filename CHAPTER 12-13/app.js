// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var j = prompt("Enter any character.");
var i=j.charCodeAt();
if( i >= 97 && i<=122 ){
    alert("You entered Lowercase letter.");
}
else if( i >=65 && i<=90 ){
    alert("You entered Uppercase letter.");
}
else if( i >=48 && i<=57 ) {
    alert("You entered a Number.");
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal

// var n1=prompt("Enter 1st number");
// var n2=prompt("Enter 2nd number");
// if(n1>n2){
//     alert(n1+" is larger than " + n2);
// }
// else if(n2>n1){
//     alert(n2+" is larger than "+ n1);
// }
// else if(n1==n2){
//     alert(n1+" is equal to "+ n2);
// }


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var n1=prompt("Enter any number");
// if(n1 > 0){
//     alert(n1+" is a positive number.");
// }
// else if(n1 < 0){
//     alert(n1+" is a negative number.");
// }
// else if(n1 == 0){
//     alert(n1+" is zero.");
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise.

// var i = prompt("Enter any character.");
// if (i=='a' ||i=='e'||i=='i'||i=='o'||i=='u'||i=='A'||i=='E'||i=='I'||i=='O'||i=='U'){
//     alert(true);
// }
// else{
//     alert(false);
// }


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var pass="hello";
// var p=prompt("Enter your password.");
// if(p==''|| p==' '){
//     alert("Please enter your password.")
// }
// else if( p==pass){
//     alert("Correct! The password you entered matches the original password.")
// }
// else if( p!==pass){
//     alert("Incorrect password.")
// }



// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else {
//     greeting = "Good evening";
//     alert(greeting);
// }




// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


// var time=prompt("Please enter time in 24 hours clock format like: 1900 = 7pm");

// if(time>=0000 && time<1200){
//     alert("Good Morning!");
// }

// else if(time>=1200 && time<1700){
//     alert("Good Afternoon!");
// }

// else if(time>=1700 && time<2100){
//     alert("Good Evening!");
// }
// else if(time>=2100 && time<2359){
//     alert("Good Night!");
// }

