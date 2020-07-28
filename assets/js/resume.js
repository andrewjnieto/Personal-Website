$(document).ready(function () {
	$('.header').backstretch("assets/backgrounds/background2.jpg");
	$("#copyright").html("© Andrew Nieto " + new Date().getFullYear());
	stickyMenu();
	smoothAnchors();
	clickableArrow();
	changePageMenuColors();
});


function stickyMenu() { 
	const navbar = document.getElementById("resume-navbar");
	const sticky = navbar.offsetTop;
	window.onscroll = () => {
		if (window.pageYOffset >= sticky) {
			navbar.style.position = "fixed";
			navbar.style.top = "0";
		} else {
			navbar.style.position = "absolute";
			navbar.style.top = "100%";
		}
	};
}

function smoothAnchors() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
}

function clickableArrow() {
	//When the user clicks on the down arrow, aboutme section will scroll into view.
	$("#down-icon").on("click", function(e) {
		e.preventDefault();
		document.getElementById("aboutme-content").scrollIntoView({
			behavior : 'smooth'
		});
	});
}

function changePageMenuColors() {
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
}