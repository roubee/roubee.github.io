$(function(){
	$('#sign-step2').hide();
	$('#sign-step3').hide();
	$('#sign-step2').removeClass('hide');
	$('#sign-step3').removeClass('hide');

	$.widget('custom.iconselectmenu', $.ui.selectmenu, {
      _renderItem: function( ul, item ) {
        var li = $('<li>'),
          wrapper = $('<div>', { text: item.label } );
 
        if (item.disabled) {
          li.addClass('ui-state-disabled');
        }
 
        $('<span>', {
          style: item.element.attr('data-style'),
          'class': 'ui-icon ' + item.element.attr('data-class')
        })
          .appendTo(wrapper);
 
        return li.append(wrapper).appendTo(ul);
      }
    });

	$('#country-code')
      .iconselectmenu()
      .iconselectmenu('menuWidget')
      .addClass('ui-menu-icons avatar');
});

function signupStepShow(nowID,direction){
	if (direction == 'next'){
		$('#sign-step'+nowID).hide();
		$('#sign-step'+(nowID+1)).fadeIn('slow');

		$('#sign-step-li'+nowID).removeClass('active');
		$('#sign-step-li'+nowID).addClass('done');
		$('#sign-step-li'+(nowID+1)).removeClass('undone');
		$('#sign-step-li'+(nowID+1)).addClass('active');
	}else if (direction == 'prev'){
		$('#sign-step'+nowID).hide();
		$('#sign-step'+(nowID-1)).fadeIn('slow');

		$('#sign-step-li'+nowID).removeClass('active');
		$('#sign-step-li'+nowID).addClass('undone');
		$('#sign-step-li'+(nowID-1)).removeClass('done');
		$('#sign-step-li'+(nowID-1)).addClass('active');
	}
	
}