"use strict";

$(window).on("scroll", function() {
    if($(window).scrollTop() > 20) {
        $(".site-header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".site-header").removeClass("active");
    }
});


$(document).ready(function(){
	$('[data-fancybox=galerija1]').fancybox({
		loop: true,
		baseTpl:
			    '<div class="fancybox-container" role="dialog" tabindex="-1">' +
			    '<div class="fancybox-bg"></div>' +
			    '<div class="fancybox-inner">' +
			    '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
			    '<div class="fancybox-toolbar">{{buttons}}</div>' +
			    '<div class="fancybox-navigation">{{arrows}}</div>' +
			    '<div class="fancybox-stage"><h1>PAPILDOMAI</h1></div>' +
			    '<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
			    '</div>' +
			    '</div>',
	});
});


var slider = tns({
	container: '.hero-slider',
	items: 1,
	mouseDrag: true,
	autoplay: true,
	autoplayTimeout: 4000,
	controlsText: ["ankstesnis", "sekantis"],
	navContainer: '.button-block'
});


$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 0, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });





// Mobile menu
document.querySelector(".burger").addEventListener("click", function(){
	console.log("menu paspaustas");
	document.querySelector(".main-nav").classList.toggle("show");
	document.querySelector(".burger").classList.toggle("pressed");


});

// Scroll to specific values
// scrollTo is the same
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
        });
      }
    }
  });


  function show_confirm() {
    var r = confirm("Do you wish to send the form?");
    if (r == true) {
    alert("The form is sent!");
    } else {
      alert("Form is not sent!");
    }
  }