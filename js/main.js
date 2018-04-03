$(document).ready(function() { 
  findTimezone();
  window.setInterval(function(){
    findTimezone();
  }, 1000);

  // Changes background upon each refresh
  setBackground();

});//end doc ready

// cities
// not all drinks have been input due to other JS issues receiving priority

const targetHour = 17;
var cities = [];

cities[-12] = { name: "Pacific Ocean",
                lat: 22.202705,
                lng: -177.245679,
                drinks: { name: "Seawater",
                          image: "seawater.jpg", 
                          ingredients:[ "Seawater, 8 oz"],
                          directions: [ "Place seawater in recepticle", 
                                        "Serve at sea temperature"]}
              };
cities[-11] = { name: "Pago Pago, American Samoa",
                lat: -14.275632,
                lng: -170.702036,
                drinks: { name: "Kava",
                          image: "kava.jpg",
                          ingredients: ["Kava, 2 oz"],
                          directions: ["Attend a genuine kava ceremony by invitation from Samoans", 
                            "Be sure to follow local customs"]}
               };
cities[-10] = { name: "Pape'ete, French Polynesia",
                lat: -17.551625,
                lng: -149.558476,
                drinks: { name: "Polynesian Mai Tai",
                          image: "maitai.jpg", 
                          ingredients:[ "White rum, 1 oz", 
                                        "Orgeat syrup, 1/2 oz", 
                                        "Orange Curaçao, 1/2 oz", 
                                        "Pineapple juice, 2 oz", 
                                        "Orange juice, 1 oz", 
                                        "Ice"],
                          directions: ["Pour ingredients into glass over ice and serve."]}
              };
cities[-9] = {  name: "Adak, USA", 
                lat: 51.879555,
                lng: -176.644170,
                drinks: { name: "Smoked Salmon Bloody Mary",
                          image: "bloodymary.jpg",
                          ingredients: [  "Tomato juice, 8 oz", 
                                          "Smoked salmon vodka, 1 oz", 
                                          "Tabasco, 1-3 dashes", 
                                          "Worcestershire sauce, 1 dash", 
                                          "Pinch of salt", 
                                          "Pinch of pepper",
                                          "Pinch of sugar",
                                          "Celery, 1 stalk" ],
                          directions: [ "Mix all ingredients except celery together in glass over ice",
                                        "Garnish with celery stalk"]}
                };
cities[-8] = {  name: "Anchorage, USA",
                lat: 61.218056,
                lng: -149.900278,
                drinks: { name: "Alaskan Beer",
                          image: "beer-2.png",
                          ingredients: [  "Alaskan Beer, 12 oz" ],
                          directions: [ "Pour into beer glass and serve chilled"]}
              };
cities[-7] = {  name: "Los Angeles, USA",
                lat: 34.052234,
                lng: -118.243685,
                drinks: { name: "Cabernet Sauvignon",
                          image: "cabsauv.jpg",
                          ingredients: ["Cabernet Sauvignon, 5 oz"],
                          directions: ["Uncork bottle and pour into Cabernet Sauvignon glass"]}
              };
cities[-6] = {  name: "Ciudad Juárez, Mexico",
                lat: 31.690364,
                lng: -106.424548,
                drinks: { name: "Paloma",
                          image: "paloma.jpg", 
                          ingredients:[ "Salt", 
                                        "Grapefruit wedge", 
                                        "Fresh grapefruit juice, 2 oz", 
                                        "Fresh lime juice, 1 tbsp", 
                                        "Sugar, 1 tsp", 
                                        "Mescal or tequila, 2 oz", 
                                        "Club soda, 2 oz"],
                          directions: [ "Pour some kosher salt on a plate", 
                                        "Rub half of rim of a highball glass with grapefruit wedge", 
                                        "Dip rim of glass in salt", 
                                        "Combine grapefruit juice, lime juice, and sugar in glass",
                                        "Stir ingredients until sugar is dissolved",
                                        "Stir in mescal, add ice, and top off with club soda", 
                                        "Garnish with grapefruit wedge"]}
              };
