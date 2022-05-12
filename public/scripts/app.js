// Client facing scripts here
// this is where you are going to be asking the DB for
// specific info and then using that info to make get requests
// that will then go into leaflet

$(() => {
  const $color1 = "rgba(10, 43, 151, 1)";
  const $color2 = "rgba(248, 246, 207, 1)";
  const $color3 = "rgba(42, 169, 152, 1)";
  const $color4 = "rgba(46, 23, 101, 1)";
  const $color5 = "rgba(134, 184, 72, 1)";
  const $asidecontent = $(".aside-content");
  const $favourites = $("#favourites");
  const $allMaps = $("#all-maps");
  const $contributions = $("#contributions");
  const $mapForm = $("#new-map_form");
  const $mapButton = $("#new-map_button");
  const $favouritesAside = $(".favourites-aside");
  const $allMapsAside = $(".all-maps-aside");
  const $contributionsAside = $(".contributions-aside");
  const $navigateDown = $(".navigate-down");
  const $navigateUp = $(".navigate-up");

  $navigateUp.click(() => {
    $("html, body").animate({ scrollTop: "0" }, 1000);
  });

  $navigateDown.click(() => {
    $("html, body").animate({ scrollTop: "9999" }, 1000);
  });

  $login = $("#login");
  $logout = $("#logout");
  $register = $("#register");
  $welcome = $("#welcome-message");

  $loginForm = $(".login_form");

  $login.click(() => {
    $loginForm.toggle();
    $registerForm.hide();
  });

  $logout.click(() => {
    $login.show();
    $register.show();
    $logout.hide();
    $welcome.hide();
  });
  $mapButton.click(() => {
    $mapForm.toggle();
  });
  $newMapButton.click(() => {
    $mapForm.toggle();
    $mapNameField.focus();
  });

  $favourites.click(() => {
    $asidecontent
      .addClass("turn-red")
      .removeClass("turn-yellow")
      .removeClass("turn-green");
    $favourites.removeClass("left-border");
    $contributions.addClass("left-border");
    $allMaps.addClass("left-border");
    $contributionsAside.hide();
    $allMapsAside.hide();
    $favouritesAside.show();
  });
  $contributions.click(() => {
    $asidecontent
      .addClass("turn-yellow")
      .removeClass("turn-red")
      .removeClass("turn-green");
    $contributions.removeClass("left-border");
    $allMaps.addClass("left-border");
    $favourites.addClass("left-border");
    $contributionsAside.show();
    $allMapsAside.hide();
    $favouritesAside.hide();
  });
  $allMaps.click(() => {
    $asidecontent
      .addClass("turn-green")
      .removeClass("turn-yellow")
      .removeClass("turn-red");
    $allMaps.removeClass("left-border");
    $contributions.addClass("left-border");
    $favourites.addClass("left-border");
    $contributionsAside.hide();
    $allMapsAside.show();
    $favouritesAside.hide();
  });
  $.ajax({
    method: "GET",
    url: "/api/users",
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});

// !!WARNING!! THERE ARE TWO SEPERATE DOC READY?

$(() => {
  //these variables are the input elements related to the new map form
  const $latitudeInput = $("#latitudeInput");
  const $longitudeInput = $("#longitudeInput");

  //the default setView for our leaflet map is now based of the two variable listed below
  const initialLat = 49.27;
  const initialLong = -123.11;

  $latitudeInput.val(initialLat);
  $longitudeInput.val(initialLong);

  const map = L.map("map").setView([initialLat, initialLong], 13);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1Ijoibmljb2xhc3JlaW1lciIsImEiOiJjbDJ5NTZrdWUxMjR5M2xtdjBlOXd5cTlhIn0.aD_v3fkw1sd4Ps5jd1Bccg",
    }
  ).addTo(map);

  const popupContent = `
<form class="marker-form" action="/maps/:map_id/add" method="POST">
  <label for="marker-name">Name</label>
  <input type="text" name="name" placeholder="name your marker!"/>
  <label for="marker-img">Image</label>
  <input class="marker-img" type="url" name="image" placeholder="img url"/>
  <label for="marker-description">Description</label>
  <textarea class="marker-description" name="description" placeholder="desciption"></textarea>

  <input id="click.latlng.lat" type="hidden" name="mapLat">
  <input id="click.latlng.lng" type="hidden" name="mapLong">

  <input class="submit" type="submit">
  <button class="cancel-button">Cancel</button>
</form>
`;

  var marker = L.marker([51.5, -0.1]).addTo(map);

  newMarkerGroup = new L.LayerGroup();
  map.on("click", addMarker);

  function addMarker(click) {
    return (newMarker = new L.marker(click.latlng, { draggable: "true" })
      .addTo(map)
      .bindPopup(popupContent)
      .openPopup());
  }

  //this event handler records the current lat and long of the screen when a user is finished moving it
  map.on("moveend", (e) => {
    $latitudeInput.val(map.getCenter().lat);
    $longitudeInput.val(map.getCenter().lng);
  });
});
