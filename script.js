const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2024-09-16&checkout=2024-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c1ae17d63mshba739b36785d37dp151d28jsn9d121960e717',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};

async function getData(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.results);
     renderData(result.results);
} catch (error) {
	console.error(error);
}
}

function renderData(arrayOfHotels){
	arrayOfHotels.forEach((hotel) => {
		const cardsContainer = document.createElement("div")
		const title = document.createElement("h1");
		h1.innerText = hotel.name;
		document.getElementsByClassName("container").appendChild(cardsContainer);
        
	});
}

getData();