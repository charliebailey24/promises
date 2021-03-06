/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // read the file at filePath
  fs.readFile(filePath, function (err, data) {
    if (err) {
      callback(err);
    } else {
      var line = data.toString().split('\n')[0];
      callback(null, line);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // make a get request to the passed in url
  // callback the request status
  request.get(url, function(err, response) {
    if (err) {
      console.log('err:::', err);
      callback(err);
    } else {
      console.log('response.statusCode:::', response.statusCode);
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
