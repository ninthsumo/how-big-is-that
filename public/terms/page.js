// Open the tab that is clicked and change the button colour to active 
  function openTab(btnName) {

// select the divs corresponding to the tabs
    const tb1 = document.getElementById("tab1");
    const tb2 = document.getElementById("tab2");
    const tb3 = document.getElementById("tab3");
    const button1 = document.getElementById("btn1");
    const button2 = document.getElementById("btn2");
    const button3 = document.getElementById("btn3");

    let inTab1 = document.getElementById("tab1-area-in");
    let inTab2 = document.getElementById("tab2-area-in");
    let inTab3 = document.getElementById("tab3-area-in");
    
    // clear input fields
    inTab1.value = '';
    inTab2.value = '';
    inTab3.value = '';

    // set all tab divs to hidden 
    tb1.classList.remove("flex");
    tb2.classList.remove("flex");
    tb3.classList.remove("flex");
    tb1.classList.add("hidden");
    tb2.classList.add("hidden");
    tb3.classList.add("hidden");

    // set all buttons to inactive
    button1.classList.remove("bg-gray-900");
    button2.classList.remove("bg-gray-900");
    button3.classList.remove("bg-gray-900");
    button1.classList.add("bg-gray-500");
    button2.classList.add("bg-gray-500");
    button3.classList.add("bg-gray-500");

    // depending on which button is clicked, make the corresponding tab flex
    if (btnName === "btn1") {
      tb1.classList.add("flex")
      tb1.classList.remove("hidden")
      button1.classList.add("bg-gray-900");
      button1.classList.remove("bg-gray-500");
    }
    if (btnName === "btn2") {
      tb2.classList.add("flex")
      tb2.classList.remove("hidden")
      button2.classList.add("bg-gray-900");
      button2.classList.remove("bg-gray-500");
      }
    if (btnName === "btn3") {
      tb3.classList.add("flex")
      tb3.classList.remove("hidden")
      button3.classList.add("bg-gray-900");
      button3.classList.remove("bg-gray-500");
      }    
  }
  // SCROLL TO TOP FUNTION
  //Get the button
var topButton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', (e) => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});