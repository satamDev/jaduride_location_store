const express = require('express')
const app = express();

const PORT = 3000;
let driverData = {};

app.get('/', (req, res) => {
    console.log(req.query);
    let driverId = req.query.driver_id
    let lat = req.query.lat
    let lng = req.query.lng

    driverData[driverId] = [lat, lng]
    res.status(200).json({"status" : true, "message" : "Success", "isUpdated" : true});
})

app.get('/getAllDrivers', (req, res) => {
    res.status(200).json(driverData)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});