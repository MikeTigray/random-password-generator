//-----Variables for data types---------

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCase = upperCase.map((upperCase) => upperCase.toLowerCase());

var specialCharacter = [
  "+",
  "-",
  "&&",
  "||",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  " ?",
  ":",
];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let combined = [];

// Assignment Code
var generateBtn = document.querySelector("#generate"); // variable that links button to functionality

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//-------Our main function--------

function generatePassword() {
  var passwordLength = prompt("How many characters do you want?");
  //---User is prompted to enter desired password length under below criteria
  if (passwordLength > 128) {
    alert("Password should not contain more than 128 characters!");
  } else if (passwordLength < 8) {
    alert("Password must contain at least 8 characters!");
  } else if (isNaN(passwordLength)) {
    alert("Enter only numeric value!");
  } else if (
    passwordLength >= 8 &&
    passwordLength <= 128 &&
    !isNaN(passwordLength)
  ) {
    //---Then user is asked to confirm whether they want special, lowercase, uppercase, or numeric characters in their password
    var wantSpecial = confirm("Click OK to include special characters");
    if (wantSpecial) {
      combined.push(...specialCharacter); // When true: special characters are pushed into new array of combined values
    }
    var wantNumber = confirm("Click OK to include numeric value?"); // When true: numeric characters are pushed into new array of combined values
    if (wantNumber) {
      combined.push(...number);
    }
    var wantUpper = confirm("Click OK to include Upper Case value"); // When true: Uppercase characters are pushed into new array of combined values
    if (wantUpper) {
      combined.push(...upperCase);
    }
    var wantLower = confirm("Click OK to include Lower Case value"); // When true: Lowercase characters are pushed into new array of combined values
    if (wantLower) {
      combined.push(...lowerCase);
    }
    //---- User must select at least one character type----
    if (
      wantLower === false &&
      wantUpper === false &&
      (wantSpecial === false) & (wantNumber === false)
    ) {
      alert("You must select at least one character type!");
    } else {
      //---Password is generated---

      var newPassword = [];
      for (i = 0; i <= passwordLength; i++) {
        var randomElement =
          combined[Math.floor(Math.random() * combined.length)];
        newPassword.push(randomElement);
      }
      console.log(newPassword);
      var T = newPassword.join("");
      return T;
    }
  }
}
