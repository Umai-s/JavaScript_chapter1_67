// 1. Declare an empty array using JS literal notation to store student names in future.
// var std=[];


// 2. Declare an empty array using JS object notation to store student names in future.
// var std={};

// 3. Declare and initialize a strings array.
// var strings=['abc','xyz'];

// 4. Declare and initialize a numbers array.
// var num=[1,2,3];

// 5. Declare and initialize a boolean array.
// var num=[true,false];

// 6. Declare and initialize a mixed array.
// var mixed=[1,'hello',true];



// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualifications=['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil. ', 'PhD'];
// document.write("Qualifications:")
// for(i=0;i<qualifications.length;i++){
//     document.write( "<br>"+(i+1)+") " +qualifications[i]);
// }



// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var std=['Ali','Maham','Sara'];
// var score=[320,230,480];
// tm=500;
// for( var i=0; i<std.length; i++){
//     document.write("<br>Score of "+std[i]+" is "+score[i]+". Percentage:  "+ score[i]/tm*100+"%");
// }



// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated  array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
// position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var color = ['red', 'yellow', 'pink'];
// document.write("Initial array : <b>" + color + "</b>");
// var u = prompt("What color would you like to add to the beginning?");
// color.unshift(u)
// document.write("<br>After adding color to beginning: <b>" + color + "</b>");
// var u = prompt("What color would you like to add to the end?");
// color.push(u)
// document.write("<br>After adding color to end: <b>" + color + "</b>");
// color.unshift('purple', 'orange')
// document.write("<br>After adding two more colors to beginning: <b>" + color + "</b>");
// color.shift()
// document.write("<br>After deleting first color: <b>" + color + "</b>");
// color.pop()
// document.write("<br>After deleting last color: <b>" + color + "</b>");
// var u = prompt("At what index would you like to add another color?");
// var v = prompt("Color name please?");
// color[u]=v;
// document.write("<br>Newly added color at index "+(+u + +1)+" :  <b>" + color + "</b>");
// var u=prompt("At what index would you like to delete the color?");
// var v=prompt("How many colors do you want to delete?");
// color.splice(u-1,v);
// document.write("<br>After deleting: <b>" + color + "</b>");



// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var sc=[320,130,424,155];
// document.write("Student's Scores : <b>" + sc + "</b>");
// sc.sort();
// document.write("<br>Student's Scores after sorting : <b>" + sc + "</b>");




// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var c=['Karachi','Lahore','Peshawar','Quetta','Islamabad'];
// document.write("Cities : <b>" + c + "</b>");
// var sc=c.slice(1,4);
// document.write("<br>Copied Cities : <b>" + sc + "</b>");


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ['This ', ' is ', ' my ', ' cat'];
// document.write("Array : <b>" + arr + "</b>");
// var c=arr.join(' ');
// document.write("<br>String : <b>" + c + "</b>");



// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var arr=['keyboard','mouse','printer','monitor'];
// document.write("Devices : <b>" + arr + "</b>");
// for (i = 0; i < arr.length; i++) {
//     document.write("<br>Out:<br> "+ arr[i]);   
// }



// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)


// var arr=['keyboard','mouse','printer','monitor'];
// document.write("Devices : <b>" + arr + "</b>");
// for (i = arr.length-1; i >= 0; i--) {
//     document.write("<br>Out:<br> "+ arr[i]);   
// }



// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// var arr=['Apple ','Samsung ', 'Motorola ', 'Nokia ', 'Sony ' , 'Haier '];
// document.write('<select>')
// for ( var i=0; i<arr.length;i++){
//     document.write("<option>"+arr[i]+'</option>');
// }
// document.write('</select>')















