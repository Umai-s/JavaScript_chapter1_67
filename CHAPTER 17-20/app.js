// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var arr=[ ['hello1','hello2'], 
//           ['okay1','okay2']  ];


// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// var arr=[ [0,1,2,3],[1,0,1,2],[2,1,0,1]  ];

// 3. Write a program to print numeric counting from 1 to 10.

// for(var i=1;i<=10;i++){
//     document.write('<br>'+i);
// }


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var u=prompt("Enter table for number:");
// var v=prompt("Enter length:");
// for( var i=1; i<=v;i++)
// {
//     document.write('<br>'+u+' x '+i+' = '+u*i);
// }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var f = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (var i = 0; i < f.length; i++) {
//     document.write('<br>' + f[i]);
// }
// document.write('<br>');
// for (var i = 0; i < f.length; i++) {
//     document.write('<br>Element at index '+ i + ' is: ' + f[i]);
// }




// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// var c=[1 , 2 , 3 , 4 , 5 ,  6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 ];
// document.write('Counting: <br>'+c);
// var rc=[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// document.write('<br>Reverse counting: <br>'+rc);
// var e=[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// document.write('<br>Even: <br>'+e);
// var od=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// document.write('<br>Odd: <br>'+od);
// var s=['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k'];
// document.write('<br>Series: <br>'+s);







// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var u = prompt("Enter any item to be searched?");
// if (A.includes(u) == true) {

// document.write(u + ' is available in our bakery');
// }

// else{
//     document.write("not available");
// }



// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var A = [24, 53, 78, 91, 12];
// var max=A[0];
// for( var i=0; i<=A.length;i++)
// {
//     if(max<A[i])
//     {
//         max=A[i];
//     }
// }
// document.write('Largest number is: '+max);



// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var A = [24, 53, 78, 91, 12];
// var min=A[0];
// for( var i=0; i<=A.length;i++)
// {
//     if(min>A[i])
//     {
//         min=A[i];
//     }
// }
// document.write('Smallest number is: '+min);


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for(var i=1; i<=20;i++)
// {
//     document.write(i*5 +' ,');
// }












