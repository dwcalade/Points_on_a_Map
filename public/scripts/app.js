// Client facing scripts here
// this is where you are going to be asking the DB for
// specific info and then using that info to make get requests
// that will then go into leaflet

$(() => {
  const $color1 = 'rgba(10, 43, 151, 1)';
  const $color2 = 'rgba(248, 246, 207, 1)';
  const $color3 = 'rgba(42, 169, 152, 1)';
  const $color4 = 'rgba(46, 23, 101, 1)';
  const $color5 = 'rgba(134, 184, 72, 1)';
  const $asidecontent = $('.aside-content');
  const $favourites = $('#favourites');
  const $allMaps = $('#all-maps');
  const $contributions = $('#contributions');
  const $mapForm = $('#new-map_form');
  const $mapButton = $('#new-map_button');
  const $favouritesAside = $('.favourites-aside');
  const $allMapsAside = $('.all-maps-aside');
  const $contributionsAside = $('.contributions-aside');

// add leaflet here
  // const map = L.map('mapid').setView([,], 12);

  // L.tileLayer('', {

  // }).addTo(map);

  const popupContent = `
    <form class="marker-form">
      <label for="marker-name">Name</label>
      <input type="text", placeholder="name your marker!"/>
      <label for="marker-img">Image</label>
      <input class="marker-img" type="url", placeholder="img url"/>
      <label for="marker-description">Description</label>
      <textarea class="marker-description" placeholder="desciption"></textarea>
      <input class="submit" type="submit">
      <button class="cancel-button">Cancel</button>
    </form>
  `;

  newMarkerGroup = new L.LayerGroup();
	map.on('click', addMarker);

  function addMarker(click){
    return newMarker = new L.marker(click.latlng, {draggable: 'true'})
      .addTo(map)
      .bindPopup(popupContent)
      .openPopup();
  }

  $login = $('#login');
  $logout = $('#logout');
  $register = $('#register');
  $welcome = $('#welcome-message');
  $login.click(() => {
    $login.hide();
    $register.hide();
    $logout.show();
    $welcome.show();
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
  $favourites.click(() => {
    $asidecontent.addClass('turn-red')
      .removeClass('turn-yellow')
      .removeClass('turn-green');
    $favourites.removeClass('left-border');
    $contributions.addClass('left-border');
    $allMaps.addClass('left-border');
    $contributionsAside.hide();
    $allMapsAside.hide();
    $favouritesAside.show();
  });
  $contributions.click(() => {
    $asidecontent.addClass('turn-yellow')
    .removeClass('turn-red')
    .removeClass('turn-green');
    $contributions.removeClass('left-border');
    $allMaps.addClass('left-border');
    $favourites.addClass('left-border');
    $contributionsAside.show();
    $allMapsAside.hide();
    $favouritesAside.hide();
  });
  $allMaps.click(() => {
    $asidecontent.addClass('turn-green')
    .removeClass('turn-yellow')
    .removeClass('turn-red');
    $allMaps.removeClass('left-border');
    $contributions.addClass('left-border');
    $favourites.addClass('left-border');
    $contributionsAside.hide();
    $allMapsAside.show();
    $favouritesAside.hide();
  });
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});
//all the functions related to leaflet actions will live here

//fucntions like: delete a map, populates a map by creating a nunch of leaflet markers etc

//research tweeter, get requests, ajax, charcounter function

//add a module exports underneath

const express = require("express");
const mapRoutes = express.Router();

$(() => {});

// establish the database as per the erd before attempting to pull anything from it

newMarkerGroup = new L.LayerGroup();
map.on('click', addMarker);

function addMarker(click){
  return newMarker = new L.marker(click.latlng, {draggable: 'true'})
    .addTo(map)
    .bindPopup(popupContent)
    .openPopup();
}
