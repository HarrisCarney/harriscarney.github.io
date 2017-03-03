var menu = document.getElementsByClassName('navigation--mobile')[0];
var links = document.getElementsByClassName('navigation--link');
var active = false;

menu.onclick = function() {
	if(!active) {
		for(var i = 0; i < links.length; i++) {
			links[i].onclick = function() {
				document.getElementsByClassName('navigation')[0].classList.remove('active');
			}
		}
		document.getElementsByClassName('navigation')[0].classList.add('active');
	} else {
		document.getElementsByClassName('navigation')[0].classList.remove('active');
	}
	active = !active;
}
