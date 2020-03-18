// adds focus to name input
let nameInput = document.querySelector('#name');
nameInput.focus();
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
// hide color div until shirt them selected
let colorDiv = colorSelector.parentNode;
colorDiv.style.display = 'none';

// hide color options until shirt theme selected
for (i = 1; i < colorOptions.length; i++) {
  if (designSelector.value === designOptions[0].textContent) {
    colorOptions[i].style.display = 'none';
    colorOptions[0].selected = 'true';
  } 
} 

// event listener for shirt design selector
designSelector.addEventListener('change', (e) => {
  colorDiv.style.display ='';
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

// **** validation section
let submitButton = document.querySelector('button');

// name validation
function nameValidator() {
  let nameValue = nameInput.value;
  if (nameValue.length > 0) {
    nameInput.style.border = '';
    return true;
  } else {
    nameInput.style.border = '3px solid red';
    return false;
  }
}  

// email validation
function emailValidator() {
  let emailRegEx  =/^[^@]+@[^.]+.\w+$/gm;
  let emailInput = document.querySelector('#mail');
  if (emailRegEx.test(emailInput.value)) {
    emailInput.style.border = '';
    return true;
  } else {
    emailInput.style.border = '3px solid red';
    return false;
  }
}

// checkbox selected validation
function checkValidator() {
  let checked = 0;
  let registerTitle = activitiesSection.querySelector('legend');
  for (i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      checked += 1;
    } 
  }
  if (checked > 0) {
    registerTitle.style.color = '';
    return true;
  } else {
    registerTitle.style.color = 'red';
    return false;
  }
}

// credit card validation
function creditNum() {
  let creditInput = document.querySelector('#cc-num');
  let cardNum = creditInput.value;
  let cardRegex = /^\d{13,16}$/gm;

  if (!cardRegex.test(cardNum)) {
    creditInput.style.border = '3px solid red';
    return false;
  } else {
    creditInput.style.border = '';
    return true;
  }
}

// zipcode validation
function zipValidation() {
  let zipInput = document.querySelector('#zip');
  let zip = zipInput.value;
  let zipRegex = /^\d{5}$/gm;
  if (zipRegex.test(zip)) {
    zipInput.style.border = '';
    return true;
  } else {
    zipInput.style.border = '3px solid red';
    return false;
  }
}

// cvv validation
function cvvValidation() {
  let cvvInput = document.querySelector('#cvv');
  let cvv = cvvInput.value;
  let cvvRegex = /^\d{3}$/;
  if (cvvRegex.test(cvv)) {
    cvvInput.style.border = '';
    return true;
  } else {
    cvvInput.style.border = '3px solid red';
    return false;
  }
}

//  error message
let form = document.querySelector('form');
let p = document.createElement('p');
p.innerText = '*** All fields in red must be filled out ***';
p.style.color = 'red';
function errorMessage() {
  if (p.style.display !== 'block') {
    form.appendChild(p);
  }
}

// returns bool of validation functions
function masterValidator(fun1, fun2, fun3) {
  return fun1 && fun2 && fun3;
}

// submit button event listener, checking for validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkValidator();
  nameValidator(); 
  emailValidator();
  // for credit card payment method
  if (paySelect.value === 'credit card') {
    creditNum(); 
    zipValidation(); 
    cvvValidation();
    if (masterValidator(creditNum(), zipValidation(), cvvValidation()) &&
    masterValidator(checkValidator(), nameValidator(), emailValidator())) {
      location.reload();
    } else {
    errorMessage();
    }
    // other payment methods
  } else {
    if (masterValidator(checkValidator(), nameValidator(), emailValidator())) {
      location.reload();
    } else {
    errorMessage();
    }
  }

})
 
  
  
  

    
   
