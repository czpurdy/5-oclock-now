"use strict";

// Dataset of cities and regional drink recipes
// Timezones use IANA identifiers for DST-aware dynamic local time calculation
const cities = [
  {
    id: "pago-pago",
    name: "Pago Pago, American Samoa",
    timezone: "Pacific/Pago_Pago",
    lat: -14.275632,
    lng: -170.702036,
    drinks: [
      {
        name: "Kava",
        image: "kava.jpg",
        ingredients: ["Kava root, 2 oz", "Water, 16 oz"],
        directions: [
          "Attend a genuine kava ceremony by invitation from Samoans.",
          "Be sure to follow local customs and etiquette."
        ]
      }
    ]
  },
  {
    id: "papeete",
    name: "Pape'ete, French Polynesia",
    timezone: "Pacific/Tahiti",
    lat: -17.551625,
    lng: -149.558476,
    drinks: [
      {
        name: "Polynesian Mai Tai",
        image: "maitai.jpg",
        ingredients: [
          "White rum, 1 oz",
          "Orgeat syrup, 1/2 oz",
          "Orange Curaçao, 1/2 oz",
          "Pineapple juice, 2 oz",
          "Orange juice, 1 oz",
          "Ice"
        ],
        directions: ["Pour ingredients into glass over ice and serve."]
      }
    ]
  },
  {
    id: "adak",
    name: "Adak, USA",
    timezone: "America/Adak",
    lat: 51.879555,
    lng: -176.644170,
    drinks: [
      {
        name: "Smoked Salmon Bloody Mary",
        image: "bloodymary.jpg",
        ingredients: [
          "Tomato juice, 8 oz",
          "Smoked salmon vodka, 1 oz",
          "Tabasco, 1-3 dashes",
          "Worcestershire sauce, 1 dash",
          "Pinch of salt & pepper",
          "Pinch of sugar",
          "Celery, 1 stalk"
        ],
        directions: [
          "Mix all ingredients except celery together in glass over ice.",
          "Garnish with celery stalk."
        ]
      }
    ]
  },
  {
    id: "anchorage",
    name: "Anchorage, USA",
    timezone: "America/Anchorage",
    lat: 61.218056,
    lng: -149.900278,
    drinks: [
      {
        name: "Alaskan Beer",
        image: "beer-2.png",
        ingredients: ["Alaskan Craft Beer, 12 oz"],
        directions: ["Pour into beer glass and serve chilled."]
      }
    ]
  },
  {
    id: "los-angeles",
    name: "Los Angeles, USA",
    timezone: "America/Los_Angeles",
    lat: 34.052234,
    lng: -118.243685,
    drinks: [
      {
        name: "Cabernet Sauvignon",
        image: "cabsauv.jpg",
        ingredients: ["California Cabernet Sauvignon, 5 oz"],
        directions: ["Uncork bottle and pour into Cabernet Sauvignon glass."]
      }
    ]
  },
  {
    id: "ciudad-juarez",
    name: "Ciudad Juárez, Mexico",
    timezone: "America/Ciudad_Juarez",
    lat: 31.690364,
    lng: -106.424548,
    drinks: [
      {
        name: "Paloma",
        image: "paloma.jpg",
        ingredients: [
          "Kosher salt",
          "Grapefruit wedge",
          "Fresh grapefruit juice, 2 oz",
          "Fresh lime juice, 1 tbsp",
          "Sugar, 1 tsp",
          "Mezcal or tequila, 2 oz",
          "Club soda, 2 oz"
        ],
        directions: [
          "Pour salt on a plate.",
          "Rub half of rim of highball glass with grapefruit wedge and dip in salt.",
          "Combine grapefruit juice, lime juice, and sugar in glass; stir until dissolved.",
          "Stir in mezcal, add ice, and top off with club soda. Garnish with grapefruit wedge."
        ]
      }
    ]
  },
  {
    id: "lima",
    name: "Lima, Peru",
    timezone: "America/Lima",
    lat: -12.272096,
    lng: -76.271083,
    drinks: [
      {
        name: "Pisco Sour",
        image: "piscosour.jpg",
        ingredients: [
          "Pisco, 1.5 oz",
          "Simple syrup, 1/2 oz",
          "Lemon juice, 1 oz",
          "Egg white, 1",
          "Angostura bitters, a few drops"
        ],
        directions: [
          "Combine all ingredients except bitters in cocktail shaker.",
          "Vigorously shake for 15 seconds and strain into cocktail glass.",
          "Top with a few drops of bitters and serve."
        ]
      }
    ]
  },
  {
    id: "new-york",
    name: "New York, USA",
    timezone: "America/New_York",
    lat: 40.712784,
    lng: -74.005941,
    drinks: [
      {
        name: "Manhattan",
        image: "manhattan.jpg",
        ingredients: [
          "Sweet vermouth, 3/4 oz",
          "Bourbon whiskey, 2 1/2 oz",
          "Angostura® bitters, 1 dash",
          "Maraschino cherry",
          "Orange peel, 1 twist",
          "Ice, 2-3 cubes"
        ],
        directions: [
          "Combine liquids over ice in mixing glass; stir gently.",
          "Place cherry in chilled cocktail glass and strain mixture over cherry.",
          "Rub cut edge of orange peel over glass rim and twist over drink."
        ]
      }
    ]
  },
  {
    id: "buenos-aires",
    name: "Buenos Aires, Argentina",
    timezone: "America/Argentina/Buenos_Aires",
    lat: -34.603684,
    lng: -58.381559,
    drinks: [
      {
        name: "Fernet con Coca",
        image: "fernet.jpg",
        ingredients: ["Fernet Branca, 2 oz", "Coca-Cola, 4 oz", "Ice"],
        directions: [
          "Pour Fernet Branca over ice.",
          "While holding glass diagonally, slowly pour Coca-Cola over drink and serve."
        ]
      }
    ]
  },
  {
    id: "atlantic-ocean",
    name: "Atlantic Ocean",
    timezone: "Atlantic/South_Georgia",
    lat: -54.2811,
    lng: -36.5092,
    drinks: [
      {
        name: "Seawater",
        image: "seawater.jpg",
        ingredients: ["Seawater, 8 oz"],
        directions: ["Place seawater in receptacle.", "Serve at sea temperature."]
      }
    ]
  },
  {
    id: "praia",
    name: "Praia, Cape Verde",
    timezone: "Atlantic/Cape_Verde",
    lat: 14.93305,
    lng: -23.513327,
    drinks: [
      {
        name: "Grogue",
        image: "grogue.jpg",
        ingredients: ["Grogue (Cape Verdean Rum), 5 oz"],
        directions: ["Pour into glass and serve."]
      }
    ]
  },
  {
    id: "reykjavik",
    name: "Reykjavik, Iceland",
    timezone: "Atlantic/Reykjavik",
    lat: 64.122037,
    lng: -21.816056,
    drinks: [
      {
        name: "Brennivín",
        image: "brennivin.jpg",
        ingredients: ["Brennivín, 2 oz"],
        directions: ["Pour into shot glass and serve chilled."]
      }
    ]
  },
  {
    id: "london",
    name: "London, England",
    timezone: "Europe/London",
    lat: 51.507351,
    lng: -0.127758,
    drinks: [
      {
        name: "Tom Collins",
        image: "tomcollins.jpg",
        ingredients: [
          "Gin, 2 fl oz",
          "Club soda, 2 fl oz",
          "Lemon juice, 1.5 tbsp",
          "Simple syrup, 1 tbsp",
          "Lemon wedge",
          "Ice, 1 cup"
        ],
        directions: [
          "Combine gin, lemon juice, and simple syrup in cocktail shaker.",
          "Add ice, cover and shake until chilled.",
          "Strain into chilled Collins glass, top with club soda, garnish with lemon wedge."
        ]
      }
    ]
  },
  {
    id: "berlin",
    name: "Berlin, Germany",
    timezone: "Europe/Berlin",
    lat: 52.520007,
    lng: 13.404954,
    drinks: [
      {
        name: "German Schnapps",
        image: "schnapps.jpg",
        ingredients: ["German Schnapps, 2 oz"],
        directions: ["Pour into shot glass and serve chilled."]
      }
    ]
  },
  {
    id: "athens",
    name: "Athens, Greece",
    timezone: "Europe/Athens",
    lat: 37.983810,
    lng: 23.727539,
    drinks: [
      {
        name: "Ouzo",
        image: "ouzo.jpg",
        ingredients: ["Ouzo, 2 oz", "Ice & water"],
        directions: ["Pour in glass over ice, top with splash of water, serve chilled."]
      }
    ]
  },
  {
    id: "yerevan",
    name: "Yerevan, Armenia",
    timezone: "Asia/Yerevan",
    lat: 40.177200,
    lng: 44.503490,
    drinks: [
      {
        name: "Oghi",
        image: "oghi.jpg",
        ingredients: ["Oghi (Mulberry Spirit), 2 oz"],
        directions: ["Pour into glass and serve."]
      }
    ]
  },
  {
    id: "yekaterinburg",
    name: "Yekaterinburg, Russia",
    timezone: "Asia/Yekaterinburg",
    lat: 56.833333,
    lng: 60.583333,
    drinks: [
      {
        name: "Vodka",
        image: "vodka.jpg",
        ingredients: ["Russian Vodka, 2 oz"],
        directions: ["Pour into glass tumbler over ice and serve chilled."]
      }
    ]
  },
  {
    id: "astana",
    name: "Astana, Kazakhstan",
    timezone: "Asia/Almaty",
    lat: 51.180100,
    lng: 71.445980,
    drinks: [
      {
        name: "Kumis",
        image: "kumiss.png",
        ingredients: ["Kumis (Fermented Mare's Milk), 6 oz"],
        directions: ["Pour into traditional cup and serve cold."]
      }
    ]
  },
  {
    id: "bangkok",
    name: "Bangkok, Thailand",
    timezone: "Asia/Bangkok",
    lat: 13.736717,
    lng: 100.523186,
    drinks: [
      {
        name: "Thai Sabai",
        image: "thaisabai.jpg",
        ingredients: [
          "Mekhong spirit, 1.5 oz",
          "Lime wedge",
          "Fresh lime juice, 4 tsp",
          "Sugar syrup, 3 tsp",
          "Thai sweet basil leaves",
          "Club soda, 1 splash"
        ],
        directions: [
          "Tear basil leaves and drop into shaker with Mekhong and ingredients.",
          "Shake well with ice cubes.",
          "Strain into rocks glass over ice, top with splash of soda, garnish with basil sprig."
        ]
      }
    ]
  },
  {
    id: "beijing",
    name: "Beijing, China",
    timezone: "Asia/Shanghai",
    lat: 39.9042,
    lng: 116.407396,
    drinks: [
      {
        name: "Baijiu",
        image: "baijiu.jpg",
        ingredients: ["Baijiu, 2 oz"],
        directions: ["Pour into small shot glass and serve at room temperature."]
      }
    ]
  },
  {
    id: "tokyo",
    name: "Tokyo, Japan",
    timezone: "Asia/Tokyo",
    lat: 35.689488,
    lng: 139.691706,
    drinks: [
      {
        name: "Sake",
        image: "sake.jpg",
        ingredients: ["Japanese Sake, 4 oz"],
        directions: ["Pour into tokkuri flask and serve in small choko cups."]
      }
    ]
  },
  {
    id: "sydney",
    name: "Sydney, Australia",
    timezone: "Australia/Sydney",
    lat: -33.86882,
    lng: 151.209296,
    drinks: [
      {
        name: "Victoria Bitter Beer",
        image: "vbbeer.png",
        ingredients: ["Victoria Bitter Beer, 16 oz"],
        directions: ["Pour into pint glass and serve icy cold."]
      }
    ]
  },
  {
    id: "port-vila",
    name: "Port Vila, Vanuatu",
    timezone: "Pacific/Efate",
    lat: -17.734818,
    lng: 168.322021,
    drinks: [
      {
        name: "Vanuatu Kava",
        image: "vkava.jpg",
        ingredients: ["Kava, 2 oz"],
        directions: ["Pour into bilo (coconut shell) and serve immediately."]
      }
    ]
  },
  {
    id: "auckland",
    name: "Auckland, New Zealand",
    timezone: "Pacific/Auckland",
    lat: -36.84846,
    lng: 174.763332,
    drinks: [
      {
        name: "Sauvignon Blanc",
        image: "sauvblanc.jpg",
        ingredients: ["Marlborough Sauvignon Blanc, 5 oz"],
        directions: ["Pour into wine glass and serve chilled."]
      }
    ]
  }
];

