
const randomNumber = Math.floor(Math.random() * 10) + 1; 
let attempts = 0;
const maxAttempts = 12;

document.getElementById('guessBtn').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value, 10);
    const messageDiv = document.getElementById('message');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        messageDiv.textContent = "Please enter a number between 1 and 10.";
        messageDiv.style.color = "orange";
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        messageDiv.textContent = "Guessed correctly!";
        messageDiv.style.color = "green";
        document.getElementById('guessBtn').disabled = true;
    } else if (attempts < maxAttempts) {
        if (userGuess < randomNumber) {
            messageDiv.textContent = "Too low! Try again.";
        } else {
            messageDiv.textContent = "Too high! Try again.";
        }
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = `Out of attempts! The number was ${randomNumber}.`;
        messageDiv.style.color = "gray";
        document.getElementById('guessBtn').disabled = true;
    }
});