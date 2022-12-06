

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
      
     $('#distance').append("Distance: Lunar Miles: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['miss_distance']['lunar']);
     $('#distance').append("Miles: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['miss_distance']['miles']);
     $('#size').append("Size: Feet: " + data['near_earth_objects']['2015-09-08'][0]['estimated_diameter']['feet']['estimated_diameter_max']);
     $('#size').append("Miles: " + data['near_earth_objects']['2015-09-08'][0]['estimated_diameter']['miles']['estimated_diameter_max']);
     $('#hazardous').append("Potentially Fatal: " + data['near_earth_objects']['2015-09-08'][0]['is_potentially_hazardous_asteroid']);
     $('#name').append("Asteroid Name: " + data['near_earth_objects']['2015-09-08'][0]['name']);
     $('#velocity').append("Velocity: KM/S: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['relative_velocity']['kilometers_per_second']);
     $('#velocity').append("MPH: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['relative_velocity']['miles_per_hour']);
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



  function getPlanetSticker() {
    var requestUrl = 'https://api.giphy.com/v1/stickers/search?api_key=4whkYATvg44bONJ5xoAyLAWmQs973i0g&q=planets&limit=25&offset=0&rating=g&lang=en';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let randNum = Math.floor(Math.random() * 24) + 1;
        document.getElementById("ticket").innerHTML = "<img src = " + data['data'][randNum]['images']['downsized']['url'] + ">";
      });
  }

  getPlanetSticker()

  
console.log(getPlanetSticker);