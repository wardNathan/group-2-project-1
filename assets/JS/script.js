
var timeDisplayEl = $('#time-display');

function getApod() {
  let requestUrl = 'https://api.nasa.gov/planetary/apod?api_key=Y8ssRfZuDgzbCeAiyKHGwmeED3ohkeyHHyZc2BrZ';

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
  let requestUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=Y8ssRfZuDgzbCeAiyKHGwmeED3ohkeyHHyZc2BrZ';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);    
      
     $('#distance').append("Distance: Lunar Miles: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['miss_distance']['lunar'] + " ");
     $('#distance').append("Miles: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['miss_distance']['miles']+ " ");
     $('#size').append("Size: Feet: " + data['near_earth_objects']['2015-09-08'][0]['estimated_diameter']['feet']['estimated_diameter_max']+ " ");
     $('#size').append("Miles: " + data['near_earth_objects']['2015-09-08'][0]['estimated_diameter']['miles']['estimated_diameter_max']+ " ");
     $('#hazardous').append("Potentially Fatal: " + data['near_earth_objects']['2015-09-08'][0]['is_potentially_hazardous_asteroid']+ " ");
     $('#name').append("Asteroid Name: " + data['near_earth_objects']['2015-09-08'][0]['name']+ " ");
     $('#velocity').append("Velocity: KM/S: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['relative_velocity']['kilometers_per_second']+ " ");
     $('#velocity').append("MPH: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['relative_velocity']['miles_per_hour']+ " ");
    });
}

getAsteroids(getAsteroids)


  function getPlanetSticker() {
    let requestUrl = 'https://api.giphy.com/v1/stickers/search?api_key=4whkYATvg44bONJ5xoAyLAWmQs973i0g&q=planets&limit=25&offset=0&rating=g&lang=en';
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


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY ');
  timeDisplayEl.text(rightNow);
}
displayTime()


let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();
let interval = setInterval(function() {
let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + " d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "BOOM";
  }
}, 1000);

const exoplanets = [
  {
    name: "Teegarden's Star b",
    star: "Teegarden's Star",
    dis: "12.5",
    temp: "82.4",
    notes: "Pack some sunscreen! Or would it be Teegarden's Star-screen?",
  },
  {
    name: "TOI 700 d",
    star: "TOI 700",
    dis: "101",
    temp: "24.2",
    notes: "101 Lightyears is quite the long journey, make sure you pack some teleportation snacks.",
  },
  {
    name: "Kepler-1649c",
    star: "Kepler-1649",
    dis: "301",
    temp: "-38",
    notes: "Hope you don't like the outdoors... Pack some puzzles and books.",
  },
  {
    name: "TRAPPIST-1d",
    star: "TRAPPIST-1",
    dis: "41",
    temp: "48.1",
    notes: "This exoplanet is confirmed to be rocky, pack some climbing gear to make the most of this exoplanet!",
  },
  {
    name: "LP 890-9 c",
    star: "LP 890-9",
    dis: "105",
    temp: "29",
    notes: "Make sure you pack a coat!",
  },
  {
    name: "Proxima Centauri b",
    star: "Proxima Centauri",
    dis: "4.25",
    temp: "-38",
    notes: "This exoplanet is affected by solar flares and has high radiation, hope you're fine with living in a lead box.",
  },
  {
    name: "K2-72e",
    star: "K2-72",
    dis: "217",
    temp: "10.4",
    notes: "Make sure you pack a coat!",
  },
  {
    name: "Gliese 1061 d",
    star: "Gliese 1061",
    dis: "12",
    temp: "-10",
    notes: "Better learn how to make a campfire, and bring some smores for roasting.",
  },
  {
    name: "Gliese 1061 c",
    star: "Gliese 1061",
    dis: "12",
    temp: "35",
    notes: "On the bright side... it's only almost freezing!",
  },
  {
    name: "Ross 128 b",
    star: "Ross 128",
    dis: "9.87",
    temp: "44",
    notes: "Bring a light jacket, it's going to be chilly.",
  }
];

function rand(exoplanets) {
  return exoplanets[~~(exoplanets.length * Math.random())];
}


console.log(exoplanets)
