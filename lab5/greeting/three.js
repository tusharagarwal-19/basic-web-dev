// Function to display greeting based on the time
function displayGreeting() {
    // Get the current time
    const currentDate = new Date();
    const currentHour = currentDate.getHours(); // Get the hour (0-23)

    // Determine the appropriate greeting
    if (currentHour >= 6 && currentHour < 18) {
        alert("Good Morning!");
    } else {
        alert("Good Night!");
    }
}

// Call the function
displayGreeting();
