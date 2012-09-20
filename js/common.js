
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
	
	if($('.room__caroin').length>0){
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

	$('.lookevent__caro').scrollable({
		next:'.lookevent__next',
		prev:'.lookevent__prev',
		circular:true
	});
	$(".lookevent__caro").scrollableAddClones();

	
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




});
