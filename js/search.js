var searchLink = document.querySelector(".search-hotel");
var searchForm = document.querySelector(".form-search");
var inputPeople = document.querySelector(".people-input");
var searchButton = document.querySelector(".search");
var inputDate = document.querySelector(".date-age");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("amount");
} catch (err) {
  isStorageSupport = false;
}

searchLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle("form-show");
  inputPeople.focus();
});

if (storage) {
  inputPeople.value = storage;
  inputDate.focus();
} else {
  inputPeople.focus();
}

searchButton.addEventListener("click", function(evt) {
  if (!inputPeople.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("amount", inputPeople.value);
    }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && searchForm.classList.contains("form-show")) {
    searchForm.classList.remove("form-show");
  }
});