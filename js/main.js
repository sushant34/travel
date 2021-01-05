$(window).scroll(function(){
	if($(this).scrollTop()>50)
	{
		$(".bg-light").addClass("fix")
	}
	else{

		$(".bg-light").removeClass("fix")
	}

})



$(document).ready(function(){
  $('.testomonial').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    reponsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
});

$(document).ready(function(){
  $('.blog-slide').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    reponsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
});
