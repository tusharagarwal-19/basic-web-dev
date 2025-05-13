// Function to calculate the total amount
function calculateTotalAmount() {
    // Take inputs from the user using prompts
    let principal = prompt("Enter the principal amount:");
    let rate = prompt("Enter the annual interest rate (in %):");
    let time = prompt("Enter the time period (in years):");

    // Confirm the inputs
    let confirmation = confirm(
        `You have entered the following details:\n\n` +
        `Principal Amount: ${principal}\n` +
        `Interest Rate: ${rate}%\n` +
        `Time Period: ${time} years\n\n` +
        `Click OK to confirm or Cancel to re-enter the details.`
    );

    // If confirmed, calculate and display the total amount
    if (confirmation) {
        // Convert inputs to numbers
        principal = parseFloat(principal);
        rate = parseFloat(rate);
        time = parseFloat(time);

        // Validate inputs
        if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
            alert("Please enter valid positive numbers for all inputs.");
        } else {
            // Calculate total amount (Simple Interest formula)
            let interest = (principal * rate * time) / 100;
            let totalAmount = principal + interest;

            // Display the result
            alert(
                `The total amount after ${time} years will be: ${totalAmount.toFixed(2)}`
            );
        }
    } else {
        // If not confirmed, allow re-entry
        alert("Please re-enter the details.");
    }
}

// Call the function
calculateTotalAmount();
