const assert = require('assert'); //nodes native test, but can also use chai
const fs = require('fs');

const getDirectoryData = require('../lib/tvShows');

describe('get my shows', () => {

  it('gets all tv shows', (done) => {
    console.log(__dirname);
    getDirectoryData('/' + __dirname + '/../lib/tvShowsData', (err, data) => {
      console.log('data: ' + data);
      assert.ok(!err);
      //deepEqual checks for ===. equal checks for ==
      assert.deepEqual(data, ['show1.json', 'show2.json', 'show3.json']);
      done();
    });
    console.log('test is working');
  });
});
