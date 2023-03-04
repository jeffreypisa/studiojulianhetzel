import $ from "jquery";

export function mobilemenu() {
	$(".js-menu").on("click", function() {
		$("body").toggleClass("menuopen");
		$("body").toggleClass("opensidemenu");
		$(".js-mobilemenu").toggleClass("open");
	});
	
	$('.braces').mouseover(function() {
		$('.braces').addClass('hover');
	});
	
	$('.braces').mouseleave(function() {
		$('.braces').removeClass('hover');
	});
	
	$( ".taalcontent .nav .nav-item" ).each(function() {
	  var language = $(this).find('div').text();
	  var newlanguage = language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ' + language + ' ';
	  $(this).find('div').text(newlanguage);
	});
	
}