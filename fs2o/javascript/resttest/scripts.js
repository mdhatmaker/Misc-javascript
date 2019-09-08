// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.open('GET', 'https://api.binance.com/api/v1/time', true);
//request.setRequestHeader('Access-Control-Allow-Origin', '*');

request.onload = function () {
  // Begin accessing JSON data here
  //alert(this.response);
  var data = JSON.parse(this.response);
  console.log("BINANCE serverTime:" + data.serverTime);
  /*data.forEach(movie => {
    // Log each movie's title
    console.log(movie.title);
  });*/
}


// Send request
request.send();