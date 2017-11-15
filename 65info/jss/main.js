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