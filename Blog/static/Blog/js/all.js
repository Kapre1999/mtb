// JavaScript Document

$(window).scroll(function(){
	let position = $(this).scrollTop();
	if(position >= 440){
		$("#navbarTopFixed").removeClass("bg-transparent");
		$("#navbarTopFixed").removeClass("border-bottom");
		$("#navbarTopFixed").addClass("bgNavbar");
	}
	else{
		$("#navbarTopFixed").removeClass("bgNavbar");
		$("#navbarTopFixed").addClass("bg-transparent");
		$("#navbarTopFixed").addClass("border-bottom");
	}
});


$(document).ready(function(){

	$(".change_active").click(function(){
		$(this).addClass("active");
	});


	$(window).resize(function(){
       if ($(window).width() <= 780) {
       	$(".borderRemove").removeClass('border-right');
       }     
	});



	//DEfine variables
	var bgColor = new Array('#9b59b6','#e74c3c','#e67e22','#55E6C1');
	
	//console.log("color is "+randomClrs);
	
	
	$('#latestPostThree').removeClass('border-right');
	
	$(".rndmBgClr").mouseenter(function(){
		var randomClrs = bgColor[Math.floor(Math.random()*bgColor.length)];
		$('.rndmBgClr').css('background-color',randomClrs);
		$('.rndmBgClr').css('color','#fff');
	});


	$(".authDDClass").on('click',function(){
		var authId = $(this).attr('id');
		localStorage.setItem('idAuth',authId);
	});
});