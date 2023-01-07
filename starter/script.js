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
  passwordLength: 0,
  requireSpecial: false,
  requireNumbers: false,
  requireUppercase: false
}
let requireSpecial = false;
let requireNumbers = false;
let requireUppercase = false;

// Function to prompt user for password options
function getPasswordOptions() {
  userInput.passwordLength = prompt('how long would you like your password (8-64)');
  userInput.passwordLength = Number(userInput.passwordLength);
  console.log(userInput.passwordLength);
  if(userInput.passwordLength >= 8 && userInput.passwordLength <= 64) {

    userInput.requireSpecial = confirm('Do you require special characters?');
    userInput.requireUppercase = confirm('Do you require uppercase characters?');
    userInput.requireNumbers = confirm('Do you require numbers?');

  } else {
    getPasswordOptions();
  }
  generatePassword();
}



// Function for getting a random element from an array
function getRandom(arr) {
  for (i = 0; i < userInput.passwordLength; i++) {
  let randomChar = arr[Math.floor(Math.random()* arr.length)];
  password.push(randomChar);
  console.log(password);
  }
}

// Function to generate password with user input
function generatePassword(passwordLength, requireNumbers, requireSpecial, requireUppercase) {
  if(requireNumbers && requireSpecial && requireUppercase) {
    getRandom()
  }
  console.log('got here');
  getRandom(lowerCasedCharacters);
}

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