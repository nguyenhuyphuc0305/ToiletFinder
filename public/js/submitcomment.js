var subbtn = document.getElementById("submit")
var comment = document.getElementById("comment")
let time;

subbtn.addEventListener("click", () =>{
	getTime();
	console.log("id chosen:", selectedID)
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", console.log("lol"));
	xhr.responseType = "application/sql";
	var query = "?id=" + selectedID + "&comment=" + comment.value + "&time=" + time
	xhr.open("post", "/comment" + query);
	xhr.send();
});

function getTime() {
       var now = new Date();
       time = ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " @ " + now.getHours() + ':'
                     + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
                     .getSeconds()) : (now.getSeconds())));
       console.log(time);
}

function updateComments(){
	
}