const fs = require('fs');

module.exports = function getDirectoryData(directory, cb){


// readdir - Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
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
