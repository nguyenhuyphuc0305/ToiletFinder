var getLoc = document.getElementById("getLoc");
var com = document.getElementById("comments");
let lat, lng;
let data;

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
    xhr.addEventListener("load", pullComments);
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

function pullComments(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            const commentData = JSON.parse(xhttp.responseText);
            var html = "";
            for (i = 0; i < commentData.length; i++){
                html += '<div class="comment-block px-3 py-3 mb-3">'
                    + '<p class="comment-text">' + commentData[i].t_comment + '</p>'
                    + '<div class="bottom-comment">'
                    + '<div class="comment-date">' + commentData[i].t_time + '</div></div></div><br>'
            }
            com.innerHTML = html;
        }
    }
    let url = "/getComments?id="+selectedID;
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send();
}

function getLocation(){
    if (!navigator.geolocation) {
        console.log("Navigator is not supported in this browser.");
        return 
    }
    console.log("hello")
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

// document.onload = function(){
//     getLocation();
// };

getLocation();