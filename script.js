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
  let password = "";
  
  // Prompt for password length
  let passwordLength=0;
  while(!(passwordLength>=8&&passwordLength<=128)){
    passwordLength=prompt("How long do you want your password? (Pick a number in the range 8-128)");
  }

  // Prompt for character types
  let lowercase = false;
  let uppercase = false;
  let numbers = false;
  let specialCharacters = false;
  while(!(lowercase||uppercase||numbers||specialCharacters)){
    lowercase         = confirm("Would you like lowercase letters in your password? OK for yes, Cancel for no");
    uppercase         = confirm("Would you like uppercase letters in your password? OK for yes, Cancel for no");
    numbers           = confirm("Would you like numbers in your password? OK for yes, Cancel for no");
    specialCharacters = confirm('Would you like special characters (e.g. "$", "!", "@", etc.) in your password? OK for yes, Cancel for no');
  
    if(!(lowercase||uppercase||numbers||specialCharacters)){
      alert("You need to select at least one of the 4 character types for your password!");
    }
  }

  // Place character types into an array for easy selection
  let charTypes = [];
  if(lowercase)         charTypes.push("lower");
  if(uppercase)         charTypes.push("upper");
  if(numbers)           charTypes.push("number");
  if(specialCharacters) charTypes.push("special");

  // For each character of the password, generate a random character
  for(let i=0; i<passwordLength; i++){
    let thisCharType = charTypes[Math.floor(Math.random()*charTypes.length)];

    switch(thisCharType) {
      case "lower":   password+=generateRandomLower();   break;
      case "upper":   password+=generateRandomUpper();   break;
      case "number":  password+=generateRandomNumber();  break;
      case "special": password+=generateRandomSpecial(); break;
      default: console.log("ERROR: Invalid Character Type!");
    }
  }

  return password;
}

// All of the character generators pick a random index from the character arrays/strings and return that character

let generateRandomLower = () => {
  const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  return lowerCharacters[Math.floor(Math.random()*26)];
}

let generateRandomUpper = () => {
  const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCharacters[Math.floor(Math.random()*26)];
}

let generateRandomNumber = () => {
  return Math.floor(Math.random()*10);
}

let generateRandomSpecial = () => {
  let specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
}