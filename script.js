// Access the form and relevant elements
const form = document.getElementById("entry-form");
const nameInput = document.getElementById("name");
const participantsList = document.getElementById("participants-list");
const drawButton = document.getElementById("draw-button");
const winnerDisplay = document.getElementById("winner-display");
const resetButton = document.getElementById("reset-button");

// Array to store participant names
let participants = [];

// Submit event listener for the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered name
  const name = nameInput.value;

  // Add the name to the participants array
  participants.push(name);

  // Display the name in the participants list
  participantsList.innerHTML += `<p>${name}</p>`;

  // Clear the input field
  nameInput.value = "";
});

// Click event listener for the draw button
drawButton.addEventListener("click", function () {
  // Check if there are participants
  if (participants.length > 0) {
    // Randomly select a winner
    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[winnerIndex];

    // Display the winner's name with emojis
    winnerDisplay.innerHTML = `<p>🎉 Winner: ${winner} 🍰</p>`;
  }
});

// Click event listener for the reset button
resetButton.addEventListener("click", function () {
  // Clear all elements and reset the state
  participants.length = 0;
  participantsList.innerHTML = "";
  winnerDisplay.innerHTML = "";
  nameInput.value = "";
});
