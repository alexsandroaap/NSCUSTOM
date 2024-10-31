$(document).ready(function() {
	// Menu mobile
	$('.hamb-icon').on('click', function() {
		$(this).toggleClass('opened');
		$('#menu').toggleClass('open');
		$('body').toggleClass('open');
		if($(this).hasClass('opened')){
			$('.produzidas').hide();
		}else{
			$('.produzidas').show();
		}
	});
	$('.card-show').click(function(){
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
		var a = $(this).attr('data');
		
		$('div.anothers').each(function(){
			if($(this).hasClass(a)){
				if(!$(this).hasClass('open')) {
					$(this).addClass('open');
					var heightOfchildDiv = $(this).height();
					var parentOffset = $('.card.card-show.active').offset();
					var parentsHeight= $('.card.card-show.active').height();
					var childsTopPostion= (parentOffset.top+parentsHeight);
					$(this).css('top', childsTopPostion+50);
					$(this).css('position', 'absolute');
					$(this).css('left', 0);
				} else {
					$(this).removeClass('open');
				}
			} else {
				$(this).removeClass('open');
			}
		});	
	});

	// $('.card-show').click(function(){
	// 	var a = $(this).attr('data');

	// 	$(this).siblings().removeClass('active');
	// 	$(this).toggleClass('active');
	// 	$('div.anothers').removeClass('open');

	// 	$('div.anothers.' + a).toggleClass('open');
	// });



	$('#modelos').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});

	$('#acabamento').slick({
		slidesToShow: 5,
		slidesToScroll: 2,
		arrows: true,
		dots: true,
		infinite: false,
		responsive: [
			{
			  breakpoint: 1280,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
			  }
			}
		]
	});
	
	$('#produzidas').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		infinite: false,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});

	$('#galeria').slick({
		adaptiveHeight: true,
		arrows: true,
		// centerMode: true,
		// centerPadding: '50px',
		dots: false,
		infinite: true,
		lazyLoad: 'progressive',
		slidesToShow: 3,
		slidesToScroll: 3,
		// variableWidth: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true
			  }
			}
		]
	});

	$('#custom-gallery').slick({
		arrows: true,
		dots: false,
		infinite: false,
		lazyLoad: 'progressive'
	});


	$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});