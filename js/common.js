
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

	// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}



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

	$('#vishlist .caro').scrollable({
		next:'#vishlist .caro-next',
		prev:'#vishlist .caro-prev'
	}).navigator({
		navi:'#vishlist .caronav'
	});

	$('#preview .caro').scrollable({
		next:'#preview .caro-next-l',
		prev:'#preview .caro-prev-l'
	});
	$("#preview .caro").scrollableAddClones();

	$('#discount-set .caro').scrollable({
		next:'#discount-set .caro-next',
		prev:'#discount-set .caro-prev'
	});
	$("#discount-set .caro").scrollableAddClones();

	$('#goods1 .caro').scrollable({
		next:'#goods1 .caro-next',
		prev:'#goods1 .caro-prev'
	});
	$("#goods1 .caro").scrollableAddClones();

	$('#goods2 .caro').scrollable({
		next:'#goods2 .caro-next',
		prev:'#goods2 .caro-prev'
	});
	$("#goods2 .caro").scrollableAddClones();

	$('#goods3 .caro').scrollable({
		next:'#goods3 .caro-next',
		prev:'#goods3 .caro-prev'
	});
	$("#goods3 .caro").scrollableAddClones();

	$('#goods4 .caro').scrollable({
		next:'#goods4 .caro-next',
		prev:'#goods4 .caro-prev'
	});
	$("#goods4 .caro").scrollableAddClones();

	$('#gds1 .caro').scrollable({
		next:'#gds1 .caro-next',
		prev:'#gds1 .caro-prev'
	});
	$("#gds1 .caro").scrollableAddClones();

	$('#gds2 .caro').scrollable({
		next:'#gds2 .caro-next',
		prev:'#gds2 .caro-prev'
	});
	$("#gds2 .caro").scrollableAddClones();



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



//form validation

	$('#order-form .btn').click(function(){
		var errnum = 0;
		$('#order-form .required').each(function(){
			if($(this).val() == ""){
				$(this).parent('.row').removeClass('st-well').addClass('st-err')
				errnum++;
			}
			else{
				$(this).parent('.row').addClass('st-well').removeClass('st-err')
			}
		});
		if (errnum != 0) {return false;}
	});

