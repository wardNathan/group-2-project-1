function getApod() {
    var requestUrl = 'https://api.nasa.gov/planetary/apod?api_key=Y8ssRfZuDgzbCeAiyKHGwmeED3ohkeyHHyZc2BrZ';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);     
      });
  }
  
  getApod()


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
  
  getAsteroids()

  function getExoplanet() {
    var requestUrl = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_prad<2 and koi_teq>180
    and koi_teq<303 and koi_disposition like 'CANDIDATE'';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);     
      });
  }
  
  getExoplanet()