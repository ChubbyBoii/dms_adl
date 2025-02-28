// Initialize the Map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

// Add a Tile Layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add Markers for Affected Areas
const affectedAreas = [
    { name: 'Zone 1', coordinates: [19.0760, 72.8777] }, // Mumbai
    { name: 'Zone 2', coordinates: [28.7041, 77.1025] }, // Delhi
    { name: 'Zone 3', coordinates: [13.0827, 80.2707] }, // Chennai
    { name: 'Zone 4', coordinates: [22.5726, 88.3639] }, // Kolkata
];

affectedAreas.forEach(area => {
    L.marker(area.coordinates)
        .addTo(map)
        .bindPopup(`<b>${area.name}</b><br>Affected Area`);
});

// Example: Logout Functionality
document.querySelector('.logout-button').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Logging out...');
    window.location.href = 'index.html'; // Redirect to login page
});