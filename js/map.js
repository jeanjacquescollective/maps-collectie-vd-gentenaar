const coord = [[51.06246,3.73035], [51.06086, 3.72778],[51.05197, 3.74721]];
let coords = '';
let map = L.map('map').setView(coord[0], 25);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// let myLayer = L.geoJSON().addTo(map);

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};


coord.forEach( (element,index) => {
    coords += element[1] + ',' + element[0];
    if(index != coord.length - 1){
        coords += ';';
    }
})
const getMap = async() => {

    const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/walking/${coords}?alternatives=false&continue_straight=true&geometries=geojson&overview=simplified&steps=false&access_token=pk.eyJ1IjoiamVhbi1qYWNxdWVzLWNvbGxlY3RpdmUiLCJhIjoiY2tqenVvbTNuMGIxbDJxbzV5N2NmajM5ZiJ9.ThdgCXl21WfWaZBYKGJ2Bw`);
    const data = await response.json();
    const geojson = data.routes[0].geometry;
    console.log(geojson);
    L.geoJSON(geojson, {
        style: myStyle
    }).addTo(map);
    return map;
}

getMap();