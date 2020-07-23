// i. Get element of id “main-content” and assign them in a variable.

// var m = document.getElementById('main-content');

// ii. Display all child elements of “main-content” element.

// var c = m.childNodes;
// var txt = "";
// for (var i = 0; i < c.length; i++) {
//     txt = txt + c[i].nodeName + "<br>";
// }

// document.getElementById("demo").innerHTML = txt;


// iii. Get all elements of class “render” and show their innerHTML
// in browser.

// var x = document.getElementsByClassName("render");
// for (var i = 0; i < x.length; i++) {
//     document.write(x[i].innerHTML +"<br>")
// }

// iv. Fill input value whose element id first-name using javascript.
// var txt="Umaima";
// document.getElementById('first-name').value=txt


// v. Repeat part iv for id ”last-name” and “email”.
// document.getElementById('last-name').value="Saleem"
// document.getElementById('email').value="umaima@gmail.com"


// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.

// var x = document.getElementById("form-content").nodeType;
// document.getElementById('demo').innerHTML="Node type of form-content is: "+ x;


// ii. Show node type of element having id “lastName” and its child node.

// var x = document.getElementById("lastName").nodeType;
// document.getElementById('demo').innerHTML="Node type of lastName is: "+ x;


// var y = document.getElementById("lastName").childNodes;
// document.getElementById('d').innerHTML="Child nodes of lastName is: "+ y;

// iii. Update child node of element having id “lastName”.

// document.getElementById("lastName").childNodes[0].textContent="Umaima";


// iv. Get First and last child of id “main-content”.

// var x=document.getElementById('main-content');
// document.getElementById('demo').innerHTML="First child is: "+ x.firstChild.nodeName;
// document.getElementById('d').innerHTML="Last child is: "+ x.lastChild.nodeName;


// v. Get next and previous siblings of id “lastName”.

// var x=document.getElementById('lastName');
// document.getElementById('demo').innerHTML="Next sibling is: "+ x.nextSibling.nodeName;
// document.getElementById('d').innerHTML="Previous sibling is: "+ x.previousSibling.nodeName;


// vi. Get parent node and node type of element having id “email”

// var x=document.getElementById('email');
// document.getElementById('demo').innerHTML="Parent node is: "+ x.parentNode.nodeName;
// document.getElementById('d').innerHTML="Node type is: "+ x.nodeType;
























