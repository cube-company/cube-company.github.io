$(document).ready(function() {
	$('.hamburger').on('click',function(){
	   
	   $('.mymenu').slideToggle();

	});
});


$(document).ready(function(){
  $('.scrolldown').click(function(event){
  	 $('html,body').animate({scrollTop:'+=950px'}),800;
  });
  return false;
});