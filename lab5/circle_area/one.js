// Function to calculate the area of a circle
function calculateCircleArea() {
    // Prompt the user to enter the radius
    let radius = prompt("Enter the radius of the circle:");

    // Convert the input to a number
    radius = parseFloat(radius);

    // Check if the input is a valid number
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
    } else {
        // Calculate the area of the circle
        let area = Math.PI * Math.pow(radius, 2);

        // Display the area in an alert dialog box
        alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
    }
}

// Call the function
calculateCircleArea();
