document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript is loaded!");

  // Get the div element
  const mainDiv = document.querySelector("div");

  // Add a click event listener
  mainDiv.addEventListener("click", () => {
    mainDiv.textContent = "Hello from JavaScript!";
  });
});
