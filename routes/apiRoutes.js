const { json } = require("express");
// Dependencies
const fs = require("fs");
const uuid = require("uuid");
const db = require("../db/db.json")

// Routing
module.exports = function (app) {
    // API GET request
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

    // API POST request
    app.post("/api/notes", function (req, res) {
        let allNotes = fs.readFile(__dirname + "/../db/db.json", (err, data) => {
            if (err) throw err;
            JSON.parse(data);
        });
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid.v4(),
        }
        console.log(newNote);
        allNotes.push(newNote);
        res.json(newNote);
        fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(allNotes), (err) => {
            if (err) throw err;
            console.log("The note has been saved.")
        })
    });
};