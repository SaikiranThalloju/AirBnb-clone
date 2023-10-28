let localStorageData = JSON.parse(localStorage.getItem("searchData"));
console.log(localStorageData);

async function getData() {
  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${localStorageData.searchedLocation}&checkin=${localStorageData.checkInDate}&checkout=${localStorageData.checkOutDate}&adults=${localStorageData.guests}&children=0&infants=0&pets=0&page=1&currency=USD`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": 'df39cfef6bmshe272af3edd236dap199ac4jsn679f2d94adf0',
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result.results);
    let data = result.results;
    console.log(data);

    let container = document.getElementById("container");
    container.innerHTML = ""; // Clear the container

    let cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    let cardHeader = document.createElement("div");
    cardHeader.innerText = "Hotels"; // Corrected "hotels" to "Hotels" for consistency

    data.forEach((e) => {
      let card = document.createElement("div");
      card.className = "card";

      let image = document.createElement("div");
      image.className = "hotel-Image";
      image.innerHTML = `<img class = "hotel-img" src="${e.images[0]}" class ="hotel-img" alt="Hotel Image">`; // Corrected image HTML

      let details = document.createElement("div");
      details.className = "details";

      let hotelName = document.createElement("div");
      hotelName.className = "hotel-name";
      hotelName.innerHTML = `<p>${e.name}</p>
                       <img src="vector (5).png" class="like" alt="img">`;

      let hotelDetails = document.createElement("div");
      hotelDetails.className = "hotel-details";
      hotelDetails.innerHTML = `<p>${e.persons} guests . ${e.type} . ${
        e.beds
      } beds . ${e.bathrooms} bath</p>
                          <p>${e.previewAmenities.join(" . ")}</p>`;

      let reviews = document.createElement("div");
      reviews.className = "reviews";
      reviews.innerHTML = `<div class = "rating"><p>${e.rating}</p>
                      <img class = "star" src="vector (4).png" alt="Star Icon">
                      <p>(${e.reviewsCount} reviews)</p></div>
                       <div class = "price"> $${e.price.rate}/night</div>`;

      
      // Appending child elements to their parent containers
      details.appendChild(hotelName);
      details.appendChild(hotelDetails);
      details.appendChild(reviews);

      card.appendChild(image);
      card.appendChild(details);
      cardContainer.appendChild(card);
    });

    container.appendChild(cardHeader);
    container.appendChild(cardContainer);

  } catch (error) {
    console.error(error);
  }
}

//  getData();
