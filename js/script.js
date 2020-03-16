// adds focus to name input
let nameInput = document.querySelector('#name').focus();
// hides other job role text input
let otherInput = document.querySelector('#other-title');
otherInput.style.display = 'none';
// hides 'Select Theme' from dropdown 
let designOptions = document.querySelector('#design');
designOptions.querySelector('option').style.display = 'none';
let jobRoleSelector = document.querySelector('#title');

// t shirt color selctor and options
let colorSelector = document.querySelector('#color');
// create option element
let colorOptions = colorSelector.querySelectorAll('option');

// hide color options until shirt theme selected


// adds 'other' text input page when 'other' selected, hidden when any other option selected
jobRoleSelector.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
    otherInput.style.display = '';
  } else {
    otherInput.style.display = 'none';
  }
})


