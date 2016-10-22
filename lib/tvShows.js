const fs = require('fs');
const mkdirp = require('mkdirp');

//configurable directory
const saveDirectory = 'saveDirectory';
const path = './';


var fileStore = {};

fileStore.getDirectoryData = function(directory, cb){

  fs.readdir(directory, (err, files) => {
    let returnedFilesArr = [];
    if(err){
      console.log('fileStore.getDirectoryData error: ' + err);
      return cb(err);
    } else {
      files.forEach((file, i) => {
        var fileID = file.split('.json')[0];
        fileStore.getFileContent(fileID, (err, result) => {
          if(err){
            cb(err);
          } else{
            returnedFilesArr[i] = result;
            if(returnedFilesArr.length === files.length){
              cb(null, returnedFilesArr);
            }
          }
        });
      });
    }
  });
};

fileStore.saveData = function(data, cb){
  var jsonData = JSON.stringify(data);

  mkdirp(path + saveDirectory, function(err) {
    // path exists unless there was an error
    if(err){
      console.log('fileStore.saveData err: ' + err);
    }
    fs.writeFile(path + saveDirectory + '/' + data.id + '.json', jsonData, (err) => {
      if(err) return cb(err);
      cb(null, data.id);
    });


  });
};

fileStore.getFileContent = function(filename, cb){
  fs.readFile(path + saveDirectory + '/' + filename + '.json', (err, result) => {
    if(err){
      console.log('fs.readFile err: ' + err);
    }
    let parsedData = JSON.parse(result);
    cb(null, parsedData);
  });
};

module.exports = fileStore;
