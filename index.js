//const _characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
//"/"];

const _letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
const _numbers = "0123456789".split("");
const _symbols = "~`!@#$%^&*()-_=+{}[]|:;<>.?/".split("");

let _passwordlength = 12;
let _fieldel1 = document.getElementById("field1");
let _fieldel2 = document.getElementById("field2");

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

function setPasswordLength(length) 
{
    _passwordlength = length;
    console.log("Password length set to: " + _passwordlength);
}


function generateRandomCharacter(characters)
{
       let randomIndex = Math.floor(Math.random()* characters.length);
       return characters[randomIndex];
}

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

