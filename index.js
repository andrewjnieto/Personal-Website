$(document).ready(function () {
	$('.top-content').backstretch("assets/backgrounds/background6.jpg");
	var navbar = document.getElementById("resume-navbar");
	var sticky = navbar.offsetTop;
	window.onscroll = () => {
	  if (window.pageYOffset >= sticky) {
	    navbar.style.position = "fixed";
	    navbar.style.top = "0";
	  } else {
	   	navbar.style.position = "absolute";
	    navbar.style.top = "100%";
	}
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
}
});