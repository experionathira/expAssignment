var response;
function loadImage() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	    response=JSON.parse(this.responseText);
	    for (var i = 0; i < response.data.length; i++) {
	  	

	  	var img_caption= response.data[i].caption;
	  	var path=response.data[i].imageUrl;

	  	var div= document.createElement("div");
	  	div.setAttribute("id","div"+i);
	  	document.getElementById('center').appendChild(div);
	  	var img=document.createElement("IMG");
	  	img.setAttribute("src",path);
	  	document.getElementById("div"+i).appendChild(img);

	  	var h=document.createElement("P");
	 	var head=document.createTextNode(img_caption);
	 	h.appendChild(head);
	 	document.getElementById("div"+i).appendChild(h);
	  	
	  	};
   	}
  };
  xhttp.open("GET", "https://exptest.herokuapp.com/api/imageGallery", true);
  xhttp.send();


  console.log("hai");

};

function logout() {
	window.location.href="index.html";
}

