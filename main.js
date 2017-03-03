var menu = document.getElementsByClassName('navigation--mobile')[0];
var menuIcon = document.getElementsByClassName('menu')[0];
var cancelIcon = document.getElementsByClassName('cancel')[0];
var links = document.getElementsByClassName('navigation--link');
var active = false;

menu.onclick = function() {
	if(!active) {
		cancelIcon.style.display = "block";
		menuIcon.style.display = "none";
		for(var i = 0; i < links.length; i++) {
			links[i].onclick = function() {
				document.getElementsByClassName('navigation')[0].classList.remove('active');
			}
		}
		document.getElementsByClassName('navigation')[0].classList.add('active');
	} else {
		cancelIcon.style.display = "none";
		menuIcon.style.display = "block";
		document.getElementsByClassName('navigation')[0].classList.remove('active');
	}
	active = !active;
}
