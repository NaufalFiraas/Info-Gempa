export default function (lat, long, kedalaman, magnitude, koordinat) {
    const latitude = koordinat.split(',')[0];
    const longitude = koordinat.split(',')[1];

    const map = L.map('map').setView([latitude, longitude], 7);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup(`<p><strong>Magnitudo:</strong> ${magnitude} SR</p>
        <p><strong>Kedalaman:</strong> ${kedalaman}</p>
        <p><strong>Koordinat:</strong> ${lat}, ${long}</p>`).openPopup();
}

