const path = require("path");

module.exports = (app) => {
  // Serve the main HTML file for the root route
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
  });

  // Catch-all route for undefined endpoints
  app.get("*", (req, res) => {
    res.status(404).send("404: Page Not Found");
  });
};
