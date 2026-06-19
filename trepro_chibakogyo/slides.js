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
  var wheelLocked = false;

  function clamp(index) {
    return Math.max(0, Math.min(slides.length - 1, index));
  }

  function slideWidth() {
    return deck.clientWidth || window.innerWidth;
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

  function goTo(index, animate) {
    var target = clamp(index);
    applyTransform(target, animate);
    updateCounter(target);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      goTo(current - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      goTo(current + 1);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var id = link.getAttribute("data-slide");
      var target = slides.findIndex(function (slide) {
        return slide.id === id;
      });
      if (target >= 0) goTo(target);
    });
  });

  deck.addEventListener("wheel", function (event) {
    if (window.matchMedia("(print)").matches) return;
    event.preventDefault();
    if (wheelLocked) return;
    var delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (Math.abs(delta) < 8) return;
    wheelLocked = true;
    if (delta > 0) goTo(current + 1);
    else goTo(current - 1);
    window.setTimeout(function () {
      wheelLocked = false;
    }, 420);
  }, { passive: false });

  deck.addEventListener("touchstart", function (event) {
    if (event.touches.length !== 1) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }, { passive: true });

  deck.addEventListener("touchend", function (event) {
    var touch = event.changedTouches[0];
    var dx = touch.clientX - touchStartX;
    var dy = touch.clientY - touchStartY;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goTo(current + 1);
    else goTo(current - 1);
  }, { passive: true });

  deck.addEventListener("mousedown", function (event) {
    if (event.button !== 0) return;
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
    var dx = event.clientX - dragStartX;
    if (dx < -60) goTo(current + 1);
    else if (dx > 60) goTo(current - 1);
    else goTo(current);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      goTo(current + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goTo(current - 1);
    }
  });

  window.addEventListener("resize", function () {
    goTo(current, false);
  });

  goTo(0, false);
})();