// cities[-6] = {  name: "Toronto, Ontario (Canada)",
//                 lat: 43.653226,
//                 lng: -79.383184,
//                 drinks: { name: "Toronto Cocktail",
//                           image: "toronto.jpg",
//                           ingredients: [  "Canadian blended whiskey, 1 3/4 fl oz",
//                                           "Fernet Branca, 1/4 fl oz", 
//                                           "Sugar syrup (2 parts sugar to 1 part water), 1/4 fl oz", 
//                                           "Angostura Aromatic Bitters, 1 dash", 
//                                           "Ice"],
//                           directions: [ "Stir all igredients with ice", 
//                                         "Strain into chilled glass and serve"]}
//               };
// Changed due to DST
// cities[-6] = {  name: "San José, Costa Rica",
//                 lat: 9.934739, 
//                 lng: -84.087502,
//                 drinks: { name: "Chiliguaro",
//                           image: "chiliguaro.jpg",
//                           ingredients: [  "Cacique Guaro, 1 fl oz",
//                                           "Tomato juice, 4 fl oz", 
//                                           "Fresh lemon juice, 4 tsp", 
//                                           "Tabasco, 2 tsp",
//                                           "Salt"],
//                           directions: [ "Salt rim of glass", 
//                                         "Stir ingredients in tall glass and serve"]}
//               };
cities[-5] = {  name: "Lima, Peru",
                lat: -12.272096,
                lng: -76.271083,
                drinks: { name: "Pisco Sour",
                          image: "piscosour.jpg",
                          ingredients: [  "Pisco, 1.5 oz", 
                                          "Simple syrup, 1/2 oz", 
                                          "Lemon juice, 1 oz",
                                          "Egg white, 1",
                                          "Angostura bitters, a few drops"],
                          directions: [ "Combine all ingredients except bitters in cocktail shaker",
                                        "Vigorously shake for 15 seconds and strain into cocktail glass", 
                                        "Top with a few drops of bitters and serve"]}
              };
cities[-4] = {  name: "New York, USA",
                lat: 40.712784,
                lng: -74.005941,
                drinks: { name: "Manhattan",
                          image: "manhattan.jpg", 
                          ingredients:[ "Sweet vermouth, 3/4 oz", 
                                        "Bourbon whiskey, 2 1/2 oz", 
                                        "Angostura® bitters, 1 dash", 
                                        "Maraschino cherry", 
                                        "Orange peel, 1 twist", 
                                        "Ice, 2-3 cubes"],
                          directions: [ "Combine liquids over ice in mixing glass; stir gently", 
                                        "Place cherry in a chilled cocktail glass and strain mixture over cherry", 
                                        "Rub cut edge of orange peel over glass rim and twist over drink to release oils"]}
              };
cities[-3] = {  name: "Buenos Aires, Argentina",
                lat: -34.603684,
                lng: -58.381559,
                drinks: { name: "Fernet con Coca",
                          image: "fernet.jpg", 
                          ingredients:[ "Fernet Branca, 2 oz", 
                                        "Coca-Cola, 4 oz", 
                                        "Ice"],
                          directions: [ "Pour Fernet Branca over ice", 
                                        "While holding glass diagonally, slowly pour the Coca-Cola over drink and serve"]}
              };
cities[-2] = {  name: "Atlantic Ocean",
                lat: 40.314389,
                lng: -40.779151,
                drinks: { name: "Seawater",
                          image: "seawater.jpg", 
                          ingredients:[ "Seawater, 8 oz"],
                          directions: [ "Place seawater in recepticle",
                                        "Serve at sea temperature"]}
              };
cities[-1] = { name: "Praia, Cape Verde",
                lat: 14.93305,
                lng: -23.513327,
                drinks: { name:"Grog",
                          image: "grogue.jpg",
                          ingredients: [ "Grog, 5 oz"],
                          directions: [ "Pour into glass and serve hot"]}
            };
cities[0] = {  name: "Reykjavik, Iceland",
                lat: 64.122037,
                lng: -21.816056,
                drinks: { name:"Brennivin",
                          image: "brennivin.jpg",
                          ingredients: [ "Brennivin, 2 oz"],
                          directions: [ "Pour into shot glass and serve chilled"]}
            };
cities[1] = { name: "London, England",
              lat: 51.507351,
              lng: -0.127758,
              drinks: { name: "Tom Collins", 
                        image: "tomcollins.jpg",
                        ingredients:[ "Gin, 2 fl oz", 
                                      "Club soda, 2 fl oz",
                                      "Lemon juice, 1.5 tbsp", 
                                      "Simple syrup, 1 tbsp", 
                                      "Lemon, 1 wedge", 
                                      "Ice, 1 cup"],
                        directions: [ "Combine gin, lemon juice, and simple syrup in a cocktail shaker", 
                                      "Add 1 cup ice, cover and shake until chilled", 
                                      "Strain into the chilled Collins glass", 
                                      "Top with club soda and garnish with a lemon wedge"]}
              };
cities[2] = { name: "Berlin, Germany",
              lat: 52.520007,
              lng: 13.404954,
              drinks: { name: "Schnapps",
                        image: "schnapps.jpg",
                        ingredients: ["German schnapps, 2 oz"],
                        directions: ["Pour into shot glass and serve chilled"]}
                      // { name: "Weizenbier",
                      //   image: "beer.jpg",
                      //   ingredients: ["Weizenbier, 16 oz"],
                      //   directions: ["Pour into Weizen glass and serve"]}
            };
cities[3] = { name: "Athens, Greece",
              lat: 37.983810,
              lng: 23.727539,
              drinks: { name: "Ouzo",
                        image: "ouzo.jpg",
                        ingredients: ["Ouzo, 2 oz"],
                        directions: ["Pour in glass over ice and serve chilled"]}
            };
// Changed due to DST
// cities[3] = { name: "Istanbul, Turkey",
//               lat: 41.015137,
//               lng: 28.979530,
//               drinks: { name: "Raki",
//                         image: "raki.jpg",
//                         ingredients: [  "Raki, 2 oz",
//                                         "Ice"],
//                         directions: ["Pour over ice and serve"]}
            // };
cities[4] = { name: "Yerevan, Armenia",
              lat: 40.177200, 
              lng: 44.503490,
              drinks: { name: "Oghi",
                        image: "oghi.jpg",
                        ingredients: ["Oghi, 2 oz"],
                        directions: ["Pour into glass and serve"]}
            };
cities[5] = { name: "Yekaterinburg, Russia",
              lat: 56.833333,
              lng: 60.583333,
              drinks: { name: "Vodka",
                        image: "vodka.jpg",
                        ingredients: ["Vodka, 2 oz"],
                        directions: ["Pour into glass tumbler over ice and serve chilled"]}
            };
cities[6] = { name: "Astana, Kazakhstan",
              lat: 51.180100,
              lng: 71.4459800,
              drinks: { name: "Kumiss",
                        image: "kumiss.png",
                        ingredients: [ "Kumiss, 6 oz"],
                        directions: ["Pour into cup and serve cold or chilled"]}
            };
cities[7] = { name: "Bangkok, Thailand",
              lat: 13.736717, 
              lng: 100.523186,
              drinks: { name: "Thai Sabai",
                        image: "thaisabai.jpg",
                        ingredients: [  "Mekhong, 1.5 oz",
                                        "Lime, 1 wedge",
                                        "Fresh lime juice, 4 tsp",
                                        "Sugar syrup, 3 tsp",
                                        "Thai sweet basil, 4-8 leaves",
                                        "Soda, 1 spash"],
                        directions:  [  "Tear basil leaves and drop into shaker",
                                        "Pour Mekhong and ingredients into the shaker",
                                        "Shake well with ice cubes", 
                                        "Pour and double strain into rock glass over ice with a splash of soda",
                                        "Garnish wiith Thai sweet basil sprigs and lime wedge"]
              }
            };
cities[8] = { name: "Beijing, China",
              lat: 39.9042,
              lng: 116.407396,
              drinks: { name: "Baijiu",
                        image: "Baijiu.jpg",
                        ingredients: [ "Baijiu, 2 oz"],
                        directions: ["Pour into small glass and serve room temperature"]}
            };
cities[9] = { name: "Tokyo, Japan",
              lat: 35.689488,
              lng: 139.691706,
              drinks: { name: "Sake",
                        image: "sake.jpg",
                        ingredients: ["Sake, 4 oz"],
                        directions: ["Pour into tokkuri or other glass and serve"]}
            };
cities[10] = {  name: "Sydney, Australia",
                lat: -33.86882,
                lng: 151.209296,
                drinks: { name: "Victoria Bitter Beer",
                        image: "vbbeer.png",
                        ingredients: [ "Victoria Bitter Beer, 16 oz"],
                        directions: ["Pour into pint glass and serve cold"]}
            };
