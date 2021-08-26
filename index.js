const {fetchBreedDescription} = require('./breedFetcher');

const fetchArguments = () => {
  return process.argv[2];
}

const breedName = fetchArguments();
fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});
