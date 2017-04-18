//CRUDL for Student data stored on MongoDB

let mongo = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;
const URL = `mongodb://127.0.0.1:27017/SchoolData`;

exports.read = function(id, callbackFunc) {
  mongo.connect(URL, function(err, db) {
    if (err) return callbackFunc(err, null);

    db.collection('students').findOne({_id: new ObjectID(id)}, function(err, result) {
      if (err) throw err;
      callbackFunc(err, result);
      db.close();
    });
  });      
}

exports.post = function(data, callbackFunc) {
  mongo.connect(URL, function(err, db) {
    if (err) return callbackFunc(err);
    
    db.collection('students')
      .insertOne(
        data,
        function(err, result) {
          callbackFunc(err, result.insertedId);
          db.close()
        }
      )
  }) 
}

exports.update = function(id, data, callbackFunc) {
  mongo.connect(URL, function(err, db) {
    if (err) return callbackFunc(err);
    
    db.collection('students')
      .updateOne(
        {_id: new ObjectID(id)},
        {$set: data},
        function(err, result) {
          console.log(result);
          callbackFunc(err, result)
          db.close()
        }
      )
  }) 
}

exports.delete = function(id, callbackFunc) {
  mongo.connect(URL, function(err, db) {
    if (err) return callbackFunc(err)
    
    db.collection('students')
    .deleteOne(
      {_id: new ObjectID(id)},
      function(err, result) {
        callbackFunc(err, result);
        db.close();
      }
    )
  })     
}

exports.list = function(callbackFunc) {
    mongo.connect(URL, function(err, db) {
    if (err) return callbackFunc(err, null);

    db.collection('students').find().toArray(function(err, result) {
      if (err) throw err;   
      callbackFunc(err, result);
      db.close();
    });
  }); 
}
