// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let generatePassword = () => {
  let passwordLength=0;
  while(!(passwordLength>=8||passwordLength<=128)){
    passwordLength=prompt("How long do you want your password? (Pick a number in the range 8-128)");
  }
  
}