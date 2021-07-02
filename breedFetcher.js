const request = require('request');

let breed = process.argv.slice(2).toString();

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("Breed not found");
    return;
  }
  
  console.log(data[0].description);

});