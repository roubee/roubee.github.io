$(function(){
	$('#sign-step2').hide();
	$('#sign-step3').hide();
	$('#sign-step2').removeClass('hide');
	$('#sign-step3').removeClass('hide');
});

function signupStepShow(nowID,nextID){
	$('#sign-step'+nowID).hide();
	$('#sign-step'+nextID).fadeIn('slow');
}