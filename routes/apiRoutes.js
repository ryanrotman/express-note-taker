// Dependencies
const fs = require("fs");

// Routing
module.exports = function (app) {
    // API GET request
    app.get("/api/notes", function (req, res) {
        res.json("../db/db.json");
    });

    // API POST request
    
}