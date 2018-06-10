function showAside() {
	$('#slide').css('left' , '0px');
	$('#slide-backdrop').css('display' , 'block');
}

function hideAside() {
	$('#slide').css('left' , '-270px');
	$('#slide-backdrop').css('display' , 'none');
	$('.slide-item__active').removeClass('slide-item__active');
}

$('.slide-item').click(function() {
	$('.slide-item__active').removeClass('slide-item__active');
	$(this).addClass('slide-item__active');
});


