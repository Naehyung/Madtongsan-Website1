window.onscroll = function() {
	
	myFunction()
	
};



var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 200) {
	  header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var slideIndex = 1;
showDivs(slideIndex);
setInterval(function(){ showDivs(++slideIndex); }, 3500);


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("slides");
	  if (n > x.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";  
	  }
	  
	  x[slideIndex-1].style.display = "block";
	  
}

function initMap() {
	  // The location of Uluru
	  const madtongsan = { lat: -27.471125360081984, lng: 153.02526298733775 };
	  // The map, centered at Uluru
	  const map = new google.maps.Map(document.getElementById("googleMap"), {
	    zoom: 16,
	    center: madtongsan,
	  });
	  // The marker, positioned at Uluru
	  const marker = new google.maps.Marker({
	    position: madtongsan,
	    map: map,
	    title: "Madtongsan2"
	  });
	}
	
	
