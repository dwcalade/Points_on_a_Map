$(() => {
  getAllMaps();
});

const getAllMaps = () => {
  $.ajax({
    url: "http://localhost:8080/maps",
    type: "GET",
  }).then((data) => {
    console.log(data.maps[0].name);
    getSingleMap(data.maps);
  });
};

const getSingleMap = (arr) => {
  for (map of arr) {
    console.log(map.name);
    $("#maps-container").append(
      `<p><a href="/maps/${map.id}" >${map.name}</a></p>`
    );
  }
};
