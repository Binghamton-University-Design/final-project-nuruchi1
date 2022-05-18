/* javascript */
$(document).ready(function() {

console.log('hello');

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {ButtonOne()};
document.getElementById("myBtn2").onclick = function() {ButtonTwo()};
document.getElementById("myBtn3").onclick = function() {ButtonThree()};
document.getElementById("myBtn4").onclick = function() {ButtonFour()};


// myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content

function ButtonOne() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function ButtonTwo() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
function ButtonThree() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
function ButtonFour() {
  document.getElementById("myDropdown4").classList.toggle("show");
}


});

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
