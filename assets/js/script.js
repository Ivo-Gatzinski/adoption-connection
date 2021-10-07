var dogCall = "https://api.petfinder.com/v2/animals?type=dog&limit=5";

var tokenCall = "https://api.petfinder.com/v2/oauth2/token";

var orgCall = "https://api.petfinder.com/v2/organizations";

var apiKey = "WY3pauZYdH3LtBAMrg6nUuprjR3ob4F4QkCualrLU8uNjQuiz2";

var apiSecret = "rUMx8wxwlkTMLB4TjZgjHsJdtK3v9Wo4P5t21lfc";

var zipCode = $("#code");

var breed = $("#breed");

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
        address1_0 = data.animals[0].contact.address.address1;
        address2_0 = data.animals[0].contact.address.address2;
        city_0 = data.animals[0].contact.address.city;
        state_0 = data.animals[0].contact.address.state;
        postcode_0 = data.animals[0].contact.address.postcode;
        stringAddress_0 = address1_0 + ", " + city_0 + ", " + state_0 + ", " + postcode_0;
        console.log(stringAddress_0);

        address_1 = data.animals[1].contact.address;
        address1_1 = data.animals[1].contact.address.address1;
        address2_1 = data.animals[1].contact.address.address2;
        city_1 = data.animals[1].contact.address.city;
        state_1 = data.animals[1].contact.address.state;
        postcode_1 = data.animals[1].contact.address.postcode;
        stringAddress_1 = address1_1 + ", " + city_1 + ", " + state_1 + ", " + postcode_1;
        console.log(stringAddress_1);

        address_2 = data.animals[2].contact.address;
        address1_2 = data.animals[2].contact.address.address1;
        address2_2 = data.animals[2].contact.address.address2;
        city_2 = data.animals[2].contact.address.city;
        state_2 = data.animals[2].contact.address.state;
        postcode_2 = data.animals[2].contact.address.postcode;
        stringAddress_2 = address1_2 + ", " + city_2 + ", " + state_2 + ", " + postcode_2;
        console.log(stringAddress_2);

        address_3 = data.animals[3].contact.address;
        address1_3 = data.animals[3].contact.address.address1;
        address2_3 = data.animals[3].contact.address.address2;
        city_3 = data.animals[3].contact.address.city;
        state_3 = data.animals[3].contact.address.state;
        postcode_3 = data.animals[3].contact.address.postcode;
        stringAddress_3 = address1_3 + ", " + city_3 + ", " + state_3 + ", " + postcode_3;
        console.log(stringAddress_3);

        address_4 = data.animals[4].contact.address;
        address1_4 = data.animals[4].contact.address.address1;
        address2_4 = data.animals[4].contact.address.address2;
        city_4 = data.animals[4].contact.address.city;
        state_4 = data.animals[4].contact.address.state;
        postcode_4 = data.animals[4].contact.address.postcode;
        stringAddress_4 = address1_4 + ", " + city_4 + ", " + state_4 + ", " + postcode_4;
        console.log(stringAddress_4);
      

        age_0 = data.animals[0].age;
        age_1 = data.animals[1].age;
        age_2 = data.animals[2].age;
        age_3 = data.animals[3].age;
        age_4 = data.animals[4].age;

        dogName_0 = data.animals[0].name;
        dogName_1 = data.animals[1].name;
        dogName_2 = data.animals[2].name;
        dogName_3 = data.animals[3].name;
        dogName_4 = data.animals[4].name;

        smallPic_0 = data.animals[0].photos[0].small;
        smallPic_1 = data.animals[1].photos[1].small;
        smallPic_2 = data.animals[2].photos[2].small;
        smallPic_3 = data.animals[3].photos[3].small;
        // smallPic_4 = data.animals[4].photos[4].small;

        org_id_0 = data.animals[0].organization_id;
        org_id_1 = data.animals[1].organization_id;
        org_id_2 = data.animals[2].organization_id;
        org_id_3 = data.animals[3].organization_id;
        org_id_4 = data.animals[4].organization_id;

       orgName_0 = getOrg(orgCall + "/" + org_id_0, token);
       orgName_1 = getOrg(orgCall + "/" + org_id_1, token);
       orgName_2 = getOrg(orgCall + "/" + org_id_2, token);
       orgName_3 = getOrg(orgCall + "/" + org_id_3, token);
       orgName_4 = getOrg(orgCall + "/" + org_id_4, token);

        codeAddress(stringAddress_0);
        codeAddress(stringAddress_1);
        codeAddress(stringAddress_2);
        codeAddress(stringAddress_3);
        codeAddress(stringAddress_4);

      });
  }


// google api

var map;

  function initMap() {
    var address = "931 Torrey Pines drive Paso Robles, Ca. 93346"
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 10,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    codeAddress(address);
}
  function codeAddress(puppyAddress) {
    geocoder.geocode( { 'address': puppyAddress}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            title: "click to zoom",
            position: results[0].geometry.location
        });
        marker.addListener("click", () => {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
      });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

// get token first

$(".pure-button").on(getToken(tokenCall));


  

  




