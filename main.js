var menu = document.getElementsByClassName('navigation--mobile')[0];
var active = false;

menu.onclick = function() {
	if(!active) {
		document.getElementsByClassName('navigation')[0].classList.add('active');
	} else {
		document.getElementsByClassName('navigation')[0].classList.remove('active');
	}
	active = !active;
}