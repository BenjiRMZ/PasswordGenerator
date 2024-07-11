const _characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let _passwordlength = 12;
let _fieldel1 = document.getElementById("field1");
let _fieldel2 = document.getElementById("field2");

function generateRandomCharacter()
{
       let randomIndex = Math.floor(Math.random()* _characters.length);
       return _characters[randomIndex];
}
function generatePassword()
{
    let password = "";
    let password2 = "";
   for(let i = 0; i < _passwordlength; i++)
   {
     password += generateRandomCharacter();
     password2 += generateRandomCharacter();
   }
      
      _fieldel1.textContent = password;
      _fieldel2.textContent = password2;

   return _fieldel1 && _fieldel2;
}

function copyPassword(passwordtext,copybutton)
{
      navigator.clipboard.writeText(passwordtext).then(function()
    {
        copybutton.textContent = "Copied!";
        setTimeout(() => copybutton.textContent = text, 1000);
    },
    function(err)
    {
        console.error("Could not copy the following text: ", err);
    });
}

_fieldel1.addEventListener("click", function()
{
    copyPassword(_fieldel1.textContent, _fieldel1)
});

_fieldel2.addEventListener("click", function()
{
    copyPassword(_fieldel2.textContent, _fieldel2)
});