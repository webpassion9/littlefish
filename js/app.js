$(document).ready(function() {

	// -------------------
	// main video bg delay before start
	// -------------------

	$('.section-main__bg-video').css('opacity', '1');

	// -------------------
	// equal height
	// -------------------	
	
	$('.js-equal-cols-wrapper').each(function(){  
		$('.col').each(function() {
			highestBox = $(this).height();
			$(this).find('.js-equal-item').css('min-height', highestBox);
		});
	});

	// --------------------------------------------------------------------------
	// blocks info opening
	// --------------------------------------------------------------------------

	$('.item-info__more').on('click',function(){
		$(this).closest('.item-info').find('.item-info__hidden').slideToggle(300);
		$(this).closest('.item-info').toggleClass('active');
    })

	// --------------------------------------------------------------------------
	// testiominals slider
	// --------------------------------------------------------------------------
	$('.testiominal-container').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: false,
		adaptiveHeight: true,
		infinite: true,
		touchThreshold: 30,
		mobileFirst: true,
		rows: 0,
		swipeToSlide: true,
		prevArrow: $('.testiominals-arrow-prev'),
		nextArrow: $('.testiominals-arrow-next'),
		  responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
			{
				breakpoint: 1400,
				settings: {
				  dots: false,
				  arrrow: true
				}
			  }
		  ]
	});

	// --------------------------------------------------------------------------
	// header scroll
	// --------------------------------------------------------------------------
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > 0) {
			$('.header').addClass('fixed');
		}
		else {
			$('.header').removeClass('fixed');
		}
	});

	$(window).on('scroll', function(){
		var offset_head = $(".head-section").height() - $(".header").height();
		if ($(window).scrollTop() > offset_head) {
			$('.head-menu-wrapper, .progress').addClass('fixed');
		}
		else {
			$('.head-menu-wrapper, .progress').removeClass('fixed');
		}
	});

	// --------------------------------------------------------------------------
	// mob menu
	// --------------------------------------------------------------------------

	$('.btn-mob-menu').on('click',function(event){
        $(".header-menu").toggleClass('active');
		$(".btn-mob-menu").toggleClass('active');
		$("body").toggleClass('is-menu-active');
    })

	// --------------------------------------------------------------------------
	// header menu
	// --------------------------------------------------------------------------
	$('.header-menu > li > .arrow-menu').on('click', function(){
		$(this).parent('li').toggleClass('active');
    });
	$('.header-menu > li > ul > li > .arrow-menu').on('click', function(){
		$(this).parent('li').toggleClass('active');
    });

	// --------------------------------------------------------------------------
	// progress scroll
	// --------------------------------------------------------------------------
	$(window).on("scroll resize", function() {
		var o = $(window).scrollTop() / ($(document).height() - $(window).height());
		$(".progress-line").css({
			"width": (100 * o | 0) + "%"
		});
	})

	// --------------------------------------------------------------------------
	// wow js
	// --------------------------------------------------------------------------
	wow = new WOW(
		{
			boxClass:     'wow',      // default
			animateClass: 'animated', // default
			offset:       100,          // default
			mobile:       true,       // default
			live:         true        // default
		}
	)
	wow.init();


	// --------------------------------------------------------------------------
	// Fancybox
	// --------------------------------------------------------------------------
	$('[data-fancybox]').fancybox({
		autoFocus: false,
		touch: false
	});


	// --------------------------------------------------------------------------
	// select
	// --------------------------------------------------------------------------
	$('select').select2({
		width: '100%',
		placeholder: function(){
			$(this).data('placeholder');
		}
	});


});
