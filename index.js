const express = require('express')
const logger = require('./log');
const axios = require('axios');

const app = express();
app.use(express.json());

const googlePlaceApis = {
	autocomplete : 'autocomplete',
	details : 'details'
}

const PORT = 3000;
const apiKey = 'AIzaSyC-Aqxhu4qpY2Cr_9rbLslFi4sdIsUdLxk'
// const apiKey = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"
const searchingRadius = 150000
let driverData = {};
let placeApiCounter = {};

app.get('/', (req, res) => {
    let driverId = req.query.driver_id
    let lat = req.query.lat
    let lng = req.query.lng

    driverData[driverId] = [lat, lng]
    res.status(200).json({"status" : true, "message" : "Success", "isUpdated" : true});
})

app.get('/getAllDrivers', (req, res) => {
    res.status(200).json(driverData)
})

app.get(`/search/places`, async (req, res) => {
	const input = req.query.query
	
	const lat = req.query.lat
	const lng = req.query.lng
	const userId = req.query.userId;	
	const sessiontoken = req.query.token;

	logger.info(`api : ${googlePlaceApis.autocomplete}, userId : ${userId}, searchedText : ${input}`)
	let currentDate = new Date().toLocaleString({ timeZone: 'Asia/Kolkata' }).split(",")[0];	
	placeApiCounter[currentDate] = (typeof placeApiCounter[currentDate] === 'undefined') ? 1 : (placeApiCounter[currentDate] + 1);
	
	try {
		const response = await axios.get(
			`https://maps.googleapis.com/maps/api/place/${googlePlaceApis.autocomplete}/json?
			input=${input}
			&key=${apiKey}
			&location=${lat},${lng}
			&sessiontoken=${sessiontoken}
			&radius=${searchingRadius}
			&components=country:ind`
		)
		res.status(200).json(
			{
				status : true,
				message : "Searching data execution complete",
				searchedPlaces : response.data
			}
		)
	} catch (error) {
		console.log(error);
		res.status(500).json(
			{ 
				error: 'An error occurred' 
			}
		)
	}
});

app.get(`/place/details`, async (req, res) => {
	console.log(req.query);
	const place_id = req.query.placeId
	const userId = req.query.userId;	
	const sessiontoken = req.query.token;

	logger.info(`api : ${googlePlaceApis.details}, userId : ${userId}, searchedText : ${place_id}`)
	
	try {
		const response = await axios.get(
			`https://maps.googleapis.com/maps/api/place/${googlePlaceApis.details}/json?
			place_id=${place_id}
			&key=${apiKey}
			&sessiontoken=${sessiontoken}
			&fields=geometry/location,formatted_address`
		)
		console.log(response.data);
		res.status(200).json(
			{
				status : true,
				message : "Searching details data execution complete",
				details : response.data
			}
		)
	} catch (error) {
		console.log(error);
		res.status(500).json(
			{ 
				error: 'An error occurred' 
			}
		)
	}
});

app.get(`/geocode/json`, async (req, res) => {
	console.log(req.query);
	const place_id = req.query.placeId
	const userId = req.query.userId;	
	const lat = req.query.lat;
	const lng = req.query.lng;

	logger.info(`api : ${googlePlaceApis.details}, userId : ${userId}, searchedText : ${place_id}`)
	
	try {
		let url = `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}`
		url += ( place_id != '') ? `&place_id=${place_id}` : `&latlng=${lat},${lng}`;

		const response = await axios.get(url)
		console.log(response.data);
		res.status(200).json(
			{
				status : true,
				message : "Searching details data execution complete",
				geocodingResponse : response.data
			}
		)
	} catch (error) {
		console.log(error);
		res.status(500).json(
			{ 
				error: 'An error occurred' 
			}
		)
	}
});

app.get('/placeApiCallingCounter', (req, res) => {
	res.status(200).json(placeApiCounter)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
// &strictbounds=true
// &types=geocode
// &location=${location.lat},${location.lng}
// &radius=10
// &components=country:ind