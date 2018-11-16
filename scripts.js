let countries;
let listOfCountries = document.getElementById("select");

countryContainer.addEventListener('change', function(event) {
  countryInfo(event.target.value);
});

// Get the Rest Countries API with fetch
fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json()) 
  .then(data => getData(data))
  .catch(error => alert("There was a problem with loading the page." + "\n" + error))


// Get a list with countries
function getData(countryData) {
  countries = countryData;
  let options = "";
  for (let i = 0; i < countries.length; i++) {
      options += `<option value="${countries[i].numericCode}">${countries[i].name}</option>`;
  }
  listOfCountries.innerHTML = options; // Prints out countries in select-element
  countryInfo("004");
}

function countryInfo(countryNumCode) {
    var dataOfCountry = countries.find(country => country.numericCode === countryNumCode);
      document.querySelector("#flagContainer img").src = dataOfCountry.flag;
      document.querySelector("#flagContainer img").alt = `Flag of ${dataOfCountry.name}`;
      document.querySelector("#flagContainer img").title = `Flag of ${dataOfCountry.name}`;
      document.getElementById("capital").innerHTML = dataOfCountry.capital;
      document.getElementById("region").innerHTML = dataOfCountry.region;
      document.getElementById("subregion").innerHTML = dataOfCountry.subregion;
      document.getElementById("population").innerHTML = dataOfCountry.population.toLocaleString("sv");
      document.getElementById("currencies").innerHTML = dataOfCountry.currencies.map(currency => (currency.name));
      document.getElementById("languages").innerHTML = dataOfCountry.languages.map(language => (language.name)).join(", ");
}
