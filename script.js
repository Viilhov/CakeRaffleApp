// Array to store participant names
let participants = [];

// Function to add participant to the list
function addParticipant() {
  const nameInput = document.getElementById("participantName");
  const participantName = nameInput.value.trim();

  if (participantName !== "") {
    participants.push(participantName);
    nameInput.value = "";

    // Update the participants list
    displayParticipants();
  }
}

// Function to display participants in the list
function displayParticipants() {
  const participantsList = document.getElementById("participantsList");
  participantsList.innerHTML = ""; // Clear previous entries

  participants.forEach((participant) => {
    const listItem = document.createElement("li");
    listItem.textContent = participant;
    participantsList.appendChild(listItem);
  });
}

// Function to draw a random winner
function drawWinner() {
  const winnerDisplay = document.getElementById("winnerDisplay");

  if (participants.length > 0) {
    const randomIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[randomIndex];

    // Display the winner's name with a cake and party emoji
    winnerDisplay.innerHTML = `<p>The winner is: <strong>${winner}</strong> 🎂🎉</p>`;
  } else {
    winnerDisplay.innerHTML = `<p>No participants yet. Add some names first!</p>`;
  }
}
