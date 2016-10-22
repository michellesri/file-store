const assert = require('assert'); //nodes native test, but can also use chai

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

myShows.push(show1, show2, show3);


describe('saves tv shows', () => {

  it('saves one tv show and returns the id', (done) => {
    fileStore.saveData(show3, (err, dataID) => {
      assert.ok(!err);
      //store / return id
      assert.equal(dataID, 3);
      done();
    });

  });
});

describe('retrieve tv shows', () => {

  it('retrieves data from file-store', (done) => {
    fileStore.getFileContent(show3.id, (err, data) => {
      assert.ok(!err);
      // equal is for primitive. deepEqual is for objects
      assert.deepEqual(data, show3);
      done();
    });
  });
});

describe('get my shows', () => {

  it('gets all of the objects back from the data store', (done) => {
    fileStore.getDirectoryData(__dirname + '/../saveDirectory', (err, data) => {
      assert.ok(!err);
      //deepEqual checks for ===. equal checks for ==
      //equal is for primitive data.
      //deepEqual is for Objects and arrays
      assert.deepEqual(data, myShows);
      done();
    });
  });
});
