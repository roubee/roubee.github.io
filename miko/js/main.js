var windowWidth = 'innerWidth' in window
    ? window.innerWidth
    : document.documentElement.clientWidth;
var device = 'mobile';

$(function(){
	if(windowWidth >= 1280){
		device = 'pc';
	}
});

$(window).resize(function(){
	windowWidth = 'innerWidth' in window
        ? window.innerWidth
        : document.documentElement.clientWidth;
	if(windowWidth >= 1280){
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
	return false;
});

$('#footer__btn-totop').click(function(){
	$('html,body').animate({scrollTop: 0});
	return false;
});