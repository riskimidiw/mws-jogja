var mymap = L.map('mapid').setView([-7.782887, 110.367071], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoicmlza2ltaWRpdyIsImEiOiJjam04Z2toeng0cmJyM2twNGp1ZXNzMWtjIn0.11L8cGSyHCBWza8tMwuRsw'
}).addTo(mymap);

var marker = L.marker([-7.782887, 110.367071]).addTo(mymap);
marker.bindPopup("<b>Tugu Jogja</b><br>Bangunan terkenal di jogja").openPopup();

var circle = L.circle([-7.782332, 110.365670], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(mymap);
circle.bindPopup("Pasar Kranggan");

var polygon = L.polygon([
    [-7.779582, 110.367900],
    [-7.778392, 110.368716],
    [-7.779780, 110.369117]
]).addTo(mymap);
polygon.bindPopup("Polygon popup");

var popup = L.popup();

function onMapClick(e) {
    popup.setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on("click", onMapClick);