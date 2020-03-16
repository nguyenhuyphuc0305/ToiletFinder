var subbtn = document.getElementById("submit")
var comment = document.getElementById("comment")
let time;

subbtn.addEventListener("click", () =>{
	getTime(); //timestamp
	console.log("id chosen:", selectedID)
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", pullComments);
	xhr.responseType = "text";
	var query = "?id=" + selectedID + "&comment=" + comment.value + "&time=" + time
	xhr.open("post", "/comment" + query);
	xhr.send();
	console.log("comment submitted into database")
	comment.value = ""
	comment.placeholder = "Add comment..."

});

function getTime() {
	var now = new Date();
	time = ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " @ " + now.getHours() + ':'
		+ ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
			.getSeconds()) : (now.getSeconds())));
	console.log(time);
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