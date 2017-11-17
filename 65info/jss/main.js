var windowWidth = "innerWidth" in window
	? window.innerWidth
	: document.documentElement.clientWidth;

$('#nav-member-account').click(function(){
	$('#nav-member-dialog').toggle();
});

$('#nav-hamburger').click(function(){
	$('#ui-hamburger-menu').toggleClass('active');
	$('#nav-menu-parent').slideToggle();
	$('#nav-member-dialog').hide();
});

if(windowWidth < 768){
	$('#nav-menu-child-title').click(function(){
		$(this).toggleClass('title--active');
		$('#nav-menu-child').slideToggle();
	});
}

$('.ui-drop-down').click(function(event){
	event.stopPropagation();
	$(this).find('.item--selected').toggleClass('item--active');
	$(this).find('.item__list').toggle();
});

$('.ui-drop-down').find('.option').click(function(){
	var parentEl = $(this).closest('.ui-drop-down');
	parentEl.find('.option--selected').text($(this).text());
});

$(document).click(function(){
	var dropdownEl = $('.ui-drop-down');
	dropdownEl.find('.item--selected').removeClass('item--active');
	dropdownEl.find('.item__list').hide();
});

$('.ui-input').on('focus', function() {
	if(windowWidth < 768){
		$('#nav-logo').slideUp();
		$('.main').addClass('main--up');
		$('html, body').animate({scrollTop: $(this).offset().top});
	}
});

$('.ui-input').focus( function() {
	if(windowWidth < 768){
		$('nav').hide();
	}
});

$('.ui-input').blur( function() {
	if(windowWidth < 768){
		$('nav').show();
	}
})

$('.ui-keywords').click(function(event){
	event.stopPropagation();
});

$(function(){
	var scroll = $(window).scrollTop();

	if(windowWidth >= 768){
		if(scroll > 0){
			$('#nav-logo').slideUp();
			$('.main').addClass('main--up');
		}else{
			$('#nav-logo').slideDown();
			$('.main').removeClass('main--up');
		}
	}
});

$(window).scroll(function(){
	var scroll = $(window).scrollTop();

	if(windowWidth >= 768){
		if(scroll > 0){
			$('#nav-logo').slideUp();
			$('.main').addClass('main--up');
		}else{
			$('#nav-logo').slideDown();
			$('.main').removeClass('main--up');
		}
	}
});