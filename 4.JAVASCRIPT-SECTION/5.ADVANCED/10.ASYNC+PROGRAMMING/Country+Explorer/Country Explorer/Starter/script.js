document.addEventListener("DOMContentLoaded", () => {
  const searchEl = document.getElementById("searchForm");
  const resultEl = document.getElementById("result");
  const apiUrl = "https://restcountries.com/v3.1/name/";

    // event listener

    searchEl.addEventListener('submit', (e) => {
        const country = document.getElementById('searchInput').value
        e.preventDefault()
        fetchCountry(country)
    })

  // fetch country data
  const fetchCountry = async (input) => {
    try {
      const res = await fetch(apiUrl + input);
      const country = await res.json();
      displayCountry(country);
    } catch (error) {
      console.log(error);
    }
  };
//  generate html for country
  const displayCountry = (countryArr) => {
    const country = countryArr[0];
    resultEl.classList.remove("hidden");
    resultEl.innerHTML = `
        <div class='country-card'>
         <img src = '${country.flags.png}'/>
         <div class='country-info'>
            <div class='info-item'>
                <h3>Country name</h3>
                <p> ${country.name.common}</p>
            </div>
            <div class='info-item'>
                <h3>Capital</h3>
                <p> ${country.capital}</p>
            </div> 
            <div class='info-item'>
                <h3>Population</h3>
                <p> ${country.population}</p>
            </div>
            <div class='info-item'>
                <h3>Region</h3>
                <p> ${country.region}</p>
            </div>
            <div class='info-item'>
                <h3>Currencies</h3>
                <p> ${Object.values(country.currencies).map((c) => `${c.name} (${c.symbol})` ).join(', ')}</p>
            </div>
            <div class='info-item'>
                <h3>Languages</h3>
                <p> ${Object.values(country.languages).join(',  ')}</p>
            </div>
         </div>
        </div>
        `;
  };


});
