var apikey = "8250e91368af4527b937c436afe799a1";
var adafruitUser = "/api/v2/tmau/";
var ADAFRUIT = "https:/io.adafruit.com";

$.getJSON(ADAFRUIT+adafruitUser+"feeds/data/data?X-AIO-Key="+apikey, function(data){
	airQData = [1,2,3];
	airQData.push(parseInt(data[0].value));
	airQData.push(parseInt(data[1].value));
	airQData.push(parseInt(data[2].value));
	airQData.push(parseInt(data[3].value));
	airQData.push(parseInt(data[4].value));
	airQData.push(parseInt(data[5].value));
	airQData.push(parseInt(data[6].value));
	airQData.push(parseInt(data[7].value));
	airQData.push(parseInt(data[8].value));
	airQData.push(parseInt(data[9].value));
	airQData.push(parseInt(data[10].value));
	airQData.push(parseInt(data[11].value));
	airQData.push(parseInt(data[12].value));
	airQData.push(parseInt(data[13].value));
	airQData.push(parseInt(data[14].value));
	airQData.push(parseInt(data[15].value));
	airQData.push(parseInt(data[16].value));
	airQData.push(parseInt(data[17].value));
	airQData.push(parseInt(data[18].value));
	airQData.push(parseInt(data[19].value));

	console.log(airQData);
	// airQData.push(data[4].value);
	// airQData.push(data[5].value);
	// airQData.push(data[6].value);
	// airQData.push(data[7].value);
	// airQData.push(data[8].value);
	// airQData.push(data[9].value);
	// airQData.push(data[10].value);
	// airQData.push(data[11].value);
	// airQData.push(data[12].value);
	// airQData.push(data[13].value);
	// airQData.push(data[14].value);
	// airQData.push(data[15].value);
	// airQData.push(data[16].value);
	// airQData.push(data[17].value);
	// airQData.push(data[18].value);
	// airQData.push(data[19].value);


	console.log(data[0].value);
	console.log(data[1].value);
	console.log(data[2].value);
	console.log(data[3].value);
	console.log(data[4].value);
	console.log(data[5].value);
	console.log(data[6].value);
	console.log(data[7].value);
	console.log(data[8].value);
	console.log(data[9].value);
	console.log(data[10].value);
	console.log(data[11].value);
	console.log(data[12].value);
	console.log(data[13].value);
	console.log(data[14].value);
	console.log(data[15].value);
	console.log(data[16].value);
	console.log(data[17].value);
	console.log(data[18].value);
	console.log(data[19].value);
	
});