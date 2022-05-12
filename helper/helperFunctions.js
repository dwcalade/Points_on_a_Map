// -clear the leaflet map of all the points currently being displayed
// -retrieve from the database all the points related to a given map
// -render all of those points to the screen as individual new leaflet markers (see leaflet notes)

function renderMapPoints(db, map_id) {
  let queryString = 'SELECT'
}

const addPoints = function(db, pointInfo) {
  let pointValues = [
    pointInfo.title,
    pointInfo.description,
    pointInfo.image,
    pointInfo.lat,
    pointInfo.lng,
    pointInfo.map_id
  ];
  let queryString = `INSERT INTO points (title, description, image, latitude, longitude, map_id)
                       VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
  return db
    .query(queryString, pointValues)
    .then(res => res.rows[0])
    .catch(err => console.log(err));
};

const editPoint = function(db, dataPoint) {
  let pointValues = [
    dataPoint.pointName,
    dataPoint.pointImgURL,
    dataPoint.pointDescription,
    dataPoint.pointId
  ];
  console.log(pointValues);
  let queryString = `UPDATE points
                      SET  name = $1,
                      image = $2,
                      description = $3
                      WHERE id= $4;`;
  return db
    .query(queryString, pointValues)
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
};

const deletePoint = function(db, idPoint) {
  let pointValues = [idPoint];
  let queryString = `DELETE FROM points
    WHERE id = $1`;
  return (
    db
      .query(queryString, pointValues)
      .then(res => {
        return res.rows;
      })
      .catch(err => console.log(err))
  );
};

module.exports = {
  renderMapPoints,
  addPoints,
  editPoint,
  deletePoint
};
