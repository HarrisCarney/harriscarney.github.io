var menu = document.getElementsByClassName('navigation--mobile')[0];
var menuIcon = document.getElementsByClassName('menu')[0];
var cancelIcon = document.getElementsByClassName('cancel')[0];

var active = false;

var navContainer = document.getElementsByClassName('navigation')[0];
var links = document.getElementsByClassName('navigation--link');

function toggleIcon() {
	if(active) {
		cancelIcon.style.display = "block";
		menuIcon.style.display = "none";

		for(var i = 0; i < links.length; i++) {
			links[i].onclick = function() {
				cancelIcon.style.display = "none";
				menuIcon.style.display = "block";
				navContainer.classList.remove('active');
				active = false;

				event.preventDefault();
				var href = this.getAttribute("href");
				offset = document.querySelector(href).getBoundingClientRect().top - document.body.getBoundingClientRect().top;
				smoothScroll();
			}
		}

		navContainer.classList.add('active');
	} else {
		cancelIcon.style.display = "none";
		menuIcon.style.display = "block";
		navContainer.classList.remove('active');
	}
}

for(var i = 0; i < links.length; i++) {
	links[i].onclick = function() {
		event.preventDefault();
		var href = this.getAttribute("href");
		offset = document.querySelector(href).getBoundingClientRect().top - document.body.getBoundingClientRect().top;
		smoothScroll();
	}
}

menu.onclick = function() {
	active = !active;
	toggleIcon();
}
