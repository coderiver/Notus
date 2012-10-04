
$.fn.scrollableAddClones = function(addItems) {
    // grab scrollable plugin
    var scrollable;
    if (!(scrollable = $(this).data('scrollable')) || !scrollable.getConf().circular)
    return;
    // grab scrollable elements and remember it's count
    var nodes = scrollable.getItems();
    var length = nodes.length;

    // grab class for the nodes
    var clonedClass = scrollable.getConf().clonedClass;
    // get wrap object to append the clones to
    var wrap = scrollable.getItemWrap();
    // fill as much nodes as needed for 500 pixels
    if (!addItems) addItems = Math.ceil(1000 / nodes.eq(1).width());
    // create fake container to add the clones to (max 15 clones)
    var newNodesAppend = $('<span />');
    for (var i = 1; i <= (addItems < 15 ? addItems : 15); i++)
    nodes.eq(i % length).clone().addClass(clonedClass).appendTo(newNodesAppend);
    // insert HTML
    newNodesAppend.children().appendTo(wrap);
}

$(document).ready(function() {

	// nav
	$('.nav__item').hoverIntent(
		function () {
			$(this).children('.nav__drop').slideDown();
		}, 
		function () {
			$(this).children('.nav__drop').slideUp();
		}
	);

	// scrollable
	$('.pr-viewed .caro').scrollable({
		next:'.pr-viewed  .caro-next',
		prev:'.pr-viewed .caro-prev',
		circular:true
	});
	$(".pr-viewed .caro").scrollableAddClones();

	$('#stock-1 .caro').scrollable({
		next:'#stock-1 .caro-next',
		prev:'#stock-1 .caro-prev',
		circular:true
	}).navigator({
		navi:'#stock-1 .caronav'
	});
	$("#stock-1 .caro").scrollableAddClones();

	$('#stock-2 .caro').scrollable({
		next:'#stock-2 .caro-next',
		prev:'#stock-2 .caro-prev',
		circular:true
	}).navigator({
		navi:'#stock-2 .caronav'
	});
	$("#stock-2 .caro").scrollableAddClones();

	$('#stock-3 .caro').scrollable({
		next:'#stock-3 .caro-next',
		prev:'#stock-3 .caro-prev',
		circular:true
	}).navigator({
		navi:'#stock-3 .caronav'
	});
	$("#stock-3 .caro").scrollableAddClones();

	// suggest
	$('.header__search-input').keyup(function(){
		sit = $(this).val().length;
		if (sit >= 3) {
			$('.header__search .suggest').fadeIn(500);
		};
	});
	$('.header__search-input').blur(function() {
		$('.header__search .suggest').fadeOut(500);
	});

	// tabs
	$('.tabs__nav li').click(function(){
		if (!($(this).hasClass('active'))) $(this).addClass('active').siblings().removeClass('active')
			.parents('.tabs').find('.tabs__box').eq($(this).index()).fadeIn(150).siblings('.tabs__box').hide();
		return false;
	});

	// currency
	$('.header__currency-selected').click(function(){
		$(this).next('ul').show('fast');
		return false;
	});
	$('.header__currency ul a').click(function(){
		$('.header__currency-selected').html($(this).html());
		$(this).parent().parent('ul').hide('fast');
		return false;
	});


	//deploy-text
	$('.deploy__link').click(function(){
		if ($(this).parent().hasClass('deploy-text_closed')){
			$(this).parent().animate({height:$(this).prev('.deploy-text__holder').height()});
			$(this).parent().removeClass('deploy-text_closed');
		}
		else{
			$(this).parent().animate({height:"40px"});
			$(this).parent().addClass('deploy-text_closed');
		}
		return false;
	});

	// popup
	$(".header__callback").click(function() {
		$(".popup-wrapper").fadeIn();
		$("#popup__call").slideDown();
		return false
	});
	$("#link-login").click(function() {
		$(".popup-wrapper").fadeIn();
		$("#popup_login").slideDown();
		return false
	});
	$("#link-restore-pass").click(function() {
		$(".popup-wrapper").fadeIn();
		$(".popup").slideUp();
		$("#popup__restore-pass").slideDown();
		return false
	});
	$(".popup-wrapper, .popup__close").click(function() {
		$(".popup").slideUp();
		$(".popup-wrapper").fadeOut();
		return false
	});

/*	if($('.room__caroin').length>0){
		asd = $('.room__caroin').scrollable({
			next:'.room__next',
			prev:'.room__prev',
			circular:true,
			api:true
		});

		asd.onSeek(function(event, index) {
			var currentItem = this.getItems().eq(this.getIndex());
			$('.room__slide').removeClass('room__slide_active');
			currentItem.addClass('room__slide_active');
		});
		$(".room__caroin").scrollableAddClones();
	}



	
	$('.nav>li>a').click(function() {
		if($(this).hasClass('nav__active')){
			$(this).removeClass('nav__active').next().hide();
		}
		else{
			$('.nav>li>a').removeClass('nav__active');
			$('.nav__drop').hide();
			$(this).addClass('nav__active');
			$(this).next().show();
		}
		return false;

	});
	
	$('.h-you__drop').click(function() {
		$('.h-you__dropblock').fadeToggle();
		return false;
	});
	
	$('.select,.size').click(function() {
		$(this).children('.dropdown').fadeToggle();
		$(this).toggleClass('select_active');
	});
	
	$('.promo__wrap').scrollable({vertical:true}).navigator(".promo__nav");


*/

});
