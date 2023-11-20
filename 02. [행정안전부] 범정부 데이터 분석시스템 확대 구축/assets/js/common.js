function fn_layout() {
	const HEADER = $('#header');
	const CONTAINER = $('#container');
	const FOOTER = $('#footer');
	const GNB = $('#gnb');
	const BTNSITEMAP = $(".btnSiteMap");

	// CONTAINER HEIGHT
	$(window).resize(function(){
		CONTAINER.css({'min-height':$(window).height() - HEADER.outerHeight() - FOOTER.outerHeight()});
	}).resize();

	// GNB
	GNB.find('> li').each(function(){
		let $isMore = $(this).has('ul').length;
		if($isMore) $(this).addClass('more');
	});

	// SITEMAP 메뉴
	// if(BTNSITEMAP.length){
	// 	HEADER.append(`
	// 		<div class="siteMap">
	// 			<div class="inner">
	// 				${GNB.html()}
	// 			</div>
	// 		</div>
	// 	`)
	// };

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