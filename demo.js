$(document).ready(function(){
	$(".parent-slick").slick({
		infinite: false,
		dots: true,
		arrows: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$(".parent-slick-multi").slick({
		infinite: false,
		dots: false,
		arrows: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3
	});



});