function initMap() {
	// add your code here
	L.mapquest.key = 'PluEBsYbyDogZQpjIb89Dp7hLq9p2Kel';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [37.7749, -122.4194],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
  		zoomControl: false
  	});

	L.marker([32.88, -117.236]).addTo(map);
}