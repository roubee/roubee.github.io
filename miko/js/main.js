var windowWidth = 'innerWidth' in window
    ? window.innerWidth
    : document.documentElement.clientWidth;
var device = 'mobile';
var pcSize = 769;

$(function(){
	if(windowWidth >= pcSize){
		device = 'pc';
	}
});

$(window).resize(function(){
	windowWidth = 'innerWidth' in window
        ? window.innerWidth
        : document.documentElement.clientWidth;
	if(windowWidth >= pcSize){
		device = 'pc';
	}else{
		device = 'mobile';
	}

	if(device == 'pc'){
		$('#nav__bottom-wrap').show();
	}else{
		$('#nav__bottom-wrap').hide();
	}
});

$('#nav__btn-hamburger').click(function(){
	if(device == 'mobile'){
		$('#nav__bottom-wrap').toggle();
	}
	$('#nav__bottom-wrap').show();
	// return false;
});

$('#footer__btn-totop').click(function(){
	$('html,body').animate({scrollTop: 0});
	// return false;
});