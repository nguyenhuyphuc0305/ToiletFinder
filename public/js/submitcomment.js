var subbtn = document.getElementById("submit")
var comment = document.getElementById("comment")

subbtn.addEventListener("click", () =>{
	console.log("id chosen:", selectedID)
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", console.log("lol"));
	xhr.responseType = "application/sql";
	var query = "?id=" + selectedID + "&comment=" + comment.value
	xhr.open("post", "/review" + query);
	xhr.send();
});