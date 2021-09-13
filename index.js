const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateAmount() {
  message.style.display = "none";
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToReturned);
    } else {
      showMessage("Cash provided should be atlest equal to the bill amount.");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function calculateChange(amountToReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToReturned / availableNotes[i]);
    amountToReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

