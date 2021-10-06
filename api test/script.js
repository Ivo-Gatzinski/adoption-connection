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

      orgName = data.organization.name

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

        address = data.animals[0].contact.address;

        console.log(address);

        age = data.animals[0].age;

        console.log(age);

        dogName = data.animals[0].name;

        console.log(dogName);

        org_id = data.animals[0].organization_id;

        getOrg(orgCall + "/" + org_id, token);

      });
  }

// get token first

getToken(tokenCall);

