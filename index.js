let request = require('request');
const argv = require('yargs').argv;

let apiKey = 'ca644db53b8f9b76d1da242b49abd733'; // hide in future iteration
let city = argv.c || 'Minneapolis';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    // console.log('body:', body);
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
