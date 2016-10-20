const assert = require('assert'); //nodes native test, but can also use chai
const fs = require('fs');

const fileStore = require('../lib/tvShows');

var myShows = [];

var show1 = {
  name: 'Flash',
  id: '1',
  hero: 'Barry Allen'
};

var show2 = {
  name: 'Arrow',
  id: '2',
  hero: 'Oliver Queen'
};

var show3 = {
  name: 'Shield',
  id: '3',
  hero: 'Lincoln Campbell'
};

myshows.push(show1, show2, show3);


describe('saves tv shows', () => {

  it('saves one tv shows and returns the id', (done) => {
    console.log('saves tv shows test is working');
    fileStore.saveData(show2, (err, data) => {
      if(err){
        console.log('err in saves tv show: ' + err);
      }
      //store / return id
      console.log('data.id: ' + data.id);
      done();
    });

  });
});

describe('retrieve tv shows', () => {

  it('retrieve data from file-store', (done) => {
    console.log('retrieving data test');
    fileStore.getFileContent(show2.id, (err, data) => {
      console.log('err in retrieve tv show: ' + err);
      done();
    });
  });
});

describe('get my shows', () => {

  it('gets all tv shows', (done) => {
    console.log(__dirname);
    fileStore.getDirectoryData(__dirname + '/../saveDirectory', (err, data) => {
      console.log('data: ' + data);
      assert.ok(!err);
      //deepEqual checks for ===. equal checks for ==
      assert.deepEqual(data, ['2.json']);
      done();
    });
    console.log('test is working');
  });
});
