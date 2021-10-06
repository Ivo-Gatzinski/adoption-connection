var dogCall = "https://api.petfinder.com/v2/animals?type=dog&limit=5";

var tokenCall = "https://api.petfinder.com/v2/oauth2/token";

var orgCall = "https://api.petfinder.com/v2/organizations";

var apiKey = "WY3pauZYdH3LtBAMrg6nUuprjR3ob4F4QkCualrLU8uNjQuiz2";

var apiSecret = "rUMx8wxwlkTMLB4TjZgjHsJdtK3v9Wo4P5t21lfc";

var zipCode = "10017";

var breed = "Maltese";

var responseText = document.getElementById('response-text');

// get token function

function getToken (url) {

fetch(url, {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + apiKey + '&client_secret=' + apiSecret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (resp) {

	// Return the response as JSON
	return resp.json();

}).then(function (data) {

  token = data.access_token;

  //pass token to dog search

  getDogs(dogCall + "&breed=" + breed + "&location=" + zipCode + "&distance=50", token);


});

}

//get organization name function

function getOrg(url, token) {
  fetch(url, { headers: {"Authorization": "Bearer " + token
  }
}
)
    .then(function (response) {
      console.log(response);
      // display the status

      responseText.textContent = response.status;
      // check the response status for success
      if (response.status === 200) {
        responseText.style.color = 'green';
      } else {
        responseText.style.color = 'red';
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      orgName = data.organization.name;

      console.log(orgName);

    });
}

// dog search function

function getDogs(url, token) {
    fetch(url, { headers: {"Authorization": "Bearer " + token
    }
  }
  )
      .then(function (response) {
        console.log(response);
        // display the status
  
        responseText.textContent = response.status;
        // check the response status for success
        if (response.status === 200) {
          responseText.style.color = 'green';
        } else {
          responseText.style.color = 'red';
        }
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        // do the following for each of the five results:

        address_0 = data.animals[0].contact.address;

        console.log(address_0);

        address1 = data.animals[0].contact.address.address1;

        console.log(address1);

        address2 = data.animals[0].contact.address.address2;

        console.log(address2);

        city = data.animals[0].contact.address.city;

        console.log(city);

        country = data.animals[0].contact.address.country;

        console.log(country);

        postcode = data.animals[0].contact.address.postcode;

        console.log(postcode);

        state = data.animals[0].contact.address.state;

        console.log(state);

        stringAddress = address1 + ", " + city + ", " + state + ", " + postcode;

        console.log(stringAddress);

        age = data.animals[0].age;

        console.log(age);

        dogName = data.animals[0].name;

        console.log(dogName);

        smallPic = data.animals[0].photos[0].small;

        console.log(smallPic);

        org_id = data.animals[0].organization_id;

        getOrg(orgCall + "/" + org_id, token);


      });
  }

// get token first

getToken(tokenCall);

// google api

const geocoder = new google.maps.geocoder(stringAddress);

geocoder.geocode ({address: stringAddress } ,
  (results, status) =>{
    if (status === "ok") {
      var latitude = results[0].geometry.location.lat();
      var longitude = results [0].geometry.location.lng();
    initialize(latitude, longitude);
  }
});


function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 32.8800604, lng: -117.2340135 },
  });

  marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 32.8800604, lng: -117.2340135  },
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}




