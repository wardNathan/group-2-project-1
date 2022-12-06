

function getApod() {
  var requestUrl = 'https://api.nasa.gov/planetary/apod?api_key=Y8ssRfZuDgzbCeAiyKHGwmeED3ohkeyHHyZc2BrZ';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);  
      
      document.getElementById("POD").innerHTML = "<img src = " + data['hdurl'] + ">";
      

    });
}

getApod()
console.log(getApod);

function getAsteroids() {
  var requestUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=Y8ssRfZuDgzbCeAiyKHGwmeED3ohkeyHHyZc2BrZ';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);     
    });
}


getAsteroids(getAsteroids)

  function getExoplanet() {
    var requestUrl = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=JSON';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);     
      });
  }

  getExoplanet()

  
console.log(getExoplanet);

getAsteroids(getAsteroids)

  function getPlanetSticker() {
    var requestUrl = 'https://api.giphy.com/v1/stickers/search?api_key=4whkYATvg44bONJ5xoAyLAWmQs973i0g&q=planets&limit=25&offset=0&rating=g&lang=en';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);     
      });
  }

  getPlanetSticker()

  
console.log(getPlanetSticker);