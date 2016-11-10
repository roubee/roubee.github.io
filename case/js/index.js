var windowWidth = "innerWidth" in window
	? window.innerWidth
	: document.documentElement.clientWidth; //ie8以下
var scrollVal = 0;
$(window).resize(function () {
	windowWidth = "innerWidth" in window
		? window.innerWidth
		: document.documentElement.clientWidth; //ie8以下
	if(windowWidth>=1200 && scrollVal<=0){
		change_lg_menu(0);
	}else{
		change_lg_menu(1);
	}
});
$(function(){
	window.scrollTo(0,0);
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
		name = '.mask'+name.match(/\d+/g);
		console.log('name1='+name);
		$(name).css('background-color', 'rgba(0,0,0,1)');
	}, function() {
		var name = $(this).attr('class').split(' ');
		name = name[1];
		name = '.mask'+name.match(/\d+/g);
		console.log('name2='+name);
		$(name).css('background-color', '');
	});

	$('.footer-block4').hover(function() {
		$('.footer-note').css('background-position', '-40px 0');
	}, function() {
		$('.footer-note').css('background-position', '0 0');
	});

	$('.level1').hover(
		function() {
			var x = $(this).children('.level2-block');
			var y = x.css('display');
			$(this).find('.arrow').css('display', 'block');
			if (x.length && y != 'none'){
				$(this).css('border-bottom','0');
			}else{
				$(this).css('border-bottom','2px solid #bf955a');
			}
		}, function() {
			var x = $(this).children('.level2-block');
			var y = x.css('display');
			$(this).find('.arrow').css('display', 'none');
			if (x.length && y != 'none'){
				$(this).find('.arrow').css('display', 'block');
			}else{
				$(this).find('.arrow').css('display', 'none');
			}
			if (x.length && y != 'none'){
				$(this).css('border-bottom','0');
			}else{
				$(this).css('border-bottom','0');
			}
		}
	);
	$('.level1').click(function() {
		$('.level2-block').css('display','none');
		$('.arrow').css('background-position', '0 0');
		$('.arrow').css('display', 'none');
		$('.level1').find('a').css('font-weight','normal');
		var x = $(this).children('.level2-block');
		var y = x.css('display');
		if (x.length){
			if (y != 'none'){
				x.slideUp();
				$(this).find('.arrow').css('background-position', '0 0');
				$(this).find('>:first-child').css('font-weight','normal');
				$(this).find('.arrow').css('display', 'none');
			}else{
				x.slideDown();
				$(this).find('.arrow').css('background-position', '0 -12px');
				$(this).find('>:first-child').css('font-weight','bold');
				$(this).find('.arrow').css('display', 'block');
			}
		}
	});
	
	$('.nav-menuBtn').mousedown(function(){
		$(this).css('background-position','-30px 0');
	});

	$('.nav-menuBtn').mouseup(function(){
		$(this).css('background-position','0 0');
	});
	
	$('.nav-menuBtn').focus(function(){
    	if (!$(this).data("mouseDown"))
        $(this).click();
	});
});

$(window).bind('scroll', function(){
	scrollVal = $(window).scrollTop();
	if(windowWidth>=1200 && scrollVal<=0){
		change_lg_menu(0);
	}else{
		change_lg_menu(1);
	}
});

function change_lg_menu(type){
	if (type == 0) {
		$('.nav-center').slideDown();
		$('.banner').css('margin-top', '135px');
		$('.logo1').show();
		$('.logo2').hide();
		$('.nav-mail').css({'margin-top':'20px'});
		$('.nav-menuBtn').css('display', 'none');
	} else {
		$('.nav-center').hide();
		$('.banner').css('margin-top', '0');
		$('.logo1').hide();
		$('.logo2').show();
		$('.nav-mail').css({'margin-top':'30px'});
		$('.nav-menuBtn').css('display', 'block');
	}
}

function openMenu(){
	var x = $('.nav-right-side').css('width');
		if (x == '0px'){
			$('.nav-right-side').animate({'width':'280px'});
			$('.nav-right-side').css('display', 'block');
		}else{
			$('.nav-right-side').animate({'width':'0px'});
			$('.nav-right-side').css('display', 'none');
		}
}

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