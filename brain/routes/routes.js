module.exports = function(app, db) {
    // crud calls go here

    app.post('/survey', (req, res) => {
        console.log(req.body)
        res.send('Hello')
    });
};
