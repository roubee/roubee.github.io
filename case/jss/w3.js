var slideIndex = 1;
var slideIntervalTime = 5000;
var interval;
showDivs(slideIndex);

function do_slide(){
	interval = setInterval(function(){
		showDivs(slideIndex += 1);
	}, slideIntervalTime);
}

function currentDiv(n) {
	clearInterval(interval);
	interval = setInterval(function(){
		showDivs(slideIndex += 1);
	}, slideIntervalTime);
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var w3Content = document.getElementsByClassName('w3-content');
	for (var j = 0; j < w3Content.length; j++){
		var x = w3Content[j].getElementsByClassName('mySlides');
		var dots = w3Content[j].getElementsByClassName('demo');
		if (n > x.length) {slideIndex = 1}
		if (n < 1) {slideIndex = x.length}
		for (i = 0; i < x.length; i++) {
	  	x[i].style.display = 'none';
		}
		for (i = 0; i < dots.length; i++) {
	  	dots[i].className = dots[i].className.replace(' w3-white', '');
		}
		x[slideIndex-1].style.display = 'block';
		dots[slideIndex-1].className += ' w3-white';
	}
}