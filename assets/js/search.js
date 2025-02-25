var dogCall = "https://api.petfinder.com/v2/animals?type=dog&limit=6";

var tokenCall = "https://api.petfinder.com/v2/oauth2/token";

var orgCall = "https://api.petfinder.com/v2/organizations";

var apiKey = "WY3pauZYdH3LtBAMrg6nUuprjR3ob4F4QkCualrLU8uNjQuiz2";

var apiSecret = "rUMx8wxwlkTMLB4TjZgjHsJdtK3v9Wo4P5t21lfc";

var dogsInfo = [];

// get token function

function getToken(url, breed, code) {
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
      return resp.json();
    })
    .then(function (data) {
      token = data.access_token;

      //pass token to dog search

      url =
        dogCall + "&breed=" + breed + "&location=" + code + "&distance=50";

      getDogs(url, token);
    });
}

//get organization name function

function getOrg(url, token, selector) {
  fetch(url, { headers: { Authorization: "Bearer " + token } })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      showOrg(selector, data.organization.name);
    });
}

// dog search function

function getDogs(url, token) {
  fetch(url, { headers: { Authorization: "Bearer " + token } })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      // get all info for dogs:

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
      smallPic_1 = data.animals[1].photos[0].small;
      smallPic_2 = data.animals[2].photos[0].small;
      smallPic_3 = data.animals[3].photos[0].small;
      smallPic_4 = data.animals[4].photos[0].small;

      largePic_0 = data.animals[0].photos[0].large;
      largePic_1 = data.animals[1].photos[0].large;
      largePic_2 = data.animals[2].photos[0].large;
      largePic_3 = data.animals[3].photos[0].large;
      largePic_4 = data.animals[4].photos[0].large;

      //Breed

      breed_0 = data.animals[0].breeds.primary;
      breed_1 = data.animals[1].breeds.primary;
      breed_2 = data.animals[2].breeds.primary;
      breed_3 = data.animals[3].breeds.primary;
      breed_4 = data.animals[4].breeds.primary;

      //description

      description_0 = data.animals[0].description;
      description_1 = data.animals[1].description;
      description_2 = data.animals[2].description;
      description_3 = data.animals[3].description;
      description_4 = data.animals[4].description;

      //petfinder info url

      url_0 = data.animals[0].url;
      url_1 = data.animals[1].url;
      url_2 = data.animals[2].url;
      url_3 = data.animals[3].url;
      url_4 = data.animals[4].url;

      codeAddress(stringAddress_0);
      codeAddress(stringAddress_1);
      codeAddress(stringAddress_2);
      codeAddress(stringAddress_3);
      codeAddress(stringAddress_4);

      dogsInfo = [
        [dogName_0, smallPic_0, breed_0, age_0, description_0, stringAddress_0, largePic_0, url_0],
        [dogName_1, smallPic_1, breed_1, age_1, description_1, stringAddress_0, largePic_1, url_1],
        [dogName_2, smallPic_2, breed_2, age_2, description_2, stringAddress_0, largePic_2, url_2],
        [dogName_3, smallPic_3, breed_3, age_3, description_3, stringAddress_0, largePic_3, url_3],
        [dogName_4, smallPic_3, breed_4, age_4, description_4, stringAddress_0, largePic_4, url_4],
      ];

      localStorage.setItem("dogs", JSON.stringify(dogsInfo));

      // call function to display dog info

      showDogsInfo();

      // save addresses for google maps

      saveAddress = [
        stringAddress_0,
        stringAddress_1,
        stringAddress_2,
        stringAddress_3,
        stringAddress_4,
      ];

      // get Org Name for five results

      getOrg(orgCall + "/" + data.animals[0].organization_id, token, ".org0");
      getOrg(orgCall + "/" + data.animals[1].organization_id, token, ".org1");
      getOrg(orgCall + "/" + data.animals[2].organization_id, token, ".org2");
      getOrg(orgCall + "/" + data.animals[3].organization_id, token, ".org3");
      getOrg(orgCall + "/" + data.animals[4].organization_id, token, ".org4");
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
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
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

// get params from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

breed = params.breed;

code = params.code;

getToken(tokenCall, breed, code);

// populate puppies results

function showDogsInfo() {
  $(".dog0").children().first().attr("src", dogsInfo[0][1]);
  $(".name0").text(dogsInfo[0][0]);
  $(".description0")
    .text(dogsInfo[0][4]);
  $(".age0").text("Age: " + dogsInfo[0][3]);
  $(".breed0").text("Breed: " + dogsInfo[0][2]);
  $(".link0").attr("href", dogsInfo[0][7]);

  $(".dog1").children().first().text(dogsInfo[1][0]);
  $(".dog1").children().first().next().attr("src", dogsInfo[1][1]);
  $(".dog1")
    .children("p")
    .first()
    .text("Breed: " + dogsInfo[1][2]);
  $(".dog1")
    .children("p")
    .first()
    .next()
    .text("Age: " + dogsInfo[1][3]);
  $(".dog1")
    .children("p")
    .last()
    .text("Org/Owner: " + dogsInfo[1][4]);

  $(".dog2").children().first().text(dogsInfo[2][0]);
  $(".dog2").children().first().next().attr("src", dogsInfo[2][1]);
  $(".dog2")
    .children("p")
    .first()
    .text("Breed: " + dogsInfo[2][2]);
  $(".dog2")
    .children("p")
    .first()
    .next()
    .text("Age: " + dogsInfo[2][3]);
  $(".dog2")
    .children("p")
    .last()
    .text("Org/Owner: " + dogsInfo[2][4]);

  $(".dog3").children().first().text(dogsInfo[3][0]);
  $(".dog3").children().first().next().attr("src", dogsInfo[3][1]);
  $(".dog3")
    .children("p")
    .first()
    .text("Breed: " + dogsInfo[3][2]);
  $(".dog3")
    .children("p")
    .first()
    .next()
    .text("Age: " + dogsInfo[3][3]);
  $(".dog3")
    .children("p")
    .last()
    .text("Org/Owner: " + dogsInfo[3][4]);

  $(".dog4").children().first().text(dogsInfo[4][0]);
  $(".dog4").children().first().next().attr("src", dogsInfo[4][1]);
  $(".dog4")
    .children("p")
    .first()
    .text("Breed: " + dogsInfo[4][2]);
  $(".dog4")
    .children("p")
    .first()
    .next()
    .text("Age: " + dogsInfo[4][3]);
  $(".dog4")
    .children("p")
    .last()
    .text("Org/Owner: " + dogsInfo[4][4]);

  // selectDogInfo ();
}

// populate names of organizations

function showOrg(selector, orgName) {
  $(selector).text(orgName);
}

// get selected dog

$("#link1").hover(function (event) {
  dogSelected = $(this).text();
  localStorage.setItem("dog", dogSelected);
});

$("#link2").hover(function (event) {
  dogSelected = $(this).text();
  localStorage.setItem("dog", dogSelected);
});

$("#link3").hover(function (event) {
  dogSelected = $(this).text();
  localStorage.setItem("dog", dogSelected);
});

$("#link4").hover(function (event) {
  dogSelected = $(this).text();
  localStorage.setItem("dog", dogSelected);
});
$("#link5").hover(function (event) {
  dogSelected = $(this).text();
  localStorage.setItem("dog", dogSelected);
});
