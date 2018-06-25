function showForm(e) {
  var form = document.querySelector('.search-hotel-popup-form');
  e.preventDefault();

  if (form.classList.contains('open')) {
    form.classList.remove('open')
  } else {
    form.classList.add('open')
  }
}

var btn = document.querySelector('.search-hotel .search-hotel-btn');
btn.addEventListener('click', showForm);
