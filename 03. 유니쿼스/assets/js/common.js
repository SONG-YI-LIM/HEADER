function fn_layout() {
	const HEADER = $('#header');
	const CONTAINER = $('#container');
	const FOOTER = $('#footer');
	const GNB = $('#gnb');
	const GNBWRAP = $('.gnbWrap');

	// CONTAINER HEIGHT
	// $(window).resize(function(){
	// 	CONTAINER.css({'min-height':$(window).height() - HEADER.outerHeight() - FOOTER.outerHeight()});
	// }).resize();

	GNB.mouseover(function(){
		HEADER.addClass('open');
		
		GNBWRAP.mouseout(function(){
			HEADER.removeClass('open');
			console.log("떠나라")
		});
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