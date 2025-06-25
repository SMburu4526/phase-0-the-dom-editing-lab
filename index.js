// Wait for the DOM to fully load before running any scripts
document.addEventListener("DOMContentLoaded", () => {
  // 1. Access the <h1> heading and change its color and text
  const heading = document.querySelector("h1");
  heading.style.color = "teal";
  heading.textContent += " 🚀";

  // 2. Add a border and padding to the <p> paragraph
  const paragraph = document.querySelector("p");
  paragraph.style.border = "2px dashed orange";
  paragraph.style.padding = "10px";

  // 3. Make the <a> HTML link open in a new tab
  const htmlLink = document.querySelector("a");
  htmlLink.setAttribute("target", "_blank");

  // 4. Log each table row's text content to the console
  const rows = document.querySelectorAll("table tbody tr");
  rows.forEach((row, index) => {
    console.log(`Row ${index + 1}:`, row.textContent.trim());
  });
});
