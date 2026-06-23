
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const subjectInput = document.getElementById("subject");
const cardName = document.getElementById("card");


function updateCard() {
  const name = nameInput.value;
  const age = ageInput.value;
  const subject = subjectInput.value;

  // If any field is empty, show placeholder and stop
  if (!name || !age || !subject) {
    cardName.className = "empty";
    cardName.textContent = "Fill in the fields above to generate your card ↑";
    return;
  }

  const ageNum = Number(age);

  // Age-based styling
  if (ageNum < 18) {
    cardName.className = "young";
  } else {
    cardName.className = "adult";
  }

  // Update card text
  cardName.textContent =
    `Hello ${name}! You are ${ageNum} years old. You love ${subject}!`;
}

nameInput.addEventListener("input", updateCard);
ageInput.addEventListener("input", updateCard);
subjectInput.addEventListener("input", updateCard);