const TARGET_HOUR = 17; // 5:00 PM (17:00 local time)
let selectedCity = null; // null by default so clock updates dynamically as timezones advance
let mapInstance = null;
let markersMap = {};
let infoWindowInstance = null;

// Handle Google Maps API Auth Failure (e.g., RefererNotAllowedMapError on localhost)
window.gm_authFailure = function () {
  console.warn("Google Maps API auth failure (RefererNotAllowedMapError). Rendering local fallback view.");
  const mapElement = document.getElementById("map");
  if (mapElement) {
    mapElement.classList.add("map-fallback");
    mapElement.innerHTML = `
      <div class="map-fallback-notice">
        <div class="map-fallback-icon">🗺️</div>
        <h3>Google Maps Local Development Notice</h3>
        <p>The production Google Maps API key restricts HTTP referrers (<code>RefererNotAllowedMapError</code> on <code>localhost</code>).</p>
        <p>The live 5 o'clock clock and drink recipe showcase below are fully operational!</p>
      </div>
    `;
  }
};

// Helper: Get local 24-hour hour number for a timezone
function getLocalHour(timezone) {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "numeric",
      hourCycle: "h23"
    });
    return parseInt(formatter.format(new Date()), 10);
  } catch (e) {
    return -1;
  }
}

// Helper: Format live clock string for a timezone
function formatLocalTime(timezone) {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });
    return formatter.format(new Date());
  } catch (e) {
    return new Date().toLocaleTimeString();
  }
}

