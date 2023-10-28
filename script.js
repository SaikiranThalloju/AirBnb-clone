
let searchButton = document.querySelector("#search-btn");
console.log(searchButton);
searchButton.addEventListener("click",searchLocation);

function searchLocation(){
	// event.stopPropagation();

let searchedlocation = document.getElementById("searchlocation").value;
let checkIn = document.getElementById("checkInDate").value;
let checkOut = document.getElementById("checkOutDate").value;
let guest = document.getElementById("guests").value;

const data = {
	searchedLocation : searchedlocation,
	checkInDate : checkIn,
	checkOutDate:checkOut,
	guests : guest
};

localStorage.setItem("searchData" ,JSON.stringify(data));
window.location.href = 'index2.html';

}
