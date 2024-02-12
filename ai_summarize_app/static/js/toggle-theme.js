// Function to toggle the theme mode
function toggleTheme() {
  const htmlElement = document.querySelector("html");
  const currentTheme = htmlElement.classList.contains("dark")
    ? "dark"
    : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Update the theme class on the HTML element
  htmlElement.classList.remove(currentTheme);
  htmlElement.classList.add(newTheme);

  // Update the theme preference in localStorage
  localStorage.theme = newTheme;
}

function initializeTheme() {
  const htmlElement = document.querySelector("html");
  const userPreference = localStorage.theme;
  const osPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  // If the user preference exists, apply it
  if (userPreference) {
    htmlElement.classList.add(userPreference);
  }
  // If the user preference doesn't exist, apply the OS preference
  else {
    htmlElement.classList.add(osPreference);
  }
}

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme()
});
