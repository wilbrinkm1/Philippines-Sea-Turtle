


var general = [
	{
		num0: "FLOOD CENTER",
		num1: "NJ FLOOD",
		num2: "NEW JERSEY PROPERTY FAX"
	}

]


var info = [
	//	Industry Slider
	{
		num0: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		num1: "media/landing/engineers_surveyors.png",
		num2: "INDUSTRIES",
		num3: "Industries Quick Info: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	//	Realtor Industry
	{
		num0: "media/landing/real_estate_professionals.png",
		num1: "REALTORS",
		num2: "Realtor Quick Info: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		num3: "Learn More"
	},
	// 	Mortgage Banks
	{
		num0: "media/landing/mortgage_banks.png",
		num1: "MORTGAGE BANKS",
		num2: "Mortgage Banks Quick Info: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		num3: "Learn More"
	},
	// Engineers & Surveyors 
	{
		num0: "media/landing/engineers_surveyors.png",
		num1: "ENGINEERS & SURVEYORS",
		num2: "Mortgage Banks Quick Info: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		num3: "Learn More"
	}
]




$(document).ready(function($) {
	$("#leftPic").attr("src", info[0].num1);
	$("#industryTitle").text(info[0].num2);
	$("#industryText").text(info[0].num3);
	TweenLite.to($("#loading"), 1.4, {opacity:0, delay: 1, onComplete: myFunction});
	function myFunction() {
		TweenLite.to($("#loading"), 0.2, {display:"none"})
		var tl = new TimelineMax()
		.from("#navlogo", 0.75, {xPercent: -100})
		.to("#navlogo", 0.75, {opacity: 1}, "-=0.75")
		.to("#navtitle", 1.2, {text:"WESTERN TECHNOLOGIES GROUP LLC", ease:Linear.easeNone})
		.from("#floodcenter", 0.75, {xPercent: -100})
		.to("#floodcenter", 0.75, {opacity: 1}, "-=0.75")
		.from("#njflood", 0.75, {xPercent: -100})
		.to("#njflood", 0.75, {opacity: 1}, "-=0.75")
		.from("#njpf", 0.75, {xPercent: -100})
		.to("#njpf", 0.75, {opacity: 1}, "-=0.75")
		.from("#logindummy", 0.75, {yPercent: 100})
		.to("#logindummy", 0.75, {opacity: 1}, "-=0.75")
/*
		.staggerFrom([floodcenter, njflood, njpf, logindummy], 2.25, {xPercent: -100}, 0.75)
		.to([floodcenter, njflood, njpf, logindummy], 2.25, {opacity: 1}, "-=2.25")

		.staggerFrom([floodcenter, njflood, njpf, logindummy], 2, {x:-100})
		.staggerTo([floodcenter, njflood, njpf, logindummy]), 2, {opacity: 1}) */
		;        
	}
	
});


var slideIn = 1;




// Prototype industry code

$(document).ready(function(){
  $("#industry1").click(function(){
  	slideIn = slideIn++;
  	console.log(slideIn);
  	if (slideIn % 2) {
  		$("#leftPicB").attr("src", info[1].num0);
		$("#industryTitleB").text(info[1].num1);
		$("#industryTextB").text(info[1].num2);
		TweenLite.defaultEase = Power3.easeInOut;
  	  	var tl = new TimelineMax() 
	  	tl.to("#slide1", 1, {scale:0.5, opacity: 0})
	  	  .to("#slide1", 0.1, {display: "none"})
  	  	  .from("#slide2", 1, {xPercent:-100}, "-=1");
  	} else {
	  	$("#leftPic").attr("src", info[1].num0);
		$("#industryTitle").text(info[1].num1);
		$("#industryText").text(info[1].num2);
		TweenLite.defaultEase = Power3.easeInOut;
		var tl = new TimelineMax() 
		tl.to("#slide1", 1, {scale:0.5, opacity: 0})
		  .to("#slide1", 0.1, {display: "none"})
	  	  .from("#slide2", 1, {xPercent: 100}, "-=1");
  	}
  });
});





$(document).ready(function(){
  $("#industry2").click(function(){
  	slideIn = slideIn++;
  	console.log(slideIn);
  	if (slideIn % 2) {
	    $("#leftPic").attr("src", info[1].num0);
		$("#industryTitle").text(info[1].num1);
		$("#industryText").text(info[1].num2);
		TweenLite.defaultEase = Power3.easeInOut;
		var tl = new TimelineMax()
		tl.to("#slide1", 0.5, {scale: 0.5, opacity: 0.5})
		  .to("#slide1", 0.75, {xPercent: -100})
		  .from("#slide2", 0.75, {xPercent: 100}, "-=0.75")
		  .to("#slide1", 0.1, {display: "none"})
		  .from("#slide2", 0.5, {scale: 0.5, opacity: 0.5});
  	} else {
  		$("#leftPic").attr("src", info[1].num0);
		$("#industryTitle").text(info[1].num1);
		$("#industryText").text(info[1].num2);
		TweenLite.defaultEase = Power3.easeInOut;
		var tl = new TimelineMax() 
		tl.to("#slide2", 1, {scale:0.5, opacity: 0})
		  .to("#slide2", 0.1, {display: "none"})
	  	  .from("#slide1", 1, {xPercent:-100}, "-=1")
	  	  .to("#slide2", 0.1, {display: "none"})
		  .from("#slide1", 0.5, {scale: 0.5, opacity: 0.5});
  	}
  });
});





/*
$(document).ready(function(){
	$("#industry2").click(function(){
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax() 
	tl.to("#slide1", 1, {scale:0.5, opacity: 0})
	  .to("#slide1", 0.1, {display: "none"})
  	  .from("#slide2", 1, {yPercent: 100}, "-=1");
	});
});
*/

$(document).ready(function(){
	$("#industry3").click(function(){
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax() 
	tl.to("#slide1", 1, {scale:0.5, opacity: 0})
	  .to("#slide1", 0.1, {display: "none"})
  	  .from("#slide2", 1, {scale: 0, opacity: 0}, "-=1");
	});
});

$(document).ready(function(){
	$("#industry4").click(function(){
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax() 
	tl.from("#slide2", 1, {yPercent:-100})
	  
	  .to("#slide1", 1, {scale:0.5, opacity: 0}, "-=1")
  	  .to("#slide1", 0.1, {display: "none"});
	});
});


$(document).ready(function(){
	$("#industry5").click(function(){
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax()
	tl.to("#slide1", 0.5, {scale: 0.5, opacity: 0.5})
	  .to("#slide1", 0.75, {xPercent: -100})
	  .from("#slide2", 0.75, {xPercent: 100}, "-=0.75")
	  .to("#slide1", 0.1, {display: "none"})
	  .from("#slide2", 0.5, {scale: 0.5, opacity: 0.5});
	});
});

$(document).ready(function(){
	$("#industry6").click(function(){
	TweenLite.defaultEase = Power3.easeInOut;
	var tl = new TimelineMax() 
	tl.to("#slide1", 1, {yPercent: 100})
	  .from("#slide2", 1, {yPercent: -100}, "-=1")
  	  .to("#slide1", 0.1, {display: "none"});
	});
});

























jQuery(document).ready(function($) {

    $(".nav-link").click(function(event) {
        event.preventDefault(); 

        var defaultAnchorOffset = 0;
        
        var $anchor = $('#' + this.hash.substring(1));
                
        var anchorOffset = $anchor.data('anchor-offset');
        if (!anchorOffset) // for when anchor doesn't have the offset attribute like Section 4
            anchorOffset = defaultAnchorOffset; 

        $('html,body').animate({ 
            scrollTop: $anchor.offset().top - anchorOffset
        }, 500);        
    });
});

$(document).ready(function(){
  $(".nav-link").hover(function(){
    TweenLite.to($(this), 0.5, {backgroundColor: "#003366"})
    TweenLite.to($(this), 0.5, {color: "#ffffff"});
  });
}); 

$(document).ready(function(){
  $(".nav-link").mouseleave(function(){
    TweenLite.to($(this), 0.5, {backgroundColor: "#ffffff"})
    TweenLite.to($(this), 0.5, {color: "#003366"});
  });
}); 


/*$(document).ready(function(){
	$("#njpf").hover(function(){
		var tl = new TimelineLite();
		tl.to("#njpfFlap", 0.5, {width:"25%"})
		.from("#flaptitle", 0.5, {opacity:0})
		.from("#flaptext", 0.5, {opacity:0});
	$("#njpf").mouseleave(function(){
		tl.reverse();
	});
});
*/

$(document).ready(function(){
var tl = new TimelineLite();
	$(document).on("mouseenter","#floodcenter",function(){
		$("#flaptitle").text(general[0].num0);
		tl.to("#njpfFlap", 0.01, {backgroundColor:"#000000"})
		.to("#njpfFlap", 0.5, {width:"25%"})
		.to("#flaptitle", 0.2, {opacity:1})
		.to("#flaptext", 0.2, {opacity:1});
	});
	$(document).on("mouseleave", "#floodcenter", function(){
		$("#flaptitle").text(general[0].num0);
		tl.to("#flaptext", 0.2, {opacity:0})
		.to("#flaptitle", 0.2, {opacity:0})
		.to("#njpfFlap", 0.5, {width:"0%"});
	});
	$(document).on("mouseenter","#njflood",function(){
		$("#flaptitle").text(general[0].num1);
		tl.to("#njpfFlap", 0.01, {backgroundColor:"#000000"})
		.to("#njpfFlap", 0.5, {width:"25%"})
		.to("#flaptitle", 0.2, {opacity:1})
		.to("#flaptext", 0.2, {opacity:1});
	});
	$(document).on("mouseleave", "#njflood", function(){
		$("#flaptitle").text(general[0].num1);
		tl.to("#flaptext", 0.2, {opacity:0})
		.to("#flaptitle", 0.2, {opacity:0})
		.to("#njpfFlap", 0.5, {width:"0%"});
	});

	$(document).on("mouseenter","#njpf",function(){
		$("#flaptitle").text(general[0].num2);
		tl.to("#njpfFlap", 0.01, {backgroundColor:"#990000"})
		.to("#njpfFlap", 0.5, {width:"25%"})
		.to("#flaptitle", 0.2, {opacity:1})
		.to("#flaptext", 0.2, {opacity:1});
	});
	$(document).on("mouseleave", "#njpf", function(){
		$("#flaptitle").text(general[0].num2);
		tl.to("#flaptext", 0.2, {opacity:0})
		.to("#flaptitle", 0.2, {opacity:0})
		.to("#njpfFlap", 0.5, {width:"0%"});
	});	
});

















$(document).ready(function(){
	$("#industrytrigger1").click(function(){
		var tl = new TimelineLite();
		tl.to("#industrywrapper1", 1, {maxWidth:"100%"})
		.to("#industrywrapper2", 2, {maxWidth:"0%"}, -1);
	});
});

$(document).ready(function(){
	$("#industrytrigger2").click(function(){
		TweenLite.to("#industrywrapper1", 1, {maxWidth:"0%"})
		TweenLite.to("#industrywrapper2", 1, {maxWidth:"100%"});
		/*var tl = new TimelineLite();
		tl.to("#industrywrapper1", 1, {maxWidth:"0%"})
		.to("#industrywrapper2", 1, {maxWidth:"100%"}, -1);*/
	});
});

$(document).ready(function(){
	$("#backdroptrigger2").click(function(){
		var tl = new TimelineLite();
		tl.to("#backdrop", 1, {scale:1.8, opacity:0})
		.to("#backdrop", 0.1, {backgroundImage:"url('media/heldtablet.png')"})
		.to("#backdrop", 1, {scale: 1, opacity:1}, 1.5)

		/*.to("#backdropcaption", 3.2, {scrambleText:"This is the new text"});*/
		.to("#backdropcaption", 1.2, {text:"This is the new text", ease:Linear.easeNone	});
	});
});








/*



Previous code








$(document).ready(function(){
	$("#backdroptrigger2").click(function(){
		var tl = new TimelineLite();
		tl.to("#backdrop", 1, {scale:1.8, opacity:0})
		.to("#backdrop", 0.1, {backgroundImage:"url('media/leasecontract.png')"})
		.fromTo("#backdrop", 1, {scale: 0.8, opacity:0},{scale: 1, opacity: 1});
	});
});





$(document).ready(function(){
var tl = new TimelineLite();
	$(document).on("mouseenter","#njflood",function(){
			tl.to("#njpfFlap", 0.01, {backgroundColor:"#990000"})
			.to("#njpfFlap", 0.5, {width:"25%"})
			.to("#flaptitle", 0.2, {opacity:1})
			.to("#flaptext", 0.2, {opacity:1});
			}).on("mouseleave", "#njflood", function(){
				tl.reverse();
				console.log("reversed");
	});
});





*/



