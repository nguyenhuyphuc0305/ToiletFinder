var getLoc = document.getElementById("getLoc");
let lat, lng;

let mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2h1Y3VueGFuaDJrIiwiYSI6ImNrNzJ0YmdjcjA1dmozZ24xbjduMWcxNWYifQ.FQ24h62XknEmmVXQ_9k6gg'
}).addTo(mymap);

$(document).ready(() => {
    if (!navigator.geolocation) {
        console.log("Navigator is not supported in this browser.");
        return 
    }
    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lng = position.coords.longitude;

        mymap.panTo(new L.LatLng(lat, lng));

        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let data = JSON.parse(xhr.responseText)
                for (let i = 0; i < data.length; i++) {
                    let marker = L.marker([data[i].latitude, data[i].longitude]).addTo(mymap);
                }
            }
        }

        var query = "./getLoc?lat=" + lat + "&lng=" + lng;
        xhr.open("GET", query, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send();
    });
});