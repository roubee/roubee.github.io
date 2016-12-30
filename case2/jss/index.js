var passwordProgressWidth = parseInt($('.progress').css('width'));
var passwordNormMinLength = 6; //密碼強度最低標準
var passwordNormMaxLength = 10; //密碼強度最高標準
$(function(){
	$('#sign-step2').hide();
	$('#sign-step3').hide();
	$('#sign-step4').hide();
	$('#sign-step2').removeClass('hide');
	$('#sign-step3').removeClass('hide');
	$('#sign-step4').removeClass('hide');

	$('#repw2').hide();
	$('#repw3').hide();
	$('#repw2').removeClass('hide');
	$('#repw3').removeClass('hide');

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

    $('.edit-pen').hover(function(){
    	$(this).attr('src','images/edit2.png');
    },function(){
    	$(this).attr('src','images/edit.png');
    });

    // 密碼強度確認
    $('#sign3-pw-input').bind('input', function(){
    	$('.pw-strength').css('display','block');
    	$(this).addClass('input-error');
    	checkPasswordStrength($(this).val());
    });

    $('.account .content-block').eq(1).css('display','none');

    $('#myname-text').html($('input[name=myname]').val()+' / '+$('input:radio[name=gender]:checked').val());
    $('#company-text').html($('input[name=company]').val());
    $('#country-text').html($('select[name=country-code] option:selected').val());
    $('#phone-text').html($('input[name=phone]').val());
    $('#phoneExt-text').html(' # '+$('input[name=phoneExt]').val());
    $('#mobile-text').html($('input[name=mobile]').val());

    // 會員名稱
    var accountName = $('input[name=myname]').val().charAt(0);
    $('.member .simg').html(accountName);
   	$('.account .myimg .img').html(accountName);

    // cropbox.js (https://github.com/hongkhanh/cropbox)
    var options =
    {
        thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: '' //本來的會員照片路徑
    }
    var cropper = $('.imageBox').cropbox(options);
    $('#account-file').on('change', function(){
        var reader = new FileReader();
        reader.onload = function(e) {
            options.imgSrc = e.target.result;
            cropper = $('.imageBox').cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = [];
    })
    $('#account-btn-crop').on('click', function(){
        var img = cropper.getDataURL();
        $('.edit-pen').eq(0).css('visibility','visible');
        $('#account-cropbox').hide();
        $('.member .simg').css('background-image','url('+img+')');
    	$('.account .myimg .img').css('background-image','url('+img+')');
    	$('body').css('overflow','auto');
    })
    $('#account-btn-zoomIn').on('click', function(){
        cropper.zoomIn();
    })
    $('#account-btn-zoomOut').on('click', function(){
        cropper.zoomOut();
    })
    $('#account-btn-cancel').on('click', function(){
    	$('.edit-pen').eq(0).css('visibility','visible');
        $('#account-cropbox').hide();
        $('body').css('overflow','auto');
    })
});

function checkPasswordStrength(val){
	var per = (passwordProgressWidth/passwordNormMaxLength)*val.length;
	$('.progress-inner').css('width',per+'px');

	if(val.length<passwordNormMinLength){
		$('.progress-inner').css('background-color','#c34141');
		$('#sign3-pw-input').addClass('input-error');
    	$('.pw-error').css('display','block');
    	$('.pw-block .img').css('background-image','url(images/pwStrength1.png)');
	}else{
		$('.progress-inner').css('background-color','#1aa0e5');
		$('#sign3-pw-input').removeClass('input-error');
    	$('.pw-error').css('display','none');
    	$('.pw-block .img').css('background-image','url(images/pwStrength2.png)');
	}
}

function signupStepShow(nowID,direction){
	$('#sign-step'+nowID).hide();
	$('#sign-step-li'+nowID).removeClass('active');
	if (direction == 'next'){
		$('#sign-step'+(nowID+1)).fadeIn('slow');
		$('#sign-step-li'+nowID).addClass('done');
		$('#sign-step-li'+(nowID+1)).removeClass('undone');
		$('#sign-step-li'+(nowID+1)).addClass('active');

		if(nowID==3){
			$('.sign-progressbar-block').css('display','none');
		}
	}else if (direction == 'prev'){
		$('#sign-step'+(nowID-1)).fadeIn('slow');
		$('#sign-step-li'+nowID).addClass('undone');
		$('#sign-step-li'+(nowID-1)).removeClass('done');
		$('#sign-step-li'+(nowID-1)).addClass('active');
	}
	
}

function resetpwStepShow(nowID,direction){
	$('#repw'+nowID).hide();
	$('#repw-title'+nowID).addClass('hide');
	if (direction == 'next'){
		$('#repw-title'+(nowID+1)).removeClass('hide');
		$('#repw'+(nowID+1)).fadeIn('slow');
	}else if (direction == 'prev'){
		$('#repw-title'+(nowID-1)).removeClass('hide');
		$('#repw'+(nowID-1)).fadeIn('slow');
	}
	
}

var accountBlockArr = [
	{
		id: 'account-cropbox',
	},
	{
		id: 'account-mydata',
	},
	{
		id: 'account-mypw'
	}];
function clickEdit(blockID){
	for(var i=0; i<accountBlockArr.length; i++){
		if(blockID==accountBlockArr[i].id){
			$('.edit-pen').eq(i).css('visibility','hidden');
		}
	}

	switch(blockID){
		// 個人照片區塊
		case accountBlockArr[0].id:
			$('#account-cropbox').show();
			$('body').css('overflow','hidden');
			break;
		// 個人資料區塊
		case accountBlockArr[1].id:
			$('#country-code-button').css('display','block');
			$('.input-block').css('display','block');
			$('.span-block').css('display','none');
			$('.account .content-block form button').css('visibility','visible');
			$('.account .content-block form button').css('margin-top','30px');
			break;
		// 個人密碼區塊
		case accountBlockArr[2].id:
			$('.account .content-block').eq(1).css('display','block');
			break;
		default:
			break;
	}
}

function clickCancel(blockID) {
	var blockState = $('#'+blockID).css('display');
	for(var i=0; i<accountBlockArr.length; i++){
		if(blockID==accountBlockArr[i].id){
			$('.edit-pen').eq(i).css('visibility','visible');
		}
	}

	switch(blockID){
		case accountBlockArr[0].id:
			break;
		case accountBlockArr[1].id:
			$('#country-code-button').css('display','none');
			$('.input-block').css('display','none');
			$('.span-block').css('display','block');
			$('#account-mydata button').css('visibility','hidden');
			$('.account .content-block form button').css('margin-top','0px');
			break;
		case accountBlockArr[2].id:
			$('#'+accountBlockArr[2].id).css('display','none');
			break;
		default:
			break;
	}
}