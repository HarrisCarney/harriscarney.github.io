var offset;

function smoothScroll() {
  var start    = self.pageYOffset;
  var end      = offset;

  var distance = Math.round(start > end ? start - end : end - start);
  var speed    = distance / 15;
  var step     = start > end ? start - speed : start + speed;

  if(distance > 0 && speed < 1) {
    step = start > end ? start - 1 : start + 1;
  }

  if(start !== end) {
    window.scrollTo(0, step);
  }

  if(distance > 0 && (window.innerHeight + window.scrollY) < (document.body.offsetHeight + 60)) {
    requestAnimationFrame(smoothScroll);
  }
}