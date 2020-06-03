$(document).ready(function () {
	$('.top-content').backstretch("assets/backgrounds/background6.jpg");
	$("#copyright").html("© Andrew Nieto " + new Date().getFullYear());
	var navbar = document.getElementById("resume-navbar");
	var sticky = navbar.offsetTop;

	//If the view goes past a certain point, 
	window.onscroll = () => {
		if (window.pageYOffset >= sticky) {
			navbar.style.position = "fixed";
			navbar.style.top = "0";
		} else {
			navbar.style.position = "absolute";
			navbar.style.top = "100%";
		}
	};

	//If the user clicks on one of the links on the navbar, will have a smooth scroll animation.
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

	//When the user clicks on the down arrow, aboutme section will scroll into view.
	$("#down-icon").on("click", function(e) {
		e.preventDefault();
		document.getElementById("aboutme-content").scrollIntoView({
			behavior : 'smooth'
		});
	});

	//If the user clicks on one of the links on the navbar,
	// the active class will be added to the list item.
	$('.navbar-nav li').on('click', function(event) {
		$(this).parents().find('li').removeClass('active');
		$(this).addClass('active');
	});

	var topMenuHeight = $("#resume-navbar").outerHeight()+15,
	scrollItems = $("#resume-navbar").find("a").map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { 
			return item; 
		}
	});
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;

	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	   	if ($(this).offset().top < fromTop)
	   		return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   // Set/remove active class
	   $("#resume-navbar").find("a").parent().removeClass("active")
	   .end().filter("[href='#"+id+"']").parent().addClass("active");
	});

});