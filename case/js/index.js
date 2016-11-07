$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });

    do_slide();
});

var slideIndex = 1;
var slideIntervalTime = 5000;
showDivs(slideIndex);

function do_slide(){
	interval = setInterval(function(){
    	showDivs(slideIndex += 1);
	}, slideIntervalTime);
 }

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
  	x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
  	dots[i].className = dots[i].className.replace(" w3-white", "");
	}
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " w3-white";
}