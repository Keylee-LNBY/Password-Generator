//arrays for possible password characters -- using the .split to separate each charater
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var capsAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialCharacters = "/?~!@#$%^&*()_+-<>".split("");
var numbers = "1234567890".split("");


var passwordSpecifications = {
    confirmCapitalization: true,
    lengthSpecifications: 8,
    confirmSpecialCharacters: true,
    confirmNumbers: true
};

//Function to create and display the generated password
function generatePassword(wantsCaps, wantsSpecial, wantsNumbers, desiredLength) {
    var password = "";

    for (i = 0; i < desiredLength; i++) {
        var randomCaps = Math.floor(Math.random() * capsAlphabet.length);
        var randomLower = Math.floor(Math.random() * lowerAlphabet.length);
        var randomSpecial = Math.floor(Math.random() * specialCharacters.length);
        var randomNumber = Math.floor(Math.random() * numbers.length);
            console.log("get here: line 24 on scripts.js")

            if (wantsCaps) {
            password = password + capsAlphabet[randomCaps];
            wantsCaps = false;

            } else if (wantsSpecial) {
            password = password + specialCharacters[randomSpecial];
            wantsSpecial = false;

            } else if (wantsNumbers) {
            password = password + numbers[randomNumber];
            wantsNumbers = false;
            
            } else {
            password = password + lowerAlphabet[randomLower];
            };
        console.log("get here: line 40 on scripts.js")
        console.log(password);
    };
    //Displays password to box
    document.getElementById("passwordBox").value = password;
};

//Function to ask questions for password specification & verify that the length requirement is met
//Calls the generatePassword Function
function specifications() {
    var confirmCapitalization = confirm("Would you like your password to contain capital letters?");
    var confirmSpecialCharacters = confirm("Would you like your password to contain special characters?");
    var confirmNumbers = confirm("Would you like your password to contain numbers?");
    var lengthSpecifications = prompt("Please specific the prefered length of your password? Must be between 8 - 128 characters");

    //if all is good call the generatePassword function - else pop-up error
    if (lengthSpecifications >= 8 && lengthSpecifications <= 128) {
        lengthSpecifications = parseInt(lengthSpecifications);
        console.log("get here: line 55 on scripts.js");

        generatePassword(confirmCapitalization, confirmSpecialCharacters, confirmNumbers, lengthSpecifications);
   
    } else {
        alert("Your password length must be between 8 - 128 characters. Please enter a valid length for your password."); 
    };
};

//Function to copy the generated password
function clipboard() {
    var copyText = document.querySelector("#passwordBox");
    copyText.select();
    document.execCommand("copy");
    alert("Password has been copied.");
    console.log("get here: line 71 on script.js")
};


//On click functions 

//call specifications function if the Generate Button is clicked
document.getElementById("generate").addEventListener("click", function() {
    specifications();
});

//call clipboard function if Copy Button is clicked
document.getElementById("copy").addEventListener("click", clipboard);
