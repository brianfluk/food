module.exports = function(app, db) {
    // crud calls go here

    app.post('/surveyname', (req, res) => {
        // console.log(req)
        console.log(req.body);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'name':'Personality Survey 3000'}));
    });
};
