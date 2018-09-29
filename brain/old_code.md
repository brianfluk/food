// const MongoClient    = require('mongodb').MongoClient;

// MongoClient.connect(url, (err, database) => {
//     if (err) return console.log(err)
                        
//     // Make sure you add the database name and not the collection name
//     db = database.db(dbName);

//     require('./app/routes')(app, db);
//     app.listen(port, () => {
//       console.log('We are live on ' + port);
//     });       
    
//     database.close();
//   })