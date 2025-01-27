const installButton = document.getElementById("buttonInstall");

// Show the install button when the PWA install prompt is available
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt event triggered");
  event.preventDefault();

  // Store the event for later use
  window.deferredPrompt = event;

  // Make the install button visible
  installButton.style.visibility = "visible";

  // Handle the install button click event
  installButton.addEventListener("click", async () => {
    console.log("Install button clicked");
    if (!window.deferredPrompt) {
      return;
    }

    // Show the install prompt
    window.deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await window.deferredPrompt.userChoice;
    console.log("User choice:", choiceResult);

    // Clear the deferred prompt variable
    window.deferredPrompt = null;

    // Update button state
    installButton.setAttribute("disabled", true);
    installButton.textContent = "Installed";
  });
});

// Handle the appinstalled event
window.addEventListener("appinstalled", () => {
  console.log("PWA installed successfully");
  // Clear the deferred prompt variable
  window.deferredPrompt = null;
});
