// ===============================
// DOM Selection Methods Demo
// ===============================

// Select element by ID
const title = document.getElementById("title");

// Select first element matching a CSS selector
const description = document.querySelector(".description");

// Select all list items
const technologies = document.querySelectorAll(".tech-list li");

// Select the button
const button = document.getElementById("actionButton");


// ===============================
// Console Output
// ===============================

console.log("========== DOM EXPLORER ==========");

console.log("\nTitle:");
console.log(title.textContent);

console.log("\nDescription:");
console.log(description.textContent);

console.log("\nTechnologies:");

technologies.forEach((item, index) => {
    console.log(`${index + 1}. ${item.textContent}`);
});

console.log("\nButton Text:");
console.log(button.textContent);

console.log("\nAttributes:");

console.log("Heading ID:", title.id);
console.log("Paragraph Class:", description.className);
console.log("Button ID:", button.id);

console.log("\n========== END ==========");

button.addEventListener("click", () => {
    alert("DOM elements were successfully selected! Check the browser console to see the results.");
});