module.exports = function(app, db) {

    app.post('/surveyname', (req, res) => { // better as a GET ofc, but this route was for testing
        console.log(req.body);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'name':'Personality Survey 3000'}));
    });

    app.get('/surveyq', (req, res) => {
        let questions = require("../data/survey.json"); // mock data
        res.setHeader('Content-Type', 'application/json');
        res.send(questions);
    });

    // POST survey questions
    // PUT survey questions
    // DELETE survey questions

    app.get('/srstable', (req, res) => {
        // let srsTableData = require("../data/srsTableData.json")
        let srsTableData = [
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
            { make: 'Porsche', model: 'Boxter', price: 72000 }
        ];
        res.setHeader('Content-Type', 'application/json');
        res.send(srsTableData);
    })
};
