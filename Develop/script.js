// Syncs number input & character slider to match when mouse moves slider. Source link https://www.youtube.com/watch?v=iKo9pDKKHnc
// Links up with number input from HTML  
const passwordLength = document.getElementById('passwordLength');
const passwordNumber = document.getElementById('passwordNumber');

passwordLength.addEventListener('input', syncCharNum);
passwordNumber.addEventListener('input', syncCharNum);

// Calls the event function when the slider is moved to sync the characters and numbers
function syncCharNum(n) {
  const value = n.target.value
  passwordNumber.value = value
  passwordLength.value = value
}

// Activates Password generator button
const generateBtn = document.querySelector("#generatePassword");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const lowerCaseCharEl = document.querySelector("#lowerCaseChar");
const upperCaseCharEl = document.querySelector("#upperCaseChar");
const numbersEl = document.querySelector("#numbers");
const specialCharEl = document.querySelector("#specialChar");
const div = document.querySelector("#passwordGeneratorCard")
// const passwordDisplay = document.querySelector("#passwordDisplay")

// Creating arrays of Ascii Characters
const lowerCaseChar = charArrayLowToHigh (97, 122)
const upperCaseChar = charArrayLowToHigh (65, 90)
const numChar = charArrayLowToHigh (48, 57)
const specialChar = charArrayLowToHigh (33, 47).concat(
  charArrayLowToHigh(58, 64)
  ).concat(
    charArrayLowToHigh(91,96)
  ).concat(
    charArrayLowToHigh(123, 126)
  )

// Calling generatePassword = Passing in all values from character slider to checkboxes
div.addEventListener('submit', e => {
  e.preventDefault()
  const characterNumber = passwordNumber.value
  const lowerCaseChar = lowerCaseChar.checked;
  const upperCaseChar = upperCaseChar.checked;
  const numbers = numbers.checked;
  const specialChar = specialChar.checked;
  let password = generatePassword(characterNumber, lowerCaseChar, upperCaseChar, numbers, specialChar);
  //passwordDisplay.innerText = password
})

// This creates overall list of all possible character codes
function generatePassword(characterNumber, lowerCaseChar, upperCaseChar, numbers, specialChar) {
  let charCodes = lowerCaseChar
  if (upperCaseChar) charCodes = charCodes.concat (upperCaseChar)
  if (numbers) charCodes = charCodes.concat (numbers)
  if (specialChar) charCodes = charCodes.concat (specialChar)

  const passwordCharacters = []
  // Creates for loop that can chooses random characters each cycle
  for (let i = 0; i < characterNumber; i++) {
    const character = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode)(characterCode)
  }
  return passwordCharacters.join('')
}

// Generates loop for ascii character code range
// Source  https://www.youtube.com/watch?v=iKo9pDKKHnc
function charArrayLowToHigh (low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}