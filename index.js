let request = require('request');
const argv = require('yargs').argv;
var fs = require('fs');

var keys = JSON.parse(fs.readFileSync('keys.json', 'utf8'));
let apiKey = keys["apiKey"];
let city = argv.c || 'Minneapolis';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

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
