// 1.Consider you have 4 images in a file as shown below: 
// Now When you click on an image it should display in a modal.

function showImage(e){
    var modalImage=document.getElementById('modalImage');
    modalImage.src=e.src;
}




// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
//  On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
// var p = document.getElementById("para");
// var currTextSize = 20;
// adjustText();
// function zoomIn() {
//     currTextSize += 10;
//     adjustText();
// }
// function zoomOut() {
//     currTextSize -=10;
//     adjustText();
// }
// function adjustText() {
//     para.style.fontSize = currTextSize + 'px';
// }