(function () {
  var deck = document.getElementById("slide-deck");
  var track = document.getElementById("slide-track");
  if (!deck || !track) return;

  var slides = Array.prototype.slice.call(track.querySelectorAll(".slide"));
  var counter = document.getElementById("slide-counter");
  var prevBtn = document.querySelector(".slide-prev");
  var nextBtn = document.querySelector(".slide-next");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a[data-slide]"));
  var current = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var dragStartX = 0;
  var isDragging = false;
  var touchActive = false;
  var navLocked = false;
  var lockTimer = null;
  var lastTouchTime = 0;
  var NAV_LOCK_MS = 720;

  function clamp(index) {
    return Math.max(0, Math.min(slides.length - 1, index));
  }

  function slideWidth() {
    return deck.clientWidth || window.innerWidth;
  }

  function lockNav() {
    navLocked = true;
    window.clearTimeout(lockTimer);
    lockTimer = window.setTimeout(function () {
      navLocked = false;
    }, NAV_LOCK_MS);
  }

  function applyTransform(index, animate) {
    track.style.transition = animate === false ? "none" : "";
    track.style.transform = "translate3d(-" + index * slideWidth() + "px, 0, 0)";
  }

  function updateCounter(index) {
    current = clamp(index);
    var label = String(current + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    if (counter) counter.textContent = label;
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === current);
    });
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === slides.length - 1;
  }

  function goTo(index, animate, options) {
    var opts = options || {};
    if (navLocked && !opts.force) return;
    var target = clamp(index);
    if (target === current && !opts.force) return;
    applyTransform(target, animate);
    updateCounter(target);
    if (!opts.skipLock) lockNav();
  }

  function step(delta) {
    if (navLocked) return;
    goTo(current + delta);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      step(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      step(1);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      if (navLocked) return;
      var id = link.getAttribute("data-slide");
      var target = slides.findIndex(function (slide) {
        return slide.id === id;
      });
      if (target >= 0) goTo(target);
    });
  });

  deck.addEventListener("wheel", function (event) {
    if (window.matchMedia("(print)").matches || navLocked) {
      event.preventDefault();
      return;
    }
    var delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (Math.abs(delta) < 12) return;
    event.preventDefault();
    if (delta > 0) step(1);
    else step(-1);
  }, { passive: false });

  deck.addEventListener("touchstart", function (event) {
    if (event.touches.length !== 1 || navLocked) return;
    touchActive = true;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }, { passive: true });

  deck.addEventListener("touchmove", function (event) {
    if (!touchActive || event.touches.length !== 1) return;
    var dx = event.touches[0].clientX - touchStartX;
    var dy = event.touches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
      event.preventDefault();
    }
  }, { passive: false });

  deck.addEventListener("touchend", function (event) {
    if (!touchActive) return;
    touchActive = false;
    lastTouchTime = Date.now();
    if (navLocked) return;
    var touch = event.changedTouches[0];
    var dx = touch.clientX - touchStartX;
    var dy = touch.clientY - touchStartY;
    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) step(1);
    else step(-1);
  }, { passive: true });

  deck.addEventListener("mousedown", function (event) {
    if (event.button !== 0 || navLocked) return;
    if (Date.now() - lastTouchTime < 500) return;
    if (event.target.closest("a, button, summary, input, textarea, select, label")) return;
    isDragging = true;
    dragStartX = event.clientX;
    track.style.transition = "none";
    deck.classList.add("is-dragging");
  });

  window.addEventListener("mousemove", function (event) {
    if (!isDragging) return;
    var dx = event.clientX - dragStartX;
    track.style.transform = "translate3d(" + (-current * slideWidth() + dx) + "px, 0, 0)";
  });

  window.addEventListener("mouseup", function (event) {
    if (!isDragging) return;
    isDragging = false;
    deck.classList.remove("is-dragging");
    if (navLocked) {
      goTo(current, true, { force: true, skipLock: true });
      return;
    }
    var dx = event.clientX - dragStartX;
    if (dx < -72) step(1);
    else if (dx > 72) step(-1);
    else goTo(current, true, { force: true, skipLock: true });
  });

  document.addEventListener("keydown", function (event) {
    if (navLocked) return;
    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      step(1);
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      step(-1);
    }
  });

  window.addEventListener("resize", function () {
    goTo(current, false, { force: true, skipLock: true });
  });

  goTo(0, false, { force: true, skipLock: true });
})();
