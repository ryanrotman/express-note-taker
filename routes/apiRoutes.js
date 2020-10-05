// Dependencies
const fs = require("fs");

// Routing
module.exports = function (app) {
    // API GET request
    app.get("/api/notes", function (req, res) {
        res.json("../db/db.json");
    });

    // API POST request
    app.post("/api/notes", function (req, res) {
        const allNotes = [];
        const newNote = req.body;
        console.log("New note: " + newNote);
        allNotes.push(newNote);
        let id = 0;
        for (let i = 0; i < allNotes.length; i++) {
            allNotes[i].id = i + 1;
        };
        res.json(newNote);
    });
};