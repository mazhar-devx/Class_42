// Get references to the HTML elements
const button = document.getElementById("clickMeButton") as HTMLButtonElement;
const message = document.getElementById("message") as HTMLParagraphElement;

// Function to handle button click
function handleButtonClick(): void {
  const now = new Date();
  message.textContent = `Now clicked button: ${now.toLocaleTimeString()}`;
}

// Add event listener to the button
button.addEventListener("click", handleButtonClick);
