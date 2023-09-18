// Get all the counter elements
const counterElements = document.querySelectorAll(".counter");

// Function to update the counter value
function updateCounter(counterElement, targetValue) {
  let counterValue = 0;

  // Function to increment the counter value
  function incrementCounter() {
    counterElement.textContent = counterValue;

    if (counterValue < targetValue) {
      // Increment the counter value
      counterValue++;

      // Call the incrementCounter function again after a delay (e.g., 1000ms for 1 second)
      setTimeout(incrementCounter, 1000);
    }
  }

  // Call the incrementCounter function to start the counter
  incrementCounter();
}

// Loop through each counter element and start the counter
counterElements.forEach((counterElement) => {
  const targetValue = parseInt(counterElement.dataset.count);
  updateCounter(counterElement, targetValue);
});
