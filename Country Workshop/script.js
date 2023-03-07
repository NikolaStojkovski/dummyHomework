const searchInput = document.querySelector(".name-input");
const searchBtn = document.querySelector(".search-btn");
const mainEl = document.querySelector(".main");
const fetchUrl = async (search) => {
  try {
    const res = await fetch(`https://restcountries.com/v2/name/${search}`);
    const data = await res.json();
    renderData(data);
    console.log(data);
    return data;
  } catch (error) {
    mainEl.innerHTML = `<h1 class="error-msg">Country Not Found<h1>`;
  }
};
searchBtn.addEventListener("click", () => {
  const searchName = searchInput.value;
  fetchUrl(searchName);
  searchInput.value = "";
});
const renderData = (data) => {
  mainEl.innerHTML = data
    .map((country) => {
      return `<div class="country-container">
  <img src="${country.flags.png}" alt="" />
  <h3 class="name">Name: ${country.name}</h3>
  <h3 class="population">Population: ${country.population}</h3>
  <h3 class="capital">Capital: ${country.capital}</h3>
  <h3 class="area">Area: ${country.area}</h3>
</div>`;
    })
    .join("");
};
