// const request = require('request');

// let breed = process.argv.slice(2).toString();

// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
//   if (error) {
//     console.error(error);
//     return;
//   }

//   const data = JSON.parse(body);

//   if (data.length === 0) {
//     console.log("Breed not found");
//     return;
//   }
  
//   console.log(data[0].description);

// });

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  
    const data = JSON.parse(body);
    let errorMessage;
    let desc;

    if (error) {
      errorMessage = console.error(error);
    } else if (data.length === 0) {
      errorMessage = "Breed not found";
      desc = null;
    } else {
      desc = data[0].description;
    }

    callback(errorMessage, desc);

  });

};

module.exports = { fetchBreedDescription };