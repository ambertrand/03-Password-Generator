// Assignment Code
const generateBtn = document.querySelector("#generate");
// Number of Characters Slider
const passwordLengthSlider = document.getElementById('numberOfCharacterInputslider');
const passwordLengthNumber = document.getElementById('numberOfCharacterInputDigit')

function sliderChange(val) {
  document.getElementById('sliderStatus').innerHTML = val;
}

// All password content arrays
const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz".split('');
const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const numChar = "0123456789".split('');
const specialChar = "`~!@#$%^&*()-_=+[]{}\|;:',./?<>".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
