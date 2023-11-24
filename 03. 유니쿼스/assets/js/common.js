function fn_layout() {
	const HEADER = $('#header');
	const CONTAINER = $('#container');
	const FOOTER = $('#footer');
	const GNB = $('#gnb');
	const GNBWRAP = $('.gnbWrap');
	const BTNAll = $('.btnAllMenu');

	// CONTAINER HEIGHT
	// $(window).resize(function(){
	// 	CONTAINER.css({'min-height':$(window).height() - HEADER.outerHeight() - FOOTER.outerHeight()});
	// }).resize();

	GNB.mouseenter(function(){
		HEADER.addClass('open');
	});

	GNBWRAP.mouseleave(function(){
		HEADER.removeClass('open');
	});

	$(window).resize(function(){
		if($(window).width() < 1161){
			GNB.off();
			GNBWRAP.off();
		}
	}).resize();

	BTNAll.on('click', function(){
		if($(this).hasClass('close')){
			$(this).removeClass('close').text('전체메뉴 보기');
			HEADER.removeClass('open');
			GNBWRAP.mouseleave(function(){
				HEADER.removeClass('open');
			});
		}else{
			$(this).addClass('close').text('전체메뉴 닫기');
			HEADER.addClass('open');
			GNBWRAP.off();
		}
	});

	
	GNB.find('> li').each(function(){
		let isMore = $(this).has('ul').length;
		if(isMore) $(this).addClass('more');
	});

	GNB.on('focusin', '> li > a', function(){
		$(this).parent().addClass('focus');
		HEADER.addClass('open');
		if($(this).parent().hasClass('more')){
			GNB.on('focusout', 'ul li:last-child > a', function(){
				$(this).parents('li').removeClass('focus');
			});
		}else{
			$(this).on('focusout', function(){
				$(this).parent().removeClass('focus');
			});
		}
	});

	GNB.on('focusout', '> li:last-child > a', function(){
		$(this).parent().removeClass('focus');
		HEADER.removeClass('open');
	});

	// GNB.on('focusin', '> li > a', function(){
	// 	$(this).parent().addClass('focus');
	// 	if($(this).parent().hasClass('more')){
	// 		GNB.on('focusout', 'ul li:last-child > a', function(){
	// 			$(this).parents('li').removeClass('focus');
	// 		});
	// 	}else{
	// 		$(this).on('focusout', function(){
	// 			$(this).parent().removeClass('focus');
	// 		});
	// 	}
	// });


}

$(function() {
	// skipNav
	$("a[href^='#']").click(function(evt){
	  var anchortarget = $(this).attr("href");
	  $(anchortarget).attr("tabindex", -1).focus();
	  $(anchortarget).removeAttr("tabindex");
	 });
	if (window.location.hash) {
		$(window.location.hash).attr("tabindex", -1).focus();
	};
	var skipNav = $("#skipNav a");
	skipNav.focus(function(){
		skipNav.removeClass("on");
		$(this).addClass("on");
	});
	skipNav.blur(function(){
		skipNav.removeClass("on");
	});

	// 레이아웃
	fn_layout();
});