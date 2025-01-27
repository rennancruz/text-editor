import { Workbox } from "workbox-window";
import TextEditor from "./editor";
import "./database";
import "../css/style.css";
import "../images/logo.png";

const main = document.querySelector("#main");
main.innerHTML = "";

// Function to load the spinner
const displaySpinner = () => {
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  `;
  main.appendChild(spinner);
};

// Initialize the text editor
const textEditorInstance = new TextEditor();

// Display spinner if the editor is not initialized
if (!textEditorInstance) {
  displaySpinner();
}

// Check if service workers are supported
if ("serviceWorker" in navigator) {
  const workboxSW = new Workbox("/src-sw.js");

  workboxSW
    .register()
    .then(() => {
      console.log("Service worker registered successfully.");
    })
    .catch((error) => {
      console.error("Service worker registration failed:", error);
    });
} else {
  console.error("Service workers are not supported in this browser.");
}
