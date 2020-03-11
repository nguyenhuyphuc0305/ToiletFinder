var getLoc = document.getElementById("getLoc");
let lat, lng;
let data;

function loaded(){
    getLocation();
}

let mymap = L.map('mapid').setView([51.505, -0.09], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2h1Y3VueGFuaDJrIiwiYSI6ImNrNzJ0YmdjcjA1dmozZ24xbjduMWcxNWYifQ.FQ24h62XknEmmVXQ_9k6gg'
}).addTo(mymap);

function chooseMarker(data) {
    selectedID = data.id
    document.getElementById("location-name").innerHTML = data.name
    document.getElementById("location-direction").innerHTML = data.directions
    console.log(data)
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let imgSet = JSON.parse(xhr.responseText)
            let img = document.getElementById("location-img")
            img.crossOrigin = ""
            img.src = "https://www.flickr.com/photos/" + imgSet[0].owner + "/" + imgSet[0].id
        }
    }

    let query = "./getImg?lat=" + lat + "&lng=" + lng;
    xhr.open("GET", query, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send();
}

function getLocation(){
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
                data = JSON.parse(xhr.responseText)
                console.log(data)
                for (let i = 0; i < data.length; i++) {
                    L.marker([data[i].latitude, data[i].longitude]).addTo(mymap).on("click", chooseMarker.bind(this, data[i]));
                }
            }
        }

        var query = "./getLoc?lat=" + lat + "&lng=" + lng;
        xhr.open("GET", query, true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send();
    });
};

window.onload = function(){
    loaded()
};