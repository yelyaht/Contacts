// Step 1: Set up the contacts array
const contacts = ["Arnold", "Sly", "Dwayne", "Vin", "JCVD", "Steven"];

// Step 2: Display the contact list
let listHTML = "<p><strong>Slot # &nbsp;&nbsp; Name</strong></p>";
for (let i = 0; i < contacts.length; i++) {
  listHTML += `<div class="slot-row">${i} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${contacts[i]}</div>`;
}
document.getElementById("contactList").innerHTML = listHTML;

// Step 3: Start interaction loop
let keepGoing = true;

while (keepGoing) {
  let slotInput = prompt("Enter the Slot Number of the contact you'd like to view (0–5):");

  // Convert input to number
  let slotNumber = parseInt(slotInput);

  // Check if slot number is valid
  if (slotNumber >= 0 && slotNumber < contacts.length) {
    alert("You selected " + contacts[slotNumber] + ".");
  } else {
    alert("That name is not found. Please try again.");
    continue; // Skip to the next loop
  }

  // Ask if they want to search again
  let again = prompt("Would you like to select another name? (yes or no)");
  if (again.toLowerCase() !== "yes") {
    keepGoing = false;
    alert("Thanks for using the Contact Selector!");
  }
}
