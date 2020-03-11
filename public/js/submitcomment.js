var subbtn = document.getElementById("submit")
var comment = document.getElementById("comment")

subbtn.addEventListener("click", () =>{
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", console.log("comment posted"));
	xhr.responseType = "json";
	var query = "?id=" + PHUCIDHERE + "&comment=" + comment.value
	xhr.open("POST", "/review" + query);
	xhr.send();
});