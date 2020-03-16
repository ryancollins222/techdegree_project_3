// adds focus to name input
let nameInput = document.querySelector('#name').focus();
// hides other job role text input
let otherInput = document.querySelector('#other-title');
otherInput.style.display = 'none';
// hides 'Select Theme' from dropdown 
let designSelector = document.querySelector('#design');
let designOptions = designSelector.querySelectorAll('option');
designOptions[0].style.display = 'none';

let jobRoleSelector = document.querySelector('#title');

// t shirt color selector and options
let colorSelector = document.querySelector('#color');
// create option element
let colorTitle = document.createElement('option');
colorTitle.innerText = 'Please select a T-shirt theme';
colorSelector.prepend(colorTitle);
let colorOptions = colorSelector.querySelectorAll('option');

// hide color options until shirt theme selected
for (i = 1; i < colorOptions.length; i++) {
  if (designSelector.value === designOptions[0].textContent) {
    colorOptions[i].style.display = 'none';
    colorOptions[0].selected = 'true';
  } 
} 

// event listener for shirt design selector
designSelector.addEventListener('change', (e) => {
  for (i = 0; i < colorOptions.length; i++) {
    colorOptions[i].style.display = 'none';
  }
  if (e.target.value === designOptions[1].value) {
    for (i = 1; i < 4; i++) {
      colorOptions[i].style.display = '';
      colorOptions[1].selected = 'true';
    }
  } else {
    for (i = 4; i < colorOptions.length; i++) {
      colorOptions[i].style.display = '';
      colorOptions[4].selected = 'true';
    }
  }
})

// adds 'other' text input page when 'other' selected, hidden when any other option selected
jobRoleSelector.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
    otherInput.style.display = '';
  } else {
    otherInput.style.display = 'none';
  }
})

// checkbox section
let activitiesSection = document.querySelector('.activities');
let checkBoxes = document.querySelectorAll('input[type=checkbox]')
let totalNum = 0;
let total = document.createElement('p');
activitiesSection.appendChild(total);

// activities event handler
activitiesSection.addEventListener('change', (e) => {
  let time = e.target.getAttribute('data-day-and-time');
  let cost = parseInt(e.target.getAttribute('data-cost'));
  console.log(cost);
  // disables conflicting events
  if (e.target.checked) {
    for (i = 0; i < checkBoxes.length; i++) {
      if (time === checkBoxes[i].getAttribute('data-day-and-time')) {
        checkBoxes[i].disabled = true;
      }
    } 
    e.target.disabled = false;
    // add/display cost as events added
    totalNum += cost;
    total.innerText = `Total: $${totalNum}`;
    // enables previously conflicting events 
  } else {
    for (i = 0; i < checkBoxes.length; i++) {
      if (time === checkBoxes[i].getAttribute('data-day-and-time')) {
        checkBoxes[i].disabled = false;
      }
    }
    // subtract/display total cost as events removed
    totalNum -= cost;
    total.innerText = `Total: $${totalNum}`;
  }
})

// **** payment section
let paySelect = document.querySelector('#payment');
let payOptions = paySelect.querySelectorAll('option');
// make credit card selected by default
payOptions[0].style.display = 'none';
payOptions[1].selected = true;
// payment divs
let creditDiv = document.querySelector('#credit-card');
let paypalDiv = document.querySelector('#paypal');
let bitcoinDiv = document.querySelector('#bitcoin');

function displayActive(div1, div2, div3) {
  div1.style.display = '';
  div2.style.display = 'none';
  div3.style.display = 'none';
}

paySelect.addEventListener('change', (e) => {
  if (e.target.value === 'credit card') {
    displayActive(creditDiv, paypalDiv, bitcoinDiv);
  } else if (e.target.value === 'paypal') {
    displayActive(paypalDiv, creditDiv, bitcoinDiv);
  } else {
    displayActive(bitcoinDiv, paypalDiv, creditDiv);
  }
})

  

