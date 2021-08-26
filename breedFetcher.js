const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function (error, response, body) {

    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(`We could not find any breed with that name`, null);
    } else {
      callback(error, data[0]['description']);
    }
  });

}


module.exports = { fetchBreedDescription }