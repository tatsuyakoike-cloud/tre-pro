(function () {
  var deck = document.getElementById("slide-deck");
  if (!deck) return;

  var slides = Array.prototype.slice.call(deck.querySelectorAll(".slide"));
  var counter = document.getElementById("slide-counter");
  var prevBtn = document.querySelector(".slide-prev");
  var nextBtn = document.querySelector(".slide-next");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a[data-slide]"));
  var current = 0;
  var touchStartX = 0;
  var touchStartY = 0;
  var isDragging = false;

  function clamp(index) {
    return Math.max(0, Math.min(slides.length - 1, index));
  }

  function updateCounter(index) {
    current = index;
    var label = String(index + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    if (counter) counter.textContent = label;
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === index);
    });
  }

  function getIndexFromScroll() {
    var width = deck.clientWidth || window.innerWidth;
    return clamp(Math.round(deck.scrollLeft / width));
  }

  function goTo(index, behavior) {
    var target = clamp(index);
    var width = deck.clientWidth || window.innerWidth;
    deck.scrollTo({ left: target * width, behavior: behavior || "smooth" });
    updateCounter(target);
  }

  function onScroll() {
    window.requestAnimationFrame(function () {
      updateCounter(getIndexFromScroll());
    });
  }

  deck.addEventListener("scroll", onScroll, { passive: true });

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
    var delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (delta === 0) return;
    event.preventDefault();
    deck.scrollLeft += delta;
  }, { passive: false });

  deck.addEventListener("touchstart", function (event) {
    if (event.touches.length !== 1) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
    isDragging = true;
  }, { passive: true });

  deck.addEventListener("touchmove", function (event) {
    if (!isDragging || event.touches.length !== 1) return;
    var dx = event.touches[0].clientX - touchStartX;
    var dy = event.touches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy)) {
      event.preventDefault();
    }
  }, { passive: false });

  deck.addEventListener("touchend", function (event) {
    if (!isDragging) return;
    isDragging = false;
    var touch = event.changedTouches[0];
    var dx = touch.clientX - touchStartX;
    var dy = touch.clientY - touchStartY;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goTo(current + 1);
    else goTo(current - 1);
  }, { passive: true });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "PageDown") {
      event.preventDefault();
      goTo(current + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goTo(current - 1);
    }
  });

  window.addEventListener("resize", function () {
    goTo(current, "auto");
  });

  updateCounter(0);
})();
