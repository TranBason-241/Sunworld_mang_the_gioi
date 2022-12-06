$('.button-comments').on('click', function() {
	$('.sidebar_comment_box').toggleClass('visible');
	if ($('.sidebar_comment_box').hasClass('visible')) {
        $('#overlay').fadeIn();
	}
	else {
        $('#overlay').fadeOut();
	}
});

$('.close-x').on('click', function(){
	$('.button-comments').trigger('click');
});