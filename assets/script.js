// Assignment Code
var generateBtn = document.querySelector("#generate");
var myGeneratedPassword;
var numberOfCharacters;
var includeLowercase;
var includeUppercase;
var includeNumbers;
var includeSpecialChar;
var uppercaseSet;
var lowercaseSet;
var numberSet;
var specCharSet;
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "&$%<>?/\:()";
// "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


function generatePassword() {
  //Display a dialog using the prompt() method asking how long the password should be, and console log for debug
  numberOfCharacters = window.prompt("Enter the number of characters the password should contain: \n(minumum: 8)\n(maximum: 128)");
  console.log("Number of characters: " + numberOfCharacters);
  //Display an error if the wrong value was entered
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    window.alert("Passwords must be between 8 and 128 characters in length.");
    return
  } else {
    //Display a dialog asking if the password should include lowercase, and console log for debug
    includeLowercase = window.confirm("Include lowercase characters in password?");
    console.log("Include lowercase characters? " + includeLowercase);
    //Display a dialog asking if the password should include uppercase, and console log for debug
    includeUppercase = window.confirm("Include uppercase characters in password?");
    console.log("Include uppercase characters? " + includeUppercase);
    //Display a dialog asking if the password should include numbers, and console log for debug
    includeNumbers = window.confirm("Include numbers in password?");
    console.log("Include numbers? " + includeNumbers);
    //Display a dialog asking if the password should include special characters, and console log for debug
    includeSpecialChar = window.confirm("Include special characters in password?");
    console.log("Include special characters? " + includeSpecialChar);
  }
  //password breakdown function. Takes the numberOfCharacters variables and randomly breaks it down into number of each type of character


  //create a lowercase array: a - z if lowercase was selected. Otherwise, create an emtpy array.
  if (includeLowercase) {
    lowercaseSet = lowercase.split("");
  } else {
    lowercaseSet = [];
  }
  //create an uppercase array: A - Z if uppercase was selected. Otherwise, create an emtpy array.
  if (includeUppercase) {
    uppercaseSet = uppercase.split("");
  } else {
    uppercaseSet = [];
  }
  //create a numbers array: 0 - 9 if numbers was selected. Otherwise, create an emtpy array.
  if (includeNumbers) {
    numberSet = numbers.split("");
  } else {
    numberSet = [];
  }
  //create a spec char array: " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" if special characters was selected. Otherwise, create an emtpy array.
  if (includeSpecialChar) {
    specCharSet = specialCharacters.split("");
  } else {
    specCharSet = [];
  }
  // console log the arrays for debugging.
  console.log(lowercaseSet)
  console.log(uppercaseSet)
  console.log(numberSet)
  console.log(specCharSet)

  //concat the arrays into a single array based on the selections made. Console log the array for debugging.
  var charBucket = specCharSet.concat(uppercaseSet.concat(lowercaseSet.concat(numberSet)));
  console.log(charBucket);


  //Use a for loop to randomly pull a character from the array i times (where i = the specififed length) and add it to the password array
  // conver the password array to a string
  // set the string equal to the myGeneratedPassword character 
  //fix the spec characters array to include all of them, if possible.


  return myGeneratedPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
