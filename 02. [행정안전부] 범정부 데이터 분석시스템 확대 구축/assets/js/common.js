function fn_layout() {
	const HEADER = $('#header');
	const CONTAINER = $('#container');
	const FOOTER = $('#footer');
	const GNB = $('#gnb');
	const BTNSITEMAP = $(".btnSiteMap");
	const SITEMAP = $('.siteMap');
	const BTNMENU = $('.btnMenu');
	const BTNCLOSE = $('.btnClose');
	const GNBWRAP = $('.gnbWrap');

	// CONTAINER HEIGHT
	$(window).resize(function(){
		CONTAINER.css({'min-height':$(window).height() - HEADER.outerHeight() - FOOTER.outerHeight()});
	}).resize();

	// GNB
	GNB.find('> li').each(function(){
		let isMore = $(this).has('ul').length;
		if(isMore) $(this).addClass('more');
	});

	// 사이트맵
	BTNSITEMAP.on('click', function(){
		let isClose = $(this).hasClass('close');
		if(isClose){
			$(this).removeClass('close').text('사이트맵 열기');
			SITEMAP.slideUp(200);
		}else{
			$(this).addClass('close').text('사이트맵 닫기');
			SITEMAP.slideDown(200);
		}
	});

	// GNB FOCUS
	GNB.on('focusin', '> li > a', function(){
		$(this).parent().addClass('focus');
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

	// 모바일 GNB
	BTNMENU.on('click', function(){
		GNBWRAP.addClass('open');
		GNBWRAP.find('.gnbInner').append(`
			<button type="button" class="btnClose">메뉴닫기</button>
		`)
	});

	GNBWRAP.on('click', '.btnClose', function(){
		GNBWRAP.removeClass('open');
		$(this).remove();
	});

	GNB.on('click', '> li.more > a', function(e){
		e.preventDefault();
		if($(this).hasClass('open')){
			GNB.find('> li > a').removeClass('open');
			GNB.find('ul').slideUp(200);
		}else{
			GNB.find('> li > a').removeClass('open');
			GNB.find('ul').slideUp(200);
			$(this).addClass('open');
			$(this).siblings().slideDown(200);
		}
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