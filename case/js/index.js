$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });

    do_slide();

    $(".service-block").hover(function() {
		$(this).find('.service-mask').css('display', 'none');
		var arrow = $(this).find('.service-arrow');
		var width = parseInt(arrow.css('width').replace('px',''));
		width = width*-1;
		arrow.css('background-position', width+'px 0');
		
		var icon = $(this).find('.service-icon');
		width = parseInt(icon.css('width').replace('px',''));
		var position = icon.css('background-position').split(" ");
		var x = parseInt(position[0].replace('px',''));
		x = x-width;
		icon.css('background-position', x+'px 0');
    }, function() {
		$(this).find('.service-mask').css('display', 'block');
		$(this).find('.service-arrow').css('background-position', '0 0');
		
		var icon = $(this).find('.service-icon');
		var width = parseInt(icon.css('width').replace('px',''));
		var position = icon.css('background-position').split(" ");
		var x = parseInt(position[0].replace('px',''));
		x = x+width;
		icon.css('background-position', x+'px 0');
    });

	$('.case-title').hover(function() {
		var name = $(this).attr('class').split(' ');
		name = name[1];
		name = ".mask"+name.match(/\d+/g);
		console.log("name1="+name);
		$(name).css('background-color', 'rgba(0,0,0,1)');
	}, function() {
		var name = $(this).attr('class').split(' ');
		name = name[1];
		name = ".mask"+name.match(/\d+/g);
		console.log("name2="+name);
		$(name).css('background-color', 'rgba(171,127,65, 0.8);');
	});
});

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
	var x = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('demo');
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