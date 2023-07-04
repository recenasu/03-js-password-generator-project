// Assignment Code
var generateBtn = document.querySelector("#generate");
var myGeneratedPassword;
var numberOfCharacters;
var includeLowercase;
var includeUppercase;
var includeNumbers;
var includeSpecialchar;
// var specChar = ["\"\ \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~"];
// var usableSpecChar = specChar.split();
// var specialCharacters = [!,",#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,[,\,],^,_,`,{,|,},~];
// console.log(usableSpecChar);

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
  includeSpecialchar = window.confirm("Include special characters in password?"); 
  console.log("Include special characters? " + includeSpecialchar);
}
// console logs for debug












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
