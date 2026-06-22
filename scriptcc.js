// Step 1: Grab all the input fields and the elements we want to update
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const subjectInput = document.getElementById("subject");
const cardName = document.getElementById("card");
const messageTag = document.getElementById("message");

// Step 2: This function runs every time the user types something
function updateCard() {
  // Get the current values from the input boxes
  const name = nameInput.value;
  const age = ageInput.value;
  const subject = subjectInput.value;

  // If any field is empty, show a placeholder message and stop here
  if (!name || !age || !subject) {

    cardName.className = "empty";
    return;
  }

  // Step 3: Decide the color class based on age
  if (Number(age) < 18) {
    cardName.className = "young"; // green text
  } else {
    cardName.className = "adult"; // blue text
  }

  // Step 4: Build the greeting message using a template literal
  cardName.textContent =
    `Hello ${name}! You are ${age} years old. You love ${subject}!`;
}

// Step 5: Listen for typing in each input box, and update the card live
nameInput.addEventListener("input", updateCard);
ageInput.addEventListener("input", updateCard);
subjectInput.addEventListener("input", updateCard);