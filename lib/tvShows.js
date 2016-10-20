const fs = require('fs');
const mkdirp = require('mkdirp');

//configurable directory
const saveDirectory = 'saveDirectory';
const path = './';


var fileStore = {};

fileStore.getDirectoryData = function(directory, cb){

  fs.readdir(directory, (err, files) => {
    if(err){
      console.log('error: ' + err);
      return cb(err);
    } else {
      cb(null, files);
    }
  });
};

// readdir - Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.

//retrieve an array of all resources in identifier (file name) order ('files' is the array because fs.readdir returns an array)
// module.exports = function
// doSomethingWithFiles(files){
//   files.forEach(){}
// }

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