cities[11] = {  name: "Port Vila, Vanuatu",
                lat: -17.734818, 
                lng: 168.322021,
                drinks: { name: "Vanuatu Kava",
                        image: "vkava.jpg",
                        ingredients: [ "Kava, 2 oz"],
                        directions: ["Pour into bilo and serve immediately"]}
            };
cities[12] = {  name: "Auckland, New Zealand",
                lat: -36.84846,
                lng: 174.763332,
                drinks: { name: "Sauvignon blanc",
                        image: "sauvblanc.jpg",
                        ingredients: [ "New Zealand Sauvignon blanc, 5 oz"],
                        directions: ["Pour into wine glass and serve chilled"]}
            };

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    // draggable: false, // var = canDrag - will use this for mobile using media queries at a later date
    center: cities[getOffset()]
  });

  // google maps api needs to keep track of marker and info window
  var infowindow = new google.maps.InfoWindow();
  var marker = [];

  function makeInfoWindowEvent(contentString, map, marker) {  
    return function() {
      // return function is within function due to closure, dedicated function for every marker and every info window is required
      // otherwise, if var wasn't within function within function, js would keep overwriting vars  
      infowindow.setContent(contentString);
      infowindow.open(map, marker);
    };
 }

  // this for-loop loops over the list of cities and plots markers & relevant info windows on map
  for (i in cities) {
    var city = cities[i];

    marker[i] = new google.maps.Marker({
      position: new google.maps.LatLng(city.lat,city.lng),
      map: map
    });

    // new drink stuff

    if ('drinks' in city) {

      var ingredientList = [];

      //construct ingredients list
      for (tmpingredient in city.drinks.ingredients) {
        var ingredient = city.drinks.ingredients[tmpingredient];

        ingredientList.push('<li>' + ingredient + '</li>');
      }

      //construct directions list
      var directionList = [];

      for (tmpdirection in city.drinks.directions) {
        var direction = city.drinks.directions[tmpdirection];
        directionList.push('<li>' + direction + '</li>');
      }

      //input relevant content into info window
      var contentString = '<div id="content">'+
      '<h1 class="city-name">' + city.name + '<br><span class="utc">' + '(UTC '+i+')' + '</span></h1>' +
      '<h2 class="drink-name">' + city.drinks.name + '</h2>' + '<img src="images/' + city.drinks.image + '" height=200px>' +
      // '<div id="leftarrow" onclick="somenewleftfunction(' + i + ')"</div>' +
      '<h3 class="ingredients-heading">Ingredients</h3>' +
          '<ul class="ingredients">' +
            ingredientList.join('') +
          '</ul>' +
          '<h3 class="directions-heading">Directions</h3>' +
          '<ul class="directions">' +
            directionList.join('') +
          '</ul>' +
      '</div>';
      
      // listener links markers to info window
      google.maps.event.addListener(marker[i], 'click', 
        makeInfoWindowEvent(contentString, map, marker[i])
      );

      if (i == getOffset()){
        infowindow.setContent(contentString);
        infowindow.open(map, marker[i]);
      }
    }
  }

}

// time zone excitement 
function getOffset() {
  var utcHour = new Date().getUTCHours();
  if(utcHour == 0) utcHour = 24;
  var offset = targetHour - utcHour;
  if(offset > 12) offset = offset - 24;
  return offset;
}

function getCity(offset) {
  return cities[offset].name;
}

function getTime(offset) {
  var d = new Date();

  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

  var nd = new Date(utc + (3600000*offset));

  return nd;
}

function findTimezone() {
  var cityContainer = document.getElementById('cityContainer');
  var timeContainer = document.getElementById('timeContainer');
  var offset = getOffset();
  cityContainer.innerHTML = getCity(offset);
  timeContainer.innerHTML = getTime(offset).toLocaleTimeString();
};

//Calculate background picture
function setBackground() {
  let img = (Math.floor(Math.random()*8)+1)+".jpg";
  let container = document.getElementById("city-time-container");
  container.style.backgroundImage="url(./images/highdef/"+img+")";
};

  // // When the user scrolls the page, execute myFunction 
  // window.onscroll = function() {sticky()};

  // // Add the sticky class to the div when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function sticky() {
  //   let container = document.getElementById("city-time-container");
  //   let offset = container.offsetTop;
  //   if (window.pageYOffset >= offset) {
  //     container.classList.add("sticky");
  //   } else {
  //     container.classList.remove("sticky");
  //   }
  // };