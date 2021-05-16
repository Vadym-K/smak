$(function(){
	$(".btn_menu").on('click', function(){
		var $this = $(this).parents(".navigation");

		if($this.hasClass("open")){
			$this.removeClass("open");
		} else {
			$this.addClass('open');
		}
	});
	$(".wrapper").on('click', function(event) {
		if(!$(event.target).closest('.nav , .btn_menu').length) {
			if($(".navigation").hasClass('open')) {
				$(".navigation").removeClass('open');
			}
		}
	});
	$(".carousel_slick").slick({
		infinite: true,
		dots: false,
		// autoplay: true,
		// autoplaySpeed: 3000,
		arrows: true,
		slidesToScroll: 2,
		slidesToShow: 6,
		responsive: [
			{
			  	breakpoint: 1024,
			  	settings: {
			  		slidesToShow: 4,
			  }

			},
			{
			  	breakpoint: 750,
			  	settings: {
			  		slidesToShow: 3,
			  }

			},
			{
			  	breakpoint: 639,
			  	settings: {
			  		slidesToShow: 2,
			  }

			},
			{
			  	breakpoint: 479,
			  	settings: {
			  		slidesToShow: 1,
			  }

			}
		]
		// initialSlide: 1
	});
    $("a.ancLinks").click(function () { 
	    var elementClick = $(this).attr("href");
	    var destination = $(elementClick).offset().top;
	    $('html,body').animate( { scrollTop: destination }, 1100 );
	    return false;
    });
	$(".carousel_slick_second").slick({
		infinite: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		slidesToScroll: 1,
		slidesToShow: 1
		// initialSlide: 1
	});
	$(".container_cross").on('click', function(){
		var $this = $(this).parents(".team");

		if($this.hasClass("hide_tab")){
			$this.removeClass("hide_tab");
		} else {
			$this.addClass('hide_tab');
		}
	});
	$('.circle_first').circleProgress({
    	value: 0.8
  		}).on('circle-animation-progress', function(event, progress) {
    	$(this).find('span').html(Math.round(90 * progress) + '<i>%</i>');
  	});
	$('.second.circle').circleProgress({
    	value: 0.93
  		}).on('circle-animation-progress', function(event, progress) {
    	$(this).find('span').html(Math.round(96 * progress) + '<i>%</i>');
  	});
  	$('.circle_third').circleProgress({
    	value: 0.75
  		}).on('circle-animation-progress', function(event, progress) {
    	$(this).find('span').html(Math.round(85 * progress) + '<i>%</i>');
  	});
  	$('.circle_fourth').circleProgress({
    	value: 0.88
  		}).on('circle-animation-progress', function(event, progress) {
    	$(this).find('span').html(Math.round(94 * progress) + '<i>%</i>');
  	});
});
function circleInit(){
	$('.circle').circleProgress({
	size: 142,
	fill: "#ffe600",
	startAngle: -Math.PI / 6 * 9,
	emptyFill: "#fff"
	});
	$('.circle_first').circleProgress({}).on('circle-animation-progress', function(event, progress) {
	$(this).find('span').html(Math.round(90 * progress) + '<i>%</i>');
	});
	$('.second.circle').circleProgress({}).on('circle-animation-progress', function(event, progress) {
	$(this).find('span').html(Math.round(96 * progress) + '<i>%</i>');
	});
	$('.circle_third').circleProgress({}).on('circle-animation-progress', function(event, progress) {
	$(this).find('span').html(Math.round(85 * progress) + '<i>%</i>');
	});
	$('.circle_fourth').circleProgress({}).on('circle-animation-progress', function(event, progress) {
	$(this).find('span').html(Math.round(94 * progress) + '<i>%</i>');
	});		
}
$(window).on('scroll', function() {
	  if(isScrolledIntoView('.circle')){
	  	circleInit();
	  	$(window).off('scroll');
	  }
	})

function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(function(){

		var show = true;

	$(window).on('scroll', function(){

		if(!show) return false;
		var w_top = $(window).scrollTop();
		var e_top = $("#anchor_2").offset().top;

			if(w_top + 300 >= e_top){
				$(".spincrement").spincrement({
					thousandSeparator: "",
					duration: 1500
				});

				show = false;
			}
	});
});
$(function() {
	Grid.init();
});
