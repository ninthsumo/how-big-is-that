const tab1AreaIn = document.getElementById('tab1-area-in')
const tab1AreaOutText = document.getElementById('tab1-area-out')
const tab2AreaIn = document.getElementById('tab2-area-in')
const tab2AreaOutText = document.getElementById('tab2-area-out')
const tab3AreaIn = document.getElementById('tab3-area-in')
const tab3AreaOutText = document.getElementById('tab3-area-out')

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {

 // On key-press, calculate the conversion and output 0.5 sec later
  setTimeout(() => {
  
    if (tab1AreaIn.value.length !== '' && tab2AreaIn.value.length !== '' && tab3AreaIn.value.length !== '') 
    // {       alert('Enter a number')       } else 
    {
        if (tab1AreaIn.value.length != 0) {calcTab1()}
        if (tab2AreaIn.value.length != 0) {calcTab2()}
        if (tab3AreaIn.value.length != 0) {calcTab3()}
      }
    }, 500);
      
  }
});

// Convert a height in meters
function calcTab1() {
  const tab1AreaOut = tab1AreaIn.value / 4.38
  
  tab1AreaOutText.innerHTML = `<div class="mt-3 sm:text-base text-sm" id="tab1-area-out">${parseInt(tab1AreaIn.value, 10)} m is ${tab1AreaOut.toFixed(2)} double decker buses high
  </div>`
  tab1AreaIn.value = '';
  tab1AreaOutText.classList.remove("invisible");
}
// Convert a height in feet
function calcTab2() {
  const tab2AreaOut = tab2AreaIn.value / 14.375
  
  tab2AreaOutText.innerHTML = `<div class="mt-3 sm:text-base text-sm" id="tab2-area-out">${parseInt(tab2AreaIn.value, 10)} ft is ${tab2AreaOut.toFixed(2)} double decker buses high
  </div>`
  tab2AreaIn.value = '';
  tab2AreaOutText.classList.remove("invisible");
}
// Convert a height in kilometers
function calcTab3() {
  const tab3AreaOut = tab3AreaIn.value / 0.00438
  
  tab3AreaOutText.innerHTML = `<div class="mt-3 sm:text-base text-sm" id="tab3-area-out">${parseInt(tab3AreaIn.value, 10)} Km is ${tab3AreaOut.toFixed(2)} double decker buses high
  </div>`
  tab3AreaIn.value = '';
  tab3AreaOutText.classList.remove("invisible");
}

