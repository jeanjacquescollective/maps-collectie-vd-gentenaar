var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const getMap = async() => {
    const response = await fetch('https://api.mapbox.com/optimized-trips/v1/mapbox/driving/-122.42,37.78;-122.45,37.91;-122.48,37.73?access_token=pk.eyJ1IjoiamVhbi1qYWNxdWVzLWNvbGxlY3RpdmUiLCJhIjoiY2tqenVvbTNuMGIxbDJxbzV5N2NmajM5ZiJ9.ThdgCXl21WfWaZBYKGJ2Bw');
    console.log(JSON.stringify(response));
    console.log(response);
    return map;
}

getMap();