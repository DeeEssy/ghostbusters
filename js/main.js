$(function(){
	const mMenuBtn = $('.m-menu')
	const mNav = $('.m-nav')
	mMenuBtn.on('click', function(){
		mNav.toggleClass('active')
		$('body').toggleClass('no-scroll')
	})
	var mySwiper = new Swiper ('.swiper-container', {
		spaceBetween: 25,
		slidesPerView: 4,
	    loop: true,
	    breakpoints: {
	    	992: {
	    		slidesPerView: 4,
	    	},
	    	768: {
	    		slidesPerView: 2,
	    	},
	    	320: {
	    		slidesPerView: 1,
	    	},
	    },
 	})
 	$('.choice-view').click(function() {
	  $('.choice-view').removeClass('active')
	  $(this).addClass('active')
	  let activeChoiceContent = $(this).attr("data-target");
      $(".gallery").removeClass("visible")
      $(activeChoiceContent).toggleClass("visible")
	})
})
