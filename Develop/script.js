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

  // console.log(value);

}

// Selecting ID from HTML
const resultEl = document.querySelector("#password");
const lowerCaseCharEl = document.querySelector("#lowerCaseChar");
const upperCaseCharEl = document.querySelector("#upperCaseChar");
const numbersEl = document.querySelector("#numbers");
const specialCharEl = document.querySelector("#specialChar");
const generateEl = document.querySelector("#generate");



generateEl.addEventListener("click", function () {
  let length = parseInt(pwlengthEl.value);
  let generatedPassword = [];
  let finalPassword = [];
  const special = '!@#$%^&*(){}[]=<>/,.';
  // console.log(length);
  if ((length < 8) || (length > 128)) {
    alert("Password needs to be greater than 8 and less than 128 characters");
  }
  if (lowerCaseCharEl.checked === true) {
    for (let i = 0; i < 26; i++) {
      generatedPassword.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    }
  }
  if (upperCaseCharEl.checked === true) {
    for (let i = 0; i < 26; i++) {
       generatedPassword.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
      }
  }
  if (numbersEl.checked === true) {
    for (let i = 0; i < 10; i++) {
       generatedPassword.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
        }
      }
  if (specialCharEl.checked === true) {
       for (let i = 0; i < special.length; i++) {
        generatedPassword.push(special[Math.floor(Math.random() * special.length)]);
    }
  }

 const gpLength = generatedPassword.length; 
  for (let i = 0; i < length; i++) {
    let randomNum = Math.floor(Math.random() * gpLength);
    finalPassword.push(generatedPassword[randomNum]);
  }
  // console.log(finalPassword);
});

// Pushing lowercase, upper, number etc. function into array
// Hit for loop, inside randomly selected element in array
// Push string onto page as password
