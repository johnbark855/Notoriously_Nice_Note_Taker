const fs = require ('fs');
const data = require('../db/db.json')
module.exports = function(app) {
    let postNum = data.length;

    app.get("/api/notes", function(req, res){
    res.json(data);
});

app.post("/api/notes", function(req, res){
    let newNotes = req.body;
    let id = "" + postNum;
    newNotes.id = id;
    postNum = postNum + 1;
    data.push(newNotes);
    res.json(newNotes);
});

app.delete("/api/notes/:id", function (req, res) {
    
    let chosen = req.params.id;
    for (let i = 0; i < data.length; i++) {
        if (chosen === data[i].id) {
            data.splice(i,1);
        };
    };

res.json(data);
});
}
