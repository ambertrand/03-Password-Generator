// Assignment Code
const generateBtn = document.querySelector("#generate");

// All password content arrays
const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split('');
const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const numChar = "0123456789".split('');
const specialChar = "`~!@#$%^&*()-_=+[]{}\|;:',./?<>".split("");


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

// Confirming what checkboxes are selected
const lowerCaseChar = document.getElementById("#lowerCaseChar").checked;
const upperCaseChar = document.getElementById("#upperCaseChar").checked;
const numbers = document.getElementById("#numbers").checked;
const specialChar = document.getElementById("#specialChar").checked;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
