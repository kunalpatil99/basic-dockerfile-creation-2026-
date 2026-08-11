const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello from Node.js + Docker!</h1>
    <p>Your application is running successfully inside a Docker container.</p>
  `);
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});


