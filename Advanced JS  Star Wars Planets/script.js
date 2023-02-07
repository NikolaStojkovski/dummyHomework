const planetsList = document.querySelector(".planets");
const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".buttonContainer");
const nextPageBtn = document.querySelector(".nextPage");
const previousPageBtn = document.querySelector(".previousPage");
nextPageBtn.style.visibility = "hidden";
previousPageBtn.style.visibility = "hidden";
const fetchPlanetsFirst = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/planets/?page=1");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
const fetchPlanetsSecound = async () => {
  try {
    const res = await fetch(" https://swapi.dev/api/planets/?page=2");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const displayPlanets = (planets) => {
  planetsList.innerHTML = `<thead>
  <td>Name</td>
  <td>Population</td>
  <td>Climate</td>
  <td>Gravity</td>
  </thead>`;
  planetsList.innerHTML += planets.results
    .map(
      (planet) => `
  <tbody>
  <td>${planet.name}</td>
  <td>${planet.population}</td>
  <td>${planet.climate}</td>
  <td>${planet.gravity}</td>
  </tbody>
  `
    )
    .join("");
};
const renderFirst = async () => {
  try {
    const planets = await fetchPlanetsFirst();
    displayPlanets(planets);
  } catch (error) {
    console.log("FROM APP FUNC ", error);
  }
};
const renderSecound = async () => {
  try {
    const planets = await fetchPlanetsSecound();
    displayPlanets(planets);
  } catch (error) {
    console.log("FROM APP FUNC ", error);
  }
};
document.querySelector(".showBtn").addEventListener("click", () => {
  renderFirst();
  //   buttonContainer.innerHTML += `<button type="button" class="nextPage button">Next Page</button>`;
  nextPageBtn.style.visibility = "visible";
});
document.querySelector(".nextPage").addEventListener("click", () => {
  renderSecound();
  document.querySelector(".showBtn").style.display = "none";
  //   buttonContainer.innerHTML += `<button type="button" class="previousPage button">Previous Page</button>`;
  previousPageBtn.style.visibility = "visible";
});
previousPageBtn.addEventListener("click", () => {
  renderFirst();
  previousPageBtn.style.visibility = "hidden";
});
