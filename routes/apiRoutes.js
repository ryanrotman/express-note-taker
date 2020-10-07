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
        let allNotes = [];
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid.v4(),
        }
        fs.readFile(__dirname + "/../db/db.json", (err, data) => {
            if (err) throw err;
            allNotes = JSON.parse(data);
            allNotes.push(newNote);
            fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(allNotes), "utf-8", (err) => {
                if (err) throw err;
                console.log("The note has been saved.")
                res.end();
            })
        })
        console.log(newNote)
        window.location.reload();
    })

    // API DELETE request

};