/**
 * Password Generator
 * 
 * This script generates random passwords based on user-selected character types
 * and length. Users can select whether to include letters, numbers, and symbols.
 * The generated passwords can be copied to the clipboard with a single click.
 * @author BenjiRMZ
 * @version 1.0
 */
// Constants for character sets
const _letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
const _numbers = "0123456789".split("");
const _symbols = "~`!@#$%^&*()-_=+{}[]|:;<>.?/".split("");

// Default password length
let _passwordlength = 12;

// Elements for displaying generated passwords
let _fieldel1 = document.getElementById("field1");
let _fieldel2 = document.getElementById("field2");

/*
* Function to get selected character sets based on user input
* @return {Array} "characters" - An array of characters based on the selected checkboxes. 
*/
function getSelectedCharacters() {
    let characters = [];
    if (document.getElementById("includeLetters").checked) {
        characters = characters.concat(_letters);
    }
    if (document.getElementById("includeNumbers").checked) {
        characters = characters.concat(_numbers);
    }
    if (document.getElementById("includeSymbols").checked) {
        characters = characters.concat(_symbols);
    }
    return characters;
}

// Event listener for setting password length
document.addEventListener("DOMContentLoaded", function() 
{
    // Add event listeners to each length link
    document.getElementById("length1").addEventListener("click", function(event) 
    {
        event.preventDefault();
        setPasswordLength(1);
    });
    document.getElementById("length2").addEventListener("click", function(event) 
    {
        event.preventDefault();
        setPasswordLength(2);
    });
    document.getElementById("length3").addEventListener("click", function(event) 
    {
        event.preventDefault();
        setPasswordLength(3);
    });
    document.getElementById("length4").addEventListener("click", function(event) 
    {
        event.preventDefault();
        setPasswordLength(4);
    });
    document.getElementById("length5").addEventListener("click", function(event) 
    {
        event.preventDefault();
        setPasswordLength(5);
    });
    
});

/*
* Function to set password length based on user selection
* @param "length" - The desired length of the password.
*/
function setPasswordLength(length) 
{
    _passwordlength = length;
    console.log("Password length set to: " + _passwordlength);
}

/* 
* Function to generate a random character from the selected character set
* @param {Array} characters - The array of characters to choose from.
* @returns {string} A random character from the selected character set.
*/
function generateRandomCharacter(characters)
{
       let randomIndex = Math.floor(Math.random()* characters.length);
       return characters[randomIndex];
}

/*
* Function to generate passwords and display them in the result fields
* @return _field1 generated password1
* @return _field2 generated password2
*/
function generatePassword()
{
    let characters = getSelectedCharacters();
    if (characters.length === 0) {
        alert("Please select at least one character type.");
        return;
    }
    
    let password = "";
    let password2 = "";
    
   for(let i = 0; i < _passwordlength; i++)
   {
     password += generateRandomCharacter(characters);
     password2 += generateRandomCharacter(characters);
   }
      
      _fieldel1.textContent = password;
      _fieldel2.textContent = password2;

   return _fieldel1 && _fieldel2;
}

/*
* Function to copy password to clipboard
* @param {string} passwordText - The text of the password to be copied.
* @param {HTML-Element} copyButton - The button element that triggers the copy action.
*/
function copyPassword(passwordtext,copybutton)
{
      navigator.clipboard.writeText(passwordtext).then(function()
    {
        copybutton.textContent = "Copied!";
        setTimeout(() => button.textContent = text, 1000);
    },
    function(err)
    {
        console.error("Could not copy the following text: ", err);
    });
}

// Event listener for copying the generated password into your clipboard
_fieldel1.addEventListener("click", function()
{
    copyPassword(_fieldel1.textContent, _fieldel1)
});

_fieldel2.addEventListener("click", function()
{
    copyPassword(_fieldel2.textContent, _fieldel2)
});

