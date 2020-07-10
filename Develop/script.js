// Assignment code
let generateBtn = document.querySelector("#generate");

// Syncs number input & character slider to match when mouse moves slider. Source link https://www.youtube.com/watch?v=iKo9pDKKHnc
// Links up with number input from HTML  
const passwordLength = document.getElementById('passwordLength');
const passwordNumber = document.getElementById('passwordNumber');


passwordLength.addEventListener('input', syncCharNum);
passwordNumber.addEventListener('input', syncCharNum);

// Calls the event function when the slider is moved to sync the characters and numbers
function syncCharNum(n) {
  const value = n.target.value;
  passwordNumber.value = value;
  passwordLength.value = value;
}

const lowerCaseCharEl = document.querySelector("#lowerCaseChar");
const upperCaseCharEl = document.querySelector("#upperCaseChar");
const numbersEl = document.querySelector("#numbers");
const specialCharEl = document.querySelector("#specialChar");
const resultEl = document.querySelector("#password");
const generateEl = document.querySelector("#generate");

const randomFunc  = {

}

// Creating arrays of Ascii Characters
// Source  https://www.youtube.com/watch?v=iKo9pDKKHnc
const lowerCaseChar = charArrayLowToHigh (97, 122);
const upperCaseChar = charArrayLowToHigh (65, 90);
const numChar = charArrayLowToHigh (48, 57);
const specialChar = charArrayLowToHigh (33, 47).concat(
  charArrayLowToHigh(58, 64)
  ).concat(
    charArrayLowToHigh(91,96)
  ).concat(
    charArrayLowToHigh(123, 126)
  );

// Generates loop for ascii character code range
function charArrayLowToHigh (low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

  // Creates for loop that can chooses random characters each cycle
  for (let i = 0; i < passwordLength; i++) {
    const character = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode)(characterCode)
  }
  // return passwordCharacters.join('');


// Genereate Event listener
generateEl.addEventListener('click', () => {
  const length = parseInt(passwordNumber.value);
  const containsLower = lowerCaseCharEl.checked;
  const containsUpper = upperCaseCharEl.checked;
  const containsNumber = numbersEl.checked;
  const containsSpecial = specialCharEl.checked;

  resultEl.innerText = generatePassword(
    containsLower, 
    containsUpper, 
    containsNumber, 
    containsSpecial, 
    length
    );
});

// Generate password function
function generatePassword(lowerCaseCharEl, upperCaseCharEl, numbersEl, specialCharEl, resultEl) {
 
// Initiates password variable
  let generatePassword = '';

  const totalPassword = lowerCaseCharEl + upperCaseCharEl + numbersEl + specialCharEl;

  // console.log('totalPassword', totalPassword)

// Filters out unchecked boxes
  const totalArr = [{lowerCaseCharEl}, {upperCaseCharEl}, {numbersEl}, {specialCharEl}].filter
  (
    item => Object.values(item) [0]
  );

  // console.log('totalArr', totalArr);

// Checking if no boxes are checked
  if(totalPassword ===0) {
    return '';
  }


for(let i = 0; i < length; i += totalPassword) {
  totalArr.forEach(type => {
    const funcName = Object.keys(type)[0];


    // generatePassword += randomFunc[funcName]();
  });
}

console.log(generatePassword);
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }