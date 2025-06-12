// Function to check the user's selected answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the selected radio button by name
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if the user made a selection
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare userAnswer to correctAnswer
        const feedback = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no option is selected, prompt user
        document.getElementById("feedback").textContent = "Please select an answer first.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
