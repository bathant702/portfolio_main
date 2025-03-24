// Light/Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  console.log("Click");
  document.body.classList.toggle("light-mode");
});
