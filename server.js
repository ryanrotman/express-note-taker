// Dependencies
const express = require("express");

// Sets up the Express App
const app = express();

// Sets the port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
  console.log(`App is listening on PORT: ${PORT}`);
});