// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeText = document.querySelector('.theme-text');
const themeIcon = document.querySelector('.theme-icon img');
const logoSource = document.querySelector('.page-logo source');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let hasManualTheme = false;

function applyTheme(isDark) {
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  themeText.textContent = isDark ? 'LIGHT' : 'DARK';
  themeIcon.src = isDark
    ? './assets/images/Theme Icon-sun.svg'
    : './assets/images/Theme Icon-moon.svg';

  if (logoSource) {
    logoSource.media = isDark ? 'all' : 'not all';
  }

  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );
}

applyTheme(systemTheme.matches);

themeToggle.addEventListener('click', function () {
  hasManualTheme = true;
  applyTheme(document.documentElement.dataset.theme !== 'dark');
});

systemTheme.addEventListener('change', (event) => {
  if (!hasManualTheme) applyTheme(event.matches);
});


// Search Functionality

let planets = [];

const planetImage = document.getElementById("planet-image");
const planetName = document.getElementById("planet-name");
const planetType = document.getElementById("planet-type");
const planetDescription = document.getElementById("planet-description");
const planetGravity = document.getElementById("planet-gravity");
const planetMass = document.getElementById("planet-mass");
const planetPeriod = document.getElementById("planet-period");
const planetTemperature = document.getElementById("planet-temperature");
const planetMoons = document.getElementById("planet-moons");
const planetDiameter = document.getElementById("planet-diameter");
const planetDistance = document.getElementById("planet-distance");
const searchInput = document.getElementById("planet-search");
const searchForm = document.querySelector(".planet-search");
const searchStatus = document.getElementById("search-status");
const planetCard = document.querySelector(".planet-card");

// Update DOM with target planet details
function updateHero(planet) {
  if (!planet) return;

  if (planetCard) planetCard.classList.remove("is-error");

  const statContainer = document.querySelector(".planet-stats");
  const factContainer = document.querySelector(".planet-facts");

  if (statContainer) statContainer.style.display = "flex";
  if (factContainer) factContainer.style.display = "grid";
  planetImage.style.display = "block";

  planetImage.src = planet.image;
  planetImage.alt = `${planet.name} planet`;
  planetName.textContent = planet.name;
  planetType.textContent = planet.type;
  planetDescription.textContent = planet.description;
  planetGravity.textContent = planet.gravity;
  planetMass.textContent = planet.mass;
  planetPeriod.textContent = planet.period;
  planetTemperature.textContent = planet.temperature;
  planetMoons.textContent = planet.moons;
  planetDiameter.textContent = planet.diameter;
  planetDistance.textContent = planet.distanceFromSun;
}


//Search functionality 
function findPlanetByName(inputValue) {
  const query = inputValue.trim().toLowerCase();

  if (!query) {
    return planets.find((planet) => planet.name === "Earth") || planets[0];
  }

  return (
    planets.find((planet) => planet.name.toLowerCase() === query) ||
    planets.find((planet) => planet.name.toLowerCase().includes(query)) ||
    null
  );
}


//Fecth JSON data from planets.json file
async function fetchPlanets() {
  try {
    const response = await fetch("./data/planets.json");

    if (!response.ok) {
      throw new Error(`Failed to load JSON: ${response.status}`);
    }

    planets = await response.json();

    const defaultPlanet = findPlanetByName("Earth");
    updateHero(defaultPlanet || planets[0]);
  } catch (error) {
    console.error("Error fetching planet data:", error);
    planetName.textContent = "Planet data unavailable";
    planetType.textContent = "Try again later";
    planetDescription.textContent = "The planet list could not be loaded.";
  }
}



searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const foundPlanet = findPlanetByName(searchInput.value);

  if (foundPlanet) {
    searchStatus.style.display = "none";
    searchStatus.textContent = "";

    const statContainer = document.querySelector(".planet-stats");
    const factContainer = document.querySelector(".planet-facts");
    if (statContainer) statContainer.style.display = "flex";
    if (factContainer) factContainer.style.display = "grid";
    planetImage.style.display = "block";

    if (planetCard) planetCard.classList.remove("is-error");
    updateHero(foundPlanet);
    return;
  }

  searchStatus.textContent = "No results";
  searchStatus.style.display = "inline-block";

  if (planetCard) planetCard.classList.add("is-error");

  planetName.textContent = "No result found!";
  planetType.textContent = "";
  planetDescription.textContent = "We couldn’t find any planet matching your search. Please double-check the name and try again.";

  planetGravity.textContent = "";
  planetMass.textContent = "";
  planetPeriod.textContent = "";
  planetTemperature.textContent = "";
  planetMoons.textContent = "";
  planetDiameter.textContent = "";
  planetDistance.textContent = "";

  planetImage.src = "";
  planetImage.alt = "Planet not found";
  planetImage.style.display = "none";

  const statContainer = document.querySelector(".planet-stats");
  const factContainer = document.querySelector(".planet-facts");
  if (statContainer) statContainer.style.display = "none";
  if (factContainer) factContainer.style.display = "none";
});

fetchPlanets();