// tabs
	$('.tabs__nav li').click(function(){
		if (!($(this).hasClass('active'))) $(this).addClass('active').siblings().removeClass('active')
			.parents('.tabs').find('.tabs__box').eq($(this).index()).fadeIn(150).siblings('.tabs__box').hide();
		return false;
	});
	$('.q-and-a .question').click(function() {
		$(this).next().slideToggle('fast');
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



// basket
	$(".header__basket").click(function() {
		$(".popup-wrapper").fadeIn();
		$("#basket").slideDown();
		return false
	});

	$(".popup-wrapper, .basket__close, .buy-more").click(function() {
		$("#basket").slideUp();
		$(".popup-wrapper").fadeOut();
		return false
	});

	$(".basket__item .close").click(function() {
		$(this).parent(".basket__item").slideUp();
		return false
	});

	$('.basket__counter-p').click(function(){
		var count = parseInt($(this).prev('input').val());
		if (count < 1) {$(this).prev('input').val(1);} 
		else {$(this).prev('input').val(count+1);}
		return false;
	});
	
	$('.basket__counter-m').click(function(){
		var count = parseInt($(this).next('input').val());
		if (count <= 1) {$(this).parent().parent(".basket__item").slideUp();} 
		else {$(this).next('input').val(count-1);}
		return false;
	});

	
//filters
	$('.filter-block__top').click(function(){
		if ($(this).parent().hasClass('filter-block_open')) {
			$(this).parent().removeClass('filter-block_open');
			$(this).next().slideUp();
		}
		else{
			$(this).parent().addClass('filter-block_open');
			$(this).next().slideDown();
		};
		return false;
	});

	if ($(".options-list").exists()){
		$(".options-list span:contains('(0)')").parent().parent().addClass('disabled');
	};

	$('.selected-filters .cancel, .compare__cansel').click(function(){
		$(this).parent().remove();
		return false;
	});

	$('.selected-filters .clear-filter').click(function(){
		$(this).prev('ul').children('li').remove();
		return false;
	});

	$(".filter-block .filter-link").click(function(){
		if ($(this).hasClass('filter-link_all')) {
			$(this).prev('.options-list_all').slideDown();
			$(this).html('популярные');
			$(this).removeClass('filter-link_all');
		}
		else{
			$(this).prev('.options-list_all').slideUp();
			$(this).html('все');
			$(this).addClass('filter-link_all');
		}
		return false;
	});


// fancyBox
	if ($(".img-fancy").exists()){
		$(".img-fancy").fancybox({
			wrapCSS    : 'fancybox-custom',
			closeClick : true,
			openEffect : 'elastic',
			openSpeed  : 150,
			closeEffect : 'elastic',
			closeSpeed  : 150,
			closeClick : true,
			helpers : {
				title : {
					type : 'inside'
				},
				overlay : {
					css : {
						'background' : 'rgba(0,0,0,0.7)'
					}
				}
			}
		});
	};


//another
	$('.cabinet__form .another').click(function(){
		$(this).prev().clone().insertBefore($(this)).show();
	});


// vishlist delete item
	$('.stock__remove').click(function(){
		$(this).parent().remove();
	});


// vishlist delete item
	$('.cabinet__form .delete').click(function(){
		$(this).parent().remove();
	});

//slider
	if ($("#slider-price").exists()){
		$( "#slider-price" ).slider({
			range: true,
			values: [ 900, 30000 ],
			min:0,
			max:30000,
			slide: function( event, ui ) {
				$("#scale-price__to").val(ui.values[ 0 ]);
				$("#scale-price__from").val(ui.values[ 1 ]);
			}
		});
		$("#scale-price__to").val($( "#slider-price" ).slider( "values", 0 ));
		$("#scale-price__from").val($( "#slider-price" ).slider( "values", 1 ));
	};

	if ($("#slider-diagonal").exists()){
		$( "#slider-diagonal" ).slider({
			range: true,
			values: [ 13, 15 ],
			min:4,
			max:20,
			step:0.1,
			slide: function( event, ui ) {
				$("#scale-diagonal__to").val(ui.values[ 0 ]);
				$("#scale-diagonal__from").val(ui.values[ 1 ]);
			}
		});
		$("#scale-diagonal__to").val($( "#slider-diagonal" ).slider( "values", 0 ));
		$("#scale-diagonal__from").val($( "#slider-diagonal" ).slider( "values", 1 ));
	};

// preview
	$(".preview__item").click(function() {
		var prevlink = $(this).children().attr('href');
		$(".product__img img").attr('src', prevlink);
		$(".product__img").attr('href', prevlink);
		return false;
	});


//comprare
	$('.comprare .tl-item__del').click(function(){
		tname = $(this).parent().parent().attr('class');
		$(this).parent().parent().remove();
		var tdd2 = $('.comprare__text').find("."+tname).remove();
	});


// accordion
	$(".accordion-link").click(function() {
		if ($(this).parent('li').hasClass('open')) {
			$(this).parent('li').removeClass('open');
			$(this).next('ul').slideUp();
		}
		else{
			$(this).parent('li').addClass('open').siblings(".accordion li").removeClass('open');
			$(".accordion ul").slideUp();
			$(this).next('ul').slideDown();
		};
		return false;
	});


// bottom-panel
	$(".bottom-panel__btn").click(function() {
		if ($(this).parent().hasClass('bottom-panel_hide')) {
			$(this).parent().animate({bottom:'0'});
			$(this).parent().removeClass('bottom-panel_hide');
		}
		else{
			$(this).parent().animate({bottom:'-49px'});
			$(this).parent().addClass('bottom-panel_hide');
		};
		return false;
	});

});




