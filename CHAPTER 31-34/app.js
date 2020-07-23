// 1. Write a program that displays current date and time in
// your browser.

// var c= new Date();
// document.write(c);


// 2. Write a program that alerts the current month in words.
// For example December.


// var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var c = new Date();
// document.write("Month is: " +arr[c.getMonth()]);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


// var arr=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
// var c = new Date();
// document.write("Day is: " +arr[c.getDay()]);


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// var arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
// var c = new Date();
// var s = arr[c.getDay()];
// document.write("Day is: " + s);
// if (s == 'Sun' || s == 'Sat') {
//     document.write("<br>It's fun day.");
// }
// else { document.write("<br>Normal days"); }



// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var c = new Date();
// var s =c.getDay();
// if(s<15)
// document.write("First fifteen days of the month");
// else
// document.write("Last fifteen days of the month")


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var c= new Date();
// document.write("Current date: "+c);
// document.write("<br>Elapsed milliseconds since January 1, 1970: "+c.getTime());
// document.write("<br>Elapsed minutes since January 1, 1970: "+ (c.getTime()/(1000*60*60)));


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var c = new Date();
// var hrs = c.getHours();
// if (hrs < 12)
//     document.write("It's AM");
// else
//     document.write("It's PM");



// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date("May 31,2020");
// document.write(laterDate);



// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var d = new Date();
// var d2 = new Date("June 18, 2015");
// var diff = d.getTime() - d2.getTime();
// var days = Math.floor(diff / (1000 * 24 * 60 * 60));
// document.write(days + " days have passed since 1st Ramadan,2015")


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var d = new Date("January 01,2015");
// var d2 = new Date("December 05, 2015");
// var diff = d2.getTime() - d.getTime();
// var days = Math.floor(diff / ( 1000 ));
// document.write("On reference date: "+d2 +" ");
// document.write(days + " seconds have passed since beginning of 2015")



// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var d = new Date();
// document.write("Current date: " + d);
// var h = d.getHours();
// var m = d.getMinutes();
// var s = d.getSeconds();
// document.write("<br>Hours are: " + h + ":" + m + ":" + s);
// var laterh= h-1;
// d.setHours( laterh);
// document.write("<br>1 hour ago ,it was "+d)



// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


// var d = new Date();
// document.write("Current date: " + d);
// d.setFullYear(1920);
// alert("100 years back, it was "+d);


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


// var age=prompt("Enter your age:");
// document.write("Your age is <b>: "+age+"</b>");
// var today=new Date();
// var t=today.getUTCFullYear()
// var dob = t-age;
// document.write("<br>Date of birth is: <b>"+dob +"</b>");


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// document.write("<h1>K-Electric Bill</h1>");
// var cus = prompt("Enter your name");
// document.write("<br>Customer Name: <b>" + cus + "</b>");
// var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var d = new Date();
// document.write("<br>Month : <b>" + arr[d.getMonth()] + "</b>");
// var nou = 410, cpu = 16, l = 350;
// document.write("<br>Number of units: <b>" + nou + "</b>")
// document.write("<br>Charges per units: <b>" + cpu + "</b><br>")
// var net = nou * cpu;
// document.write("<br>Net Amount Payable (within Due Date): <b>" + net + "</b>");
// document.write("<br>Late Payment surcharge: <b>" + l + "</b>");
// document.write("<br>Gross Amount Payable (after Due Date): <b>" + (+net + +l) + "</b>");














































































































