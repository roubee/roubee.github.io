$('#nav__btn-hamburger').click(function(){
	$('#nav__bottom-wrap').toggle();
	return false;
});

$('#footer__btn-totop').click(function(){
	$('html,body').animate({scrollTop: 0});
	return false;
});