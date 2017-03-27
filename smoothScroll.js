var offset, start_time = null;

Math.smoothStep = function(x) {
  return x * x * (3 - 2 * x);
}

Math.easeInQuad = function (time, begin, change, duration) {
  var v = Math.smoothStep(time /= duration);

  if((v * 2) > 1) {
    return change
  }

  return change * v * time;
}

function smoothScroll() {
  start_time == null ? start_time = performance.now() : null;

  var start = self.pageYOffset;
  var end = Math.round(offset);

  if(end + self.innerHeight > document.body.offsetHeight) {
    end = (document.body.offsetHeight - self.innerHeight) + 60;
  }

  var distance = Math.sqrt(Math.pow(end - start, 2));

  var speed = Math.easeInQuad(performance.now() - start_time, start, distance, 3000);
  var step = start > end ? start - speed : start + speed;

  if(start !== end) {
    window.scrollTo(0, Math.round(step));
  }

  if(distance > 0 && (self.innerHeight + self.pageYOffset) < (document.body.offsetHeight + 61)) {
    requestAnimationFrame(smoothScroll);
  } else {
    start_time = null;
  }
}