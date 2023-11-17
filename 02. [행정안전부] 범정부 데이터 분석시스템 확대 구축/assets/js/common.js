$(function() {
	/*>>>>>>>>>> 공통 <<<<<<<<<<*/
	// 스킵네비
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

	/*>>>>>>>>>> 페이지 <<<<<<<<<<*/
});