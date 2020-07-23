// 1. Create a signup form and display form data in your web
// page on submission.

// function display() {
//     document.write("Email : <b> " + document.myform.name.value + "</b><br>");
//     document.write("Password not disclosed due to security purposes");
// }


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// function read() {
//     var text="<p id='para'><h3>Build</h3><b>OS</b> Android 10.0 OS<br><b>UI</b> OneUI 2.0<br><b>Dimensions</b> 159.3 x 73.1 x 8.6 mm<br><b>Weight</b> 185 g<br><b>SIM</b> Dual Sim, Dual Standby (Nano-SIM)<br><b>Colors</b> Prism Crush Black, Prism Crush Blue, Prism Crush Red, Prism Crush White<br><br><h3>Display</h3><b>Technology</b> Super AMOLED Capacitive Touchscreen, 16M Colors, Multitouch<br><b>Size</b> 6.4 Inches<br><b>Resolution</b> 1080 x 2400 Pixels (~411 PPI)<br><br><h3>Memory</h3><b>Built-in</b> 128GB Built-in, 4GB RAM<br><b>Card</b> microSD Card, (supports up to 512GB)<br>"
//     var p=document.getElementById('para');
//     p.innerHTML=text;
// }


// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

// var row_index, table = document.getElementById('table');


// function addRow() {
//     if (!checkEmpty()) {
//         var newRow = table.insertRow(table.length);
//         var c1 = newRow.insertCell(0);
//         var c2 = newRow.insertCell(1);
//         var c3 = newRow.insertCell(2);

//         var name = document.getElementById('name').value;
//         var institute = document.getElementById('ins').value;
//         var email = document.getElementById('email').value;

//         c1.innerHTML = name;
//         c2.innerHTML = institute;
//         c3.innerHTML = email;

//         selectRow();

//     }
// }

// function selectRow() {
//     for (var i = 1; i < table.rows.length; i++) {
//         table.rows[i].onclick = function () {
//             row_index = this.rowIndex;
//             document.getElementById('name').value = this.cells[0].innerHTML;
//             document.getElementById('ins').value = this.cells[1].innerHTML;
//             document.getElementById('email').value = this.cells[2].innerHTML;
//         };
//     }
// }
// selectRow();

// function edit() {
//     var name = document.getElementById("name").value;
//     var ins = document.getElementById("ins").value;
//     var email = document.getElementById("email").value;
//     if (!checkEmpty()) {
//         table.rows[row_index].cells[0].innerHTML = name
//         table.rows[row_index].cells[1].innerHTML = ins
//         table.rows[row_index].cells[2].innerHTML = email
//     }
// }
// function deleteRow() {
//     table.deleteRow(row_index);
//     document.getElementById("name").value = "";
//     document.getElementById("ins").value = "";
//     document.getElementById("email").value = "";

// }

// function checkEmpty() {
//     var empty = false;
//     var name = document.getElementById('name').value;
//     var institute = document.getElementById('ins').value;
//     var email = document.getElementById('email').value;

//     if (name === "") {
//         alert("Name field is empty");
//         empty = true;
//     }
//     else if (institute === "") {
//         alert("Institute field is empty");
//         empty = true;
//     }
//     else if (email === "") {
//         alert("Email field is empty");
//         empty = true;
//     }
//     return empty;
// }