// Determine which city currently has 5 PM local time
function getActive5OclockCity() {
  // Look for exact match (hour === 17)
  const match = cities.find(c => getLocalHour(c.timezone) === TARGET_HOUR);
  if (match) return match;

  // Fallback match
  return cities[0];
}

// Update DOM header with current city and clock
function updateClockDisplay() {
  // If selectedCity is null, dynamically resolve current 5 PM city on every tick
  const activeCity = selectedCity || getActive5OclockCity();
  const cityContainer = document.getElementById("cityContainer");
  const timeContainer = document.getElementById("timeContainer");

  if (cityContainer && timeContainer && activeCity) {
    cityContainer.textContent = activeCity.name;
    timeContainer.textContent = formatLocalTime(activeCity.timezone);
  }
}

// Render recipe card dynamically in the UI
function renderRecipeCard(city) {
  const container = document.getElementById("recipe-card-container");
  if (!container || !city || !city.drinks || !city.drinks.length) return;

  const drink = city.drinks[0];
  const ingredientsHtml = drink.ingredients
    .map(ing => `<li>${ing}</li>`)
    .join("");
  const directionsHtml = drink.directions
    .map(dir => `<li>${dir}</li>`)
    .join("");

  container.innerHTML = `
    <div class="flexdrink flip" tabindex="0" role="button" aria-label="Recipe card for ${drink.name}. Click or press Enter to flip recipe.">
      <section class="front">
        <h2 class="drink-name">${drink.name}</h2>
        <img src="images/${drink.image}" alt="${drink.name}" class="drink-image">
      </section>
      <section class="back">
        <h2 class="drink-name">${drink.name}</h2>
        <h3 class="ingredients-heading">Ingredients</h3>
        <ul class="ingredients">${ingredientsHtml}</ul>
        <h3 class="directions-heading">Directions</h3>
        <ol class="directions">${directionsHtml}</ol>
      </section>
    </div>
  `;

  // Initialize jQuery flip on newly added card
  if ($.fn.flip) {
    const $card = $(".flexdrink.flip");
    $card.flip({
      trigger: "click"
    });

    // Add keyboard accessibility for Enter / Space key press
    $card.on("keydown", function (e) {
      if (e.key === "Enter" || e.key === " " || e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        $card.flip("toggle");
      }
    });
  }
}

