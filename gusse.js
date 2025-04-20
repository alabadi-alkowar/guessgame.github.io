const form = document.getElementById("myform");
const output = document.getElementById("output");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

// Add event listener to handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    // Get the number input from the user
    let guess = Number(document.getElementById("number").value);

    // Validate input
    if (isNaN(guess)) {
        output.textContent = "❌ Please enter a valid number!";
    } else if (guess < minNum) {
        output.textContent = "⚠️ Please enter a number higher than or equal to 1!";
    } else if (guess > maxNum) {
        output.textContent = "⚠️ Please enter a number lower than or equal to 100!";
    } else {
        attempts++;

        if (guess < answer) {
            output.textContent = "⬆️ Too LOW, try again!";
        } else if (guess > answer) {
            output.textContent = "⬇️ Too HIGH, try again!";
        } else {
            output.textContent = `🎉 Congrats! The answer is ${answer}. You took ${attempts} attempts!`;
            form.querySelector("button").disabled = true; // Disable button after correct guess
        }
    }

    // Clear input field after submission
    document.getElementById("number").value = "";
});
