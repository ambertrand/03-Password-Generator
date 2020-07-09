// Syncs number input & character slider to match when mouse moves slider. Source link https://www.youtube.com/watch?v=iKo9pDKKHnc
// Links up with number input from HTML  
const passwordLength = document.getElementById("passwordLength");
const passwordNumber = document.getElementById("passwordNumber");

passwordLength.addEventListener('input', syncCharNum);
passwordNumber.addEventListener('input', syncCharNum);

// Calls the event function when the slider is moved to sync the characters and numbers
function syncCharNum(n) {
  const value = n.target.value
  passwordNumber.value = value
  passwordLength.value = value
}

// All password content arrays
const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split('');
const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const numChar = "0123456789".split('');
const specialChar = "`~!@#$%^&*()-_=+[]{}\|;:',./?<>".split("");


// Confirming what checkboxes are selected
const lowerCaseChar = document.getElementById("#lowerCaseChar").checked;
const upperCaseChar = document.getElementById("#upperCaseChar").checked;
const numbers = document.getElementById("#numbers").checked;
const specialChar = document.getElementById("#specialChar").checked;

// Activates Password generator button
const generateBtn = document.querySelector("#generatePassword");

// Onclick generate button combines all criteria
generateBtn.addEventListener("click", genPasswordArray);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}