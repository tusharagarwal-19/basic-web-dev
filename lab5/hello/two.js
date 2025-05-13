// Function to display "Hello" n times
function displayHelloNTimes() {
    // Prompt the user to enter a number
    let n = prompt("Enter the number of times to display 'Hello':");

    // Convert the input to a number
    n = parseInt(n);

    // Check if the input is a valid positive number
    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid positive number.");
    } else {
        // Display "Hello" n times
        let message = "";
        for (let i = 1; i <= n; i++) {
            message += "Hello\n"; // Add "Hello" and a newline character
        }
        alert(message); // Display the message in an alert dialog box
    }
}

// Call the function
displayHelloNTimes();
