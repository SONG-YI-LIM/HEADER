// 레이아웃
function fn_layout(){
	const HEADER = $('#header');
	const CONTAINER = $('#container');
	const FOOTER = $('#footer');
	const BTNMENU = $('.btnMenu');
	const GNBWRAP = $('.gnbWrap');
	const GNB = $('#gnb');
	
	// CONTAINER HEIGHT
	$(window).resize(function(){
		CONTAINER.css({'min-height':$(window).height() - HEADER.outerHeight() - FOOTER.outerHeight()});
	}).resize();

	// GNB OPEN/CLOSE
	BTNMENU.on('click', function(){
		let isOpen = $(this).hasClass('close');
		if(isOpen){
			GNBWRAP.removeClass('open');
			$(this).removeClass('close').text('메뉴열기');
		}else{
			GNBWRAP.addClass('open');
			$(this).addClass('close').text('메뉴닫기');
		}
	});

	// GNB FOCUS
	GNB.on('focusin', '> li > a', function(){
		GNB.addClass('open');
	});
	GNB.on('focusout', 'ul li:last-child a', function(){
		GNB.removeClass('open');
	});
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