
// Special characters that are available to use in the password
const specialCharacters = "!#$%^&*()";
const numbers = "0123456789";
const lowerCases = "abcdefghijklmnopqrstuvwxyz";
const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const generateButton = document.getElementById('generateBtn');

if (generateButton) {
  generateButton.addEventListener('click', writePassword);
}

// Write password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// These are prompts that display to help the user generate a password
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you wish your random password to be. It must be more than 8 characters but no more than 128 characters.");
  var includeNumbers = confirm("Would you like numbers in your password?");
  var includeLowerCase = confirm("Would you like lowercases in your password");
  var includeUpperCase = confirm("Would you like uppercases in your password");
  var includeSpecial = confirm("Would you like special characters in your password");

  var minimumCount = 0;
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  // Used to generate the random characters used in the new password
  var functionArray = {
    getNumbers: function () {
      return numbers[Math.floor(Math.random() * numbers.length)];
    },
    getLowerCase: function () {
      return lowerCases[Math.floor(Math.random() * lowerCases.length)];
    },
    getUpperCase: function () {
      return upperCases[Math.floor(Math.random() * upperCases.length)];
    },
    getSpecialCharacters: function () {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  };

  if (includeNumbers) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (includeLowerCase) {
    minimumLowerCases = functionArray.getLowerCase();
    minimumCount++;
  }
  if (includeUpperCase) {
    minimumUpperCases = functionArray.getUpperCase();
    minimumCount++;
  }
  if (includeSpecial) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }

  var randomPasswordGenerated = "";
  //Used to generate the remaining chracters after the minimum
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    switch (randomNumberPicked) {
      case 0:
        randomPasswordGenerated += functionArray.getNumbers();
        break;
      case 1:
        randomPasswordGenerated += functionArray.getLowerCase();
        break;
      case 2:
        randomPasswordGenerated += functionArray.getUpperCase();
        break;
      default:
        randomPasswordGenerated += functionArray.getSpecialCharacters();
    }
  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;
}
