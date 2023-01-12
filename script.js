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


let requireSpecial = false;
let requireNumbers = false;
let requireUppercase = false;


// Function to prompt user for password options
function getPasswordOptions() {
  // Resets password to an empty string and resets booleans
  password = '';
  requireSpecial = false;
  requireNumbers = false;
  requireUppercase = false;

  // Prompts the user to input a string that is then converted to a number
  passwordLength = prompt('How long would you like your password (10-64)');
  passwordLength = Number(passwordLength);
  if(passwordLength >= 10 && passwordLength <= 64) {
  } else {
  // If number is out of range function resets
  getPasswordOptions();
  }

  // Validates user input
  while(requireSpecial === false) {
    let userInput = prompt('Do you require special characters? Y/N').toUpperCase();
    if(userInput === 'Y') {
      requireSpecial = true; 
    } else if (userInput === 'N') {
      break;
    } else {
      alert('Incorrect response. Please use Y or N')
    }
  }

  while(requireNumbers === false) {
    let userInput = prompt('Do you require numbers? Y/N').toUpperCase();
    if(userInput === 'Y') {
      requireNumbers = true;
    } else if (userInput === 'N') {
      break;
    } else {
      alert('Incorrect response. Please use Y or N')
    }
  }

  while(requireUppercase === false) {
    let userInput = prompt('Do you require uppercase characters? Y/N').toUpperCase();
    if(userInput === 'Y') {
      requireUppercase = true;
    } else if (userInput === 'N') {
      break;
    } else {
      alert('Incorrect response. Please use Y or N')
    }
  }
  generatePassword();
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  }

// Function to generate password with user input
function generatePassword() {
  for (i = 0; i < passwordLength; i++) {
    if(requireSpecial) {
      password += getRandom(specialCharacters);
    }
    if(requireNumbers) {
      password += getRandom(numericCharacters);
    }
    if(requireUppercase) {
      password += getRandom(upperCasedCharacters);
    }
    password += getRandom(lowerCasedCharacters);
  }
  password = randomPass(password);
  return password;
}

/* function generatePassword provides a password in the format of arr1 arr2 arr3 arr4 arr1 etc. 
This function converts the password variable to an array which is then randomised with Math.Random, 
joined back together and then returned to generatePassword function */
function randomPass() {
  password = password.slice(0, passwordLength);
  let passArr = password.split('')
  let randomPassword = passArr.sort((a, b) => 0.5 - Math.random());
  password = randomPassword.join('');
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
