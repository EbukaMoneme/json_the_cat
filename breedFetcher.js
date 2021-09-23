const request = require('request');
let args = process.argv.slice(2);
let path = args[0];


request(`https://api.thecatapi.com/v1/breeds/search/?q=${path}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Error: Breed could not be found');
    return;
  }
  console.log(data[0].description);
  console.log(typeof data);

});