const fs = require('fs');
const mkdirp = require('mkdirp');

//configurable directory
const saveDirectory = 'saveDirectory';
const path = './';


var fileStore = {};

fileStore.getDirectoryData = function(directory, cb){
// readdir - Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.

//retrieve an array of all resources in identifier (file name) order ('files' is the array because fs.readdir returns an array)

  fs.readdir(directory, (err, files) => {
    //read files in the directory
    if(err){
      console.log('error: ' + err);
      return cb(err);
    } else {
      cb(err, files);
      // files.forEach((file) => {
      //   // console.log('file: ' + file);
      // });
    }
    return files;
  });
};

// module.exports = function
// doSomethingWithFiles(files){
//   files.forEach(){}
// }

fileStore.saveData = function(data, cb){
  var jsonData = JSON.stringify(data);

  mkdirp(path + saveDirectory, function(err) {
    // path exists unless there was an error
    console.log('mkdir err: ' + err);

  });

  fs.writeFile(path + saveDirectory + '/' + data.id + '.json', jsonData, (err) => {
    if(err) return cb(err);
    cb(null, data.id);
  });
};

fileStore.getFileContent = function(filename, cb){
  fs.readFile(path + saveDirectory + '/' + filename, (err, result) => {
    if(err){
      console.log('fs.readFile err: ' + err);
    }
    cb(result);
  });
};

module.exports = fileStore;


// fs.access(path + saveDirectory, fs.F_OK, () => {
//   if(!err){
//     fs.mkdir(path + saveDirectory, (err) => {})
//
//   } else {
//     console.log('no file exists');
//   }
//
// });



// fs.writeFile(fileToWrite, dataToWrite, (err) => {
//   if(err) return next(err);
//   next();
// });

// fs.mkdir(path + saveDirectory);
//
// var fs = require('fs');
// var dir = './tmp';
//
// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
// }
//
// fs.mkdir(path[, mode], callback)

// fs.stat(path, callback)
