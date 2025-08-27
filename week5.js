// ---------
// Part 1: Variables & Conditionals
// -------
let userName = "Guest";
let userAge = 20;

if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.");
}

//-------
// Part 2: Custom Functions
//-------

// Function 1: Update welcome message
//This function updates the text inside the #output section.
//When called, it shows a custom greeting with the name given.
function updateWelcomeMessage(name) {
    const output = document.getElementById("output");
    output.innerHTML = "<p>Welcome, " + name + "! Glad you are here.</p>";
}

// Function 2: Generate a numbered list

function generateNumberList(limit) {
    const output = document.getElementById("output");
    output.innerHTML = ""; // clear old content

    const listContainer = document.createElement("ul");
    for (let i = 1; i <= limit; i++) {
        const li = document.createElement("li");
        li.textContent = "Number " + i;
        listContainer.appendChild(li);
    }
    output.appendChild(listContainer);
}

// -----------
// Part 3: Loops
// ------------

// Example 1: For loop
for (let i = 1; i <= 3; i++) {
    console.log("For loop count: " + i);
}

// Example 2: While loop
let counter = 0;
while (counter < 3) {
    console.log("While loop iteration: " + counter);
    counter++;
}

// ----------
// Part 4: DOM Interactions
// ----------------------------

// Interaction 1: Change page title text color on click
const title = document.querySelector("h1");
title.addEventListener("click", function() {
    title.style.color = "darkred";
});

// Interaction 2: Greeting button
document.getElementById("greetBtn").addEventListener("click", function() {
    updateWelcomeMessage("Visitor");
});

// Interaction 3: Number list button
document.getElementById("listBtn").addEventListener("click", function() {
    generateNumberList(5);
});