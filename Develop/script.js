// Syncs number input & character slider to match when mouse moves slider. Source link https://www.youtube.com/watch?v=iKo9pDKKHnc
// Links up with number input from HTML  
const passwordLength = document.querySelector("#passwordLength");
const pwlengthEl = document.querySelector("#passwordNumber");

passwordLength.addEventListener('input', syncCharNum);
pwlengthEl.addEventListener('input', syncCharNum);


// Calls the event function when the slider is moved to sync the characters and numbers
function syncCharNum(n) {
  const value = n.target.value;
  pwlengthEl.value = value;
  passwordLength.value = value;
  console.log(value);

}

const resultEl = document.querySelector("#password");
const lowerCaseCharEl = document.querySelector("#lowerCaseChar");
const upperCaseCharEl = document.querySelector("#upperCaseChar");
const numbersEl = document.querySelector("#numbers");
const specialCharEl = document.querySelector("#specialChar");
const generateEl = document.querySelector("#generate");

// Generate Event listener
generateEl.addEventListener('click', function() {
  let length = parseInt(pwlengthEl.value);
  const containsLower = lowerCaseCharEl.checked;
  const containsUpper = upperCaseCharEl.checked;
  const containsNumber = numbersEl.checked;
  const containsSpecial = specialCharEl.checked;

// console.log(length);

  resultEl.innerText = generatePassword(containsLower, containsUpper, containsNumber, containsSpecial, length);
});

// Moving each function into an object
// Source https://www.youtube.com/watch?v=duNmhKgtcsI
const charObject = {
  lower: lowerCaseChar,
  upper: upperCaseChar,
  number: numChar,
  symbol: specialChar,
};


// Generator Functions using ascii characters for lower, upper & numbers
function lowerCaseChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function upperCaseChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function numChar() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function specialChar() {
  const special = '!@#$%^&*(){}[]=<>/,.';
  return special[Math.floor(Math.random() * special.length)];
}