const studentData = require('./students.json');
let mongo = require('mongodb').MongoClient;

// Connection URL
const URL = `mongodb://127.0.0.1:27017/SchoolData`;

// Use connect method to connect to the Server
mongo.connect(URL, function(err, db) {
  if (err) console.log(err);
  console.log("Connected correctly to server");

  // Drop the contents of the collection
  if (db.collection('students').drop()) {
      console.log("Successfully dropped the students collection");
  } else {
      console.log("The students collection was not dropped because it did not exist, or there was an error");
  }

  // Insert sample student data
  db.collection('students').insertMany(studentData, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