// Set random background image for header container
function setBackground() {
  const imgNumber = Math.floor(Math.random() * 8) + 1;
  const container = document.getElementById("city-time-container");
  if (container) {
    container.style.backgroundImage = `url(./images/highdef/${imgNumber}.jpg)`;
  }
}

// Build InfoWindow HTML content string for Google Maps
function buildInfoWindowContent(city) {
  const drink = city.drinks[0];
  const ingredientsHtml = drink.ingredients
    .map(ing => `<li>${ing}</li>`)
    .join("");
  const directionsHtml = drink.directions
    .map(dir => `<li>${dir}</li>`)
    .join("");

  return `
    <div id="content">
      <h1 class="city-name">${city.name}</h1>
      <h2 class="drink-name">${drink.name}</h2>
      <img src="images/${drink.image}" height="180" alt="${drink.name}" style="max-width:100%; border-radius:4px; margin-bottom:8px;">
      <h3 class="ingredients-heading">Ingredients</h3>
      <ul class="ingredients">${ingredientsHtml}</ul>
      <h3 class="directions-heading">Directions</h3>
      <ol class="directions">${directionsHtml}</ol>
    </div>
  `;
}

// Google Maps Callback Function
window.initMap = async function () {
  const mapElement = document.getElementById("map");
  if (!mapElement || typeof google === "undefined" || !google.maps) return;

  const activeCity = getActive5OclockCity();

  try {
    let AdvancedMarkerElement = null;
    if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
      AdvancedMarkerElement = google.maps.marker.AdvancedMarkerElement;
    } else if (google.maps.importLibrary) {
      try {
        const markerLib = await google.maps.importLibrary("marker");
        AdvancedMarkerElement = markerLib.AdvancedMarkerElement;
      } catch (e) {
        // Use classic marker fallback
      }
    }

    const mapOptions = {
      zoom: 3,
      center: { lat: activeCity.lat, lng: activeCity.lng },
      zoomControl: true,
      scaleControl: true,
      scrollwheel: false,
      gestureHandling: "cooperative"
    };

    if (AdvancedMarkerElement) {
      mapOptions.mapId = "DEMO_MAP_ID";
    }

    mapInstance = new google.maps.Map(mapElement, mapOptions);
    infoWindowInstance = new google.maps.InfoWindow();

    cities.forEach(city => {
      let marker;
      const position = { lat: city.lat, lng: city.lng };

      if (AdvancedMarkerElement) {
        marker = new AdvancedMarkerElement({
          position: position,
          map: mapInstance,
          title: city.name
        });
      } else {
        marker = new google.maps.Marker({
          position: position,
          map: mapInstance,
          title: city.name
        });
      }

      markersMap[city.id] = marker;

      const clickEvent = AdvancedMarkerElement ? "gmp-click" : "click";
      marker.addListener(clickEvent, () => {
        selectedCity = city;
        updateClockDisplay();
        renderRecipeCard(city);
        infoWindowInstance.setContent(buildInfoWindowContent(city));
        infoWindowInstance.open({
          anchor: marker,
          map: mapInstance
        });
      });

      if (city.id === activeCity.id) {
        infoWindowInstance.setContent(buildInfoWindowContent(city));
        infoWindowInstance.open({
          anchor: marker,
          map: mapInstance
        });
      }
    });
  } catch (err) {
    console.warn("Google Maps initialization exception:", err);
  }
};

// Document Ready Initialization
$(document).ready(function () {
  // Do NOT assign selectedCity here so updateClockDisplay dynamically updates as hours change
  updateClockDisplay();
  renderRecipeCard(getActive5OclockCity());
  setBackground();

  // Update clock every second
  window.setInterval(updateClockDisplay, 1000);
});