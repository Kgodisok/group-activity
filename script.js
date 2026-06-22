const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const subjectInput = document.getElementById("subject");
const cardName = document.getElementById("card");
const messageTag = document.getElementById("message");

function updateCard() {
    const name = nameInput.value;
    const age = ageInput.value;
    const subject = subjectInput.value;

    if (!name || !age || !subject) {
        messageTag.textContent = "Fill in the fields above to generate your card";
        cardName.className = "empty";
        return;
    }

    if (Number(age) < 18) {
        cardName.className = "young";
    } else {
        cardName.className = "adult";
    }

    messageTag.textContent =
        `${name}! You are ${age} years old. You love ${subject}!`;
}

nameInput.addEventListener("input", updateCard);
ageInput.addEventListener("input", updateCard);
subjectInput.addEventListener("input", updateCard);