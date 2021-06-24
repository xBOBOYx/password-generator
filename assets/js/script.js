// Button confirmations
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numbers Array
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lowercase Array
alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase Array
alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Selections made during button
var choices;
//
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function (){
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Let's start generating that password!
function generatePassword() {
    // Number of characters?
    enter = +(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = +(prompt("You must choose between 8 and 128"));
    } else {
        // What other characteristics would you like for you password?
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    // You'll need to pick at least a one....Four false statements
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must construct additional pylons! Please choose a criteria!");

    }
    // 4 true statements
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alphaLower, alphaUpper);
    }
    // 3 true statements
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphaUpper);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alphaLower);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alphaLower, alphaUpper);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alphaLower, alphaUpper);
    }
    //  2 true statements
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alphaLower);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphaUpper);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alphaLower.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alphaLower.concat(alphaUpper);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphaUpper);
    }
    // 1 true statement
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alphaLower;
    }
    
    else if (confirmUppercase) {
        choices = alphaUpper;
    };

    // Password length placeholder
    var password = [];


    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // Converts the array to a string.....
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// Places in the text box show on screen
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}


// This wasnt required, but you gotta have a copy function. 
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}









