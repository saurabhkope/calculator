// Get all the buttons and the input field
const buttons = document.querySelectorAll(".btn");
const inputField = document.querySelector(".input");

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;
        switch (buttonText) {
            case "C":
                inputField.value = "";
                break;
            case "DEL":
                inputField.value = inputField.value.slice(0, -1);
                break;
            case "=":
                try {
                    inputField.value = eval(inputField.value);
                } catch (error) {
                    inputField.value = "Error";
                }
                break;
            default:
                inputField.value += buttonText;
                break;
        }
    });
});

// Function to add calculation to history
function addToHistory(calculation) {
    // Get the history element
    const history = document.querySelector('.history');
    // Create a new history item
    const historyItem = document.createElement('div');
    
    // Split the calculation into the equation and result
    const [equation, result] = calculation.split('=');
    
    // Format the history item text
    historyItem.innerText = `${equation} = ${result.trim()}`;
    
    // Append the history item to the history element
    history.appendChild(historyItem);
}

// Add event listener to the equals button
const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
    if (inputField.value !== "") {
        const result = eval(inputField.value);
        const calculation = `${inputField.value} = ${result}`;
        inputField.value = result;
        addToHistory(calculation);
    }
});

// Add event listener to the clear history button
const clearHistoryButton = document.getElementById("clearHistory");
clearHistoryButton.addEventListener("click", () => {
    const history = document.querySelector('.history');
    history.innerHTML = ""; // Clear the history by removing all inner elements
});
