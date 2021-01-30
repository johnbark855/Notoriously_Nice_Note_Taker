const fs = require ('fs');
const data = require('../db/db.json')
module.exports = function(app) {
    let postNum = noteData.length;

    app.get("/api/notes", function(req, res){
    res.json(noteData);
});

app.post("/api/notes", function(req, res){
    let saveNotes = req.body;
    let id = "" + postNum;
    saveNotes.id = id;
    postNum = postNum + 1;
    noteData.push(saveNotes);
    fs.writeFile('./db/db.json',JSON.stringify(noteData), () => {
        console.log("Write note successful.");});
    
    res.json(saveNotes);
});

app.delete("/api/notes/:id", function (req, res) {
    let chosen = req.params.id;

    for (let i = 0; i < noteData.length; i++) {
        if (chosen === noteData[i].id) {
            data.splice(i,1);
            fs.writeFile('./db/db.json',JSON.stringify(noteData), () => {
                console.log("save successful.");});
            };
        };

res.json(data);
});
}
