// Create the contacts array
const contacts = ["Arnold", "Sly", "Dwayne", "Vin", "JCVD", "Steven"];

// Build the table
let table = document.getElementById("contactTable");

// Add table headers
let headerRow = table.insertRow();
let cell1 = headerRow.insertCell();
let cell2 = headerRow.insertCell();
cell1.innerHTML = "<strong>Slot #</strong>";
cell2.innerHTML = "<strong>Number</strong>";

// Add one row per contact
for (let i = 0; i < contacts.length; i++) {
  let row = table.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  cell1.textContent = i;
  cell2.textContent = contacts[i];
}

// Prompt the user
let keepGoing = true;

while (keepGoing) {
  let input = prompt("Enter the Slot Number of the contact you'd like to view (0–5):");
  let slot = parseInt(input);

  if (slot >= 0 && slot < contacts.length) {
    alert("You selected " + contacts[slot] + ".");
  } else {
    alert("That name is not found. Please try again.");
    continue;
  }

  let again = prompt("Would you like to select another name? (yes or no)");
  if (again.toLowerCase() !== "yes") {
    keepGoing = false;
    alert("Thanks for using the Contact Selector!");
  }
}
