(function($){
	$.fn.tabs = function(){
		var tabs = this;
		
		if(tabs.length == 0) return tabs;
		
		tabs.find('.tab-title a').click(function(event){
			event.preventDefault();
			var id = $(this).attr('rel');
			tabs.find('.tab-title .active').removeClass('active');
			tabs.find('.tab-content').hide().filter('#' + id).show();
			$(this).addClass('active');
		});
		
		tabs.find('.tab-content').hide().filter('#' + tabs.find('.tab-title .active').attr('rel')).show();
		
		return this;
	}
})(jQuery);

$(document).ready(function(){
	$('.show-more > a').click(function(event){
		event.preventDefault();
		if($('.hide-span').hasClass('stt-show')){
			$('.hide-span').slideUp('slow');
			$('.hide-span').removeClass('stt-show');
			$(this).text('Xem Thêm');
		}
		else{
			$('.hide-span').slideDown('slow');
			$('.hide-span').addClass('stt-show');
			$(this).text('Thu Gọn');
			$(this).addClass('stt-show');
		}
	});
	$('.btn-toggle').click(function(event){
		event.preventDefault();
		if($(window).width() < 768){
			$('ul.nav').slideToggle('slow');
		}	
	});
	$('.btn-toggle2').click(function(event){
		event.preventDefault();
		if($(window).width() < 484){
			$('ul.tabs').slideToggle('slow');
		}	
	});
	
	(function (){
		var els = [	'section', 'article', 'hgroup', 'header', 'footer', 'nav', 'aside', 
		'figure', 'mark', 'time', 'ruby', 'rt', 'rp' ];
		for (var i=0; i<els.length; i++){
			document.createElement(els[i]);
			}
	})();

});
 jQuery(window).resize(function(){
	if($(window).width() < 484){
		$('ul.tabs').hide();
	}
	else{
		$('ul.tabs').show();
	}
	
	if($(window).width() < 768){
		$('ul.nav').hide();
	}
	else{
		$('ul.nav').show();
	}	
 })