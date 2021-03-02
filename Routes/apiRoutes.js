const fs = require ('fs');
const notesData = require('../db/db.json')

module.exports = function (app) {
    let postNum = notesData.length;

    app.get("/api/notes", function(req, res){
    res.json(notesData);
});

app.post("/api/notes", function(req, res){
    let saveNote = req.body;
    let id = "" + postNum;
    saveNote.id = id;
    postNum = postNum + 1;
    notesData.push(saveNote);
    fs.writeFile('./db/db.json',JSON.stringify(notesData), () => {
        console.log("Write note successful.");});
    
    res.json(saveNote);
});

app.delete("/api/notes/:id", function (req, res) {
    let chosen = req.params.id;

    for (let i = 0; i < notesData.length; i++) {
        if (chosen === notesData[i].id) {
            notesData.splice(i,1);
            fs.writeFile('./db/db.json',JSON.stringify(notesData), () => {
                console.log("save successful.");});
            };
        };

res.json(notesData);
});
}
