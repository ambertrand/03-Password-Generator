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
generateEl.addEventListener('click', function () {
  let length = parseInt(pwlengthEl.value);
  const containsLower = lowerCaseCharEl.checked;
  const containsUpper = upperCaseCharEl.checked;
  const containsNumber = numbersEl.checked;
  const containsSpecial = specialCharEl.checked;

  // console.log(length);

  resultEl.innerText = generatePassword(containsLower, containsUpper, containsNumber, containsSpecial, length);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {

  // Initiates password variable
  let generatePassword = '';

  const totalPassword = lower + upper + number + symbol;

  // console.log('totalPassword', totalPassword)

  // Filters out unchecked boxes and creates array of objects
  const totalArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]
      // function(item) {(Object.values(item)[0])}
    );

  // console.log('totalArr: ', totalArr);

  // Checking if no boxes are checked
  if (totalPassword === 0) {
    return '';
  }

  //For loop for the password length
  for (let i = 0; i < length; i += totalPassword) {
    totalArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      // console.log('funcName: ', funcName);

      // Taking password string and append on to it to take upper, lower, number, symbol
      generatePassword += charObject[funcName]();
      //     resultEl.value = password;
    });
  }

  const finalPassword =
  console.log(generatePassword);
}

// Reverse filter and arrow function line 52 
// Explaining loop line 64
// Pushing lowercase, upper, number etc. function into array
// Hit for loop, inside randomly selected element in array
// Push string onto page as password


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