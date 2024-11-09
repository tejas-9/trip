document.addEventListener("DOMContentLoaded", () => {
  const map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  let startMarker, endMarker;

  // Handle start and end point inputs
  document.getElementById('start').addEventListener('input', function () {
    const coords = this.value.split(",");
    if (coords.length === 2) {
      if (startMarker) map.removeLayer(startMarker);
      startMarker = L.marker([parseFloat(coords[0]), parseFloat(coords[1])]).addTo(map);
    }
  });

  document.getElementById('destination').addEventListener('input', function () {
    const coords = this.value.split(",");
    if (coords.length === 2) {
      if (endMarker) map.removeLayer(endMarker);
      endMarker = L.marker([parseFloat(coords[0]), parseFloat(coords[1])]).addTo(map);
    }
  });

  // Sample EV charging stations (mock data)
  const evStations = [
    { lat: 51.515, lon: -0.1 },
    { lat: 51.52, lon: -0.12 },
  ];
  evStations.forEach(station => {
    L.circle([station.lat, station.lon], {
      color: 'blue',
      fillColor: '#30f',
      fillOpacity: 0.5,
      radius: 300,
    }).addTo(map).bindPopup("EV Charging Station");
  });
});
