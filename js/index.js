var searchHotelButton = document.querySelector('.search-hotel .search-hotel-btn');
var searchHotelPopUpForm = document.querySelector('.search-hotel-popup-form');
searchHotelButton.addEventListener( "click" , function(e) {
  e.preventDefault();
  searchHotelPopUpForm.classList.toggle("open");
});
