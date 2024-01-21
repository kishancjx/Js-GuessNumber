let randomNumber = Math.floor(Math.random() * 101);
let submitButton = document.querySelector("#submitbutton");
let tries = 10;
let uEntered = document.querySelector(".youEntered");
let high_low = document.querySelector(".highAndLow")
const guessfield = document.getElementById('guessednumber');
let resetbutton;
guessfield.focus();

guessfield.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        checkguess();
    }
})

submitButton.addEventListener("click", checkguess);

function gamerOver() {
    guessfield.disabled = true;
    submitButton.disabled = true;

    resetbutton = document.createElement("button")
    resetbutton.textContent = 'RESTART GAME'
    document.body.append(resetbutton)
    resetbutton.addEventListener('click', resetGame)

}


function resetGame() {
    uEntered.textContent = '';
    high_low.textContent = '';

    guessfield.disabled = false;
    submitButton.disabled = false;
    tries = 10;
    resetbutton.parentNode.removeChild(resetbutton);
    randomNumber = Math.floor(Math.random() * 101);
    guessfield.focus();


}


function checkguess() {

    let userGuess = Number(document.querySelector("#guessednumber").value);

    uEntered.textContent = `You Entered ${userGuess}`;


    if (userGuess == randomNumber) {
        console.log("YOU WON");
        console.log(randomNumber)
        high_low.textContent = "Congratulations You Won";
        gamerOver();
    } else if (tries < 1) {
        console.log("You ran out of tries");
        console.log(randomNumber);
        gamerOver();
    } else {
        if (userGuess > randomNumber) {
            console.log("the number is lesser than you think");
            console.log(randomNumber)
            high_low.textContent = "The Number is Smaller than your Guess"
        } else if (userGuess < randomNumber) {

            console.log("The number is greather than you think");
            console.log(randomNumber)
            high_low.textContent = "The Number is Greater than your Guess"

        }
    }

    tries -= 1;


    guessfield.value = "";

}
