const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass1")
let passTwo = document.getElementById("pass2")

function generatePass(){
    let randomCharOne = 0
    let randomCharTow = 0
    let passwordOne = ""
    let passwordTwo = ""
    for(let i = 0; i<16; i++){
        randomCharOne = Math.floor(Math.random()*characters.length)
        passwordOne +=  characters[randomCharOne]
        randomCharTwo = Math.floor(Math.random()*characters.length)
        passwordTwo +=  characters[randomCharTwo]
    }
    passOne.textContent = passwordOne
    passTwo.textContent = passwordTwo
}





