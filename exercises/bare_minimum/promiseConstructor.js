/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`

// var pluckFirstLineFromFileAsync =


var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise((resolve, reject) => {
    // do something asynchronous which eventually calls either:
    //
    //   resolve(someValue)        // fulfilled
    // or
    //   reject("failure reason")  // rejected
    fs.readFile(filePath, function(err, data) {
      if (err) {
        reject(err);
      } else {
        var line = data.toString().split('\n')[0];
        resolve(line);
      }
    });
  }).catch(function(e) {
    console.error(e.message);
  });




  // var promise = new Promise;
  // fs.readFile(filePath, promise.then(data => {
  //   var line = data.toString.split('\n')[0];
  //   return line;
  // }));

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
