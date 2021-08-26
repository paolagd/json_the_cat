const request = require('request');

const fetchArguments = () => {
  return process.argv.splice(2);
}

const searchBreed = (URL, breed) => { 
  request(URL + breed, function (error, response, body) {
    if (error) {
      throw new Error(`Error: ${error}`)
    }
    const data = JSON.parse(body);

    if (data.length === 0) {
      throw new Error(`Error: we could not find the breed.`)
    } else { 
      console.log(data[0]['description'])
    }

  });
}

const args = fetchArguments();
searchBreed('https://api.thecatapi.com/v1/breeds/search?q=', args[0]);