// Array of special characters to be included in password

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



let password = [];
let userInput = {
  requireSpecial: false,
  requireNumbers: false,
  requireUppercase: false
}
let optionSpecial = false;
let optionNumbers = false;
let optionUppercase = false;
let passwordLength = '';

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt('how long would you like your password (8-64)');
  passwordLength = Number(passwordLength);
  console.log(passwordLength);

  if(passwordLength >= 8 && passwordLength <= 64) {
    
    userInput.requireSpecial = prompt('Do you require special characters? Y/N');
    if(userInput.requireSpecial === 'y' || userInput.requireSpecial === 'Y') {
      optionSpecial = true
    }
      userInput.requireUppercase = prompt('Do you require uppercase characters? Y/N');
      userInput.requireNumbers = prompt('Do you require numbers? Y/N');
      console.log(userInput.requireNumbers, userInput.requireSpecial, userInput.requireUppercase);
    } else {
    getPasswordOptions();
  }
  generatePassword();
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  }

// Function to generate password with user input
function generatePassword(optionSpecial, optionNumbers, optionUppercase) {
  for (i = 0; i < passwordLength; i++) {

    if(optionSpecial === true) {
      password += getRandom(specialCharacters);
    }

    if(optionNumbers === true) {
      password += getRandom(numericCharacters);
    }

    if(optionUppercase === true) {
      password += getRandom(upperCasedCharacters);
    }
    password += getRandom(lowerCasedCharacters);
  }
 console.log(password);
}

password.slice(0, passwordLength);
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);

/* * Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page
*/