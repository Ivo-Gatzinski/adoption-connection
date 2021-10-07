var dogCall = "https://api.petfinder.com/v2/animals?type=dog&limit=5";

var tokenCall = "https://api.petfinder.com/v2/oauth2/token";

var orgCall = "https://api.petfinder.com/v2/organizations";

var apiKey = "WY3pauZYdH3LtBAMrg6nUuprjR3ob4F4QkCualrLU8uNjQuiz2";

var apiSecret = "rUMx8wxwlkTMLB4TjZgjHsJdtK3v9Wo4P5t21lfc";

// get token function

function getToken(url, breed, zipCode) {
  fetch(url, {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      apiKey +
      "&client_secret=" +
      apiSecret,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(function (resp) {
      // Return the response as JSON
      return resp.json();
    })
    .then(function (data) {
      token = data.access_token;

      //pass token to dog search

      getDogs(
        dogCall + "&breed=" + breed + "&location=" + zipCode + "&distance=50",
        token
      );
    });
}

//get organization name function

function getOrg(url, token) {
  fetch(url, { headers: { Authorization: "Bearer " + token } })
    .then(function (response) {
      console.log(response);

      return response.json();
    })
    .then(function (data) {
      orgName = data.organization.name;
    });
}

// dog search function

function getDogs(url, token) {
  fetch(url, { headers: { Authorization: "Bearer " + token } })
    .then(function (response) {
      console.log(response);

      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // do the following for each of the five results:

      //address

      address_0 = data.animals[0].contact.address;
      address1_0 = data.animals[0].contact.address.address1;
      address2_0 = data.animals[0].contact.address.address2;
      city_0 = data.animals[0].contact.address.city;
      state_0 = data.animals[0].contact.address.state;
      postcode_0 = data.animals[0].contact.address.postcode;
      stringAddress_0 =
        address1_0 + ", " + city_0 + ", " + state_0 + ", " + postcode_0;

      address_1 = data.animals[1].contact.address;
      address1_1 = data.animals[1].contact.address.address1;
      address2_1 = data.animals[1].contact.address.address2;
      city_1 = data.animals[1].contact.address.city;
      state_1 = data.animals[1].contact.address.state;
      postcode_1 = data.animals[1].contact.address.postcode;
      stringAddress_1 =
        address1_1 + ", " + city_1 + ", " + state_1 + ", " + postcode_1;

      address_2 = data.animals[2].contact.address;
      address1_2 = data.animals[2].contact.address.address1;
      address2_2 = data.animals[2].contact.address.address2;
      city_2 = data.animals[2].contact.address.city;
      state_2 = data.animals[2].contact.address.state;
      postcode_2 = data.animals[2].contact.address.postcode;
      stringAddress_2 =
        address1_2 + ", " + city_2 + ", " + state_2 + ", " + postcode_2;

      address_3 = data.animals[3].contact.address;
      address1_3 = data.animals[3].contact.address.address1;
      address2_3 = data.animals[3].contact.address.address2;
      city_3 = data.animals[3].contact.address.city;
      state_3 = data.animals[3].contact.address.state;
      postcode_3 = data.animals[3].contact.address.postcode;
      stringAddress_3 =
        address1_3 + ", " + city_3 + ", " + state_3 + ", " + postcode_3;

      address_4 = data.animals[4].contact.address;
      address1_4 = data.animals[4].contact.address.address1;
      address2_4 = data.animals[4].contact.address.address2;
      city_4 = data.animals[4].contact.address.city;
      state_4 = data.animals[4].contact.address.state;
      postcode_4 = data.animals[4].contact.address.postcode;
      stringAddress_4 =
        address1_4 + ", " + city_4 + ", " + state_4 + ", " + postcode_4;

      // Age

      age_0 = data.animals[0].age;
      age_1 = data.animals[1].age;
      age_2 = data.animals[2].age;
      age_3 = data.animals[3].age;
      age_4 = data.animals[4].age;

      // Name

      dogName_0 = data.animals[0].name;
      dogName_1 = data.animals[1].name;
      dogName_2 = data.animals[2].name;
      dogName_3 = data.animals[3].name;
      dogName_4 = data.animals[4].name;

      //Pic

      smallPic_0 = data.animals[0].photos[0].small;
      smallPic_1 = data.animals[1].photos[1].small;
      smallPic_2 = data.animals[2].photos[2].small;
      smallPic_3 = data.animals[3].photos[3].small;
      // WEIRD MYSTERY ERROR: smallPic_4 = data.animals[4].photos[4].small;

      //Breed

      breed_0 = data.animals[0].breeds.primary;
      breed_1 = data.animals[1].breeds.primary;
      breed_2 = data.animals[2].breeds.primary;
      breed_3 = data.animals[3].breeds.primary;
      breed_4 = data.animals[4].breeds.primary;

      // Org Name

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

      // save data in local storage

      saveData = [
        [dogName_0, smallPic_0, breed_0, age_0, orgName_0],
        [dogName_1, smallPic_1, breed_1, age_1, orgName_1],
        [dogName_2, smallPic_2, breed_2, age_2, orgName_2],
        [dogName_3, smallPic_3, breed_3, age_3, orgName_3],
        [dogName_4, smallPic_3, breed_4, age_4, orgName_4],
      ];
      localStorage.setItem("data", JSON.stringify(saveData));

      saveAddress = [
        stringAddress_0,
        stringAddress_1,
        stringAddress_2,
        stringAddress_3,
        stringAddress_4,
      ];
      localStorage.setItem("locations", JSON.stringify(saveAddress));
    });
}

// google api

var map;

function initMap() {
  var address = "931 Torrey Pines drive Paso Robles, Ca. 93346";
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 10,
    center: latlng,
  };
  map = new google.maps.Map(document.getElementById("#map"), mapOptions);
  codeAddress(address);
}
function codeAddress(puppyAddress) {
  geocoder.geocode({ address: puppyAddress }, function (results, status) {
    if (status == "OK") {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        title: "click to zoom",
        position: results[0].geometry.location,
      });
      marker.addListener("click", () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

// get parameters, get token, then submit parameters to get token and then search

$("#form").on("submit", function (event) {
  event.preventDefault();

  zipCode = $("#code").val();

  breed = $("#breed").val();

  getToken(tokenCall, breed, zipCode);

//switch pages

location.href = "./search.html";


});


// populate puppies results

// get the data back from local storage

getData = localStorage.getItem("data");
gotData = JSON.parse(getData);
console.log(gotData);

getAddresses = localStorage.getItem("locations");
gotAddresses = JSON.parse(getAddresses);
console.log(gotAddresses);


// dogName1 = 
// dogName2 = 
// dogName3 = 
// dogName4 = 

// $(".dog0").children().first().text(dogName0);
// $(".dog1");
// $(".dog2");
// $(".dog3");
// $(".dog4");

