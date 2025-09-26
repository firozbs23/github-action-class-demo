const express = require("express");
const app = express();
const port = 3000;

// REST endpoint
app.get("/hello", (req, res) => {
  res.json({ message: "Hello GitHub!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
