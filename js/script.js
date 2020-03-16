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


