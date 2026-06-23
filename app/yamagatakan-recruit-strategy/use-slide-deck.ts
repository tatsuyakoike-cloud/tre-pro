"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const NAV_LOCK_MS = 720;

export function useSlideDeck(slideCount: number) {
  const deckRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const navLockedRef = useRef(false);
  const lockTimerRef = useRef<number | null>(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchModeRef = useRef<"horizontal" | "vertical" | null>(null);
  const dragStartRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastTouchTimeRef = useRef(0);

  const clamp = useCallback(
    (index: number) => Math.max(0, Math.min(slideCount - 1, index)),
    [slideCount]
  );

  const slideWidth = useCallback(
    () => deckRef.current?.clientWidth ?? (typeof window !== "undefined" ? window.innerWidth : 0),
    []
  );

  const lockNav = useCallback(() => {
    navLockedRef.current = true;
    if (lockTimerRef.current) window.clearTimeout(lockTimerRef.current);
    lockTimerRef.current = window.setTimeout(() => {
      navLockedRef.current = false;
    }, NAV_LOCK_MS);
  }, []);

  const applyTransform = useCallback(
    (index: number, animate: boolean) => {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = animate ? "" : "none";
      track.style.transform = `translate3d(-${index * slideWidth()}px, 0, 0)`;
    },
    [slideWidth]
  );

  const goTo = useCallback(
    (
      index: number,
      animate = true,
      options?: { force?: boolean; skipLock?: boolean }
    ) => {
      if (navLockedRef.current && !options?.force) return;
      const target = clamp(index);
      if (target === currentRef.current && !options?.force) return;
      applyTransform(target, animate);
      currentRef.current = target;
      setCurrent(target);
      const slide = slideRefs.current[target];
      slideRefs.current.forEach((el, i) => {
        if (el && i !== target) el.scrollTop = 0;
      });
      if (!options?.skipLock) lockNav();
    },
    [applyTransform, clamp, lockNav]
  );

  const step = useCallback(
    (delta: number) => {
      if (navLockedRef.current) return;
      goTo(currentRef.current + delta);
    },
    [goTo]
  );

  const setSlideRef = useCallback((index: number, el: HTMLElement | null) => {
    slideRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const onWheel = (event: WheelEvent) => {
      if (window.matchMedia("(print)").matches || navLockedRef.current) {
        event.preventDefault();
        return;
      }
      const activeSlide = slideRefs.current[currentRef.current];
      if (activeSlide && Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        const canScrollDown =
          activeSlide.scrollTop + activeSlide.clientHeight <
          activeSlide.scrollHeight - 2;
        const canScrollUp = activeSlide.scrollTop > 2;
        if (
          (event.deltaY > 0 && canScrollDown) ||
          (event.deltaY < 0 && canScrollUp)
        ) {
          return;
        }
      }
      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;
      if (Math.abs(delta) < 12) return;
      event.preventDefault();
      if (delta > 0) step(1);
      else step(-1);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1 || navLockedRef.current) return;
      touchModeRef.current = null;
      touchStartRef.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      const dx = event.touches[0].clientX - touchStartRef.current.x;
      const dy = event.touches[0].clientY - touchStartRef.current.y;
      if (!touchModeRef.current && (Math.abs(dx) > 12 || Math.abs(dy) > 12)) {
        touchModeRef.current =
          Math.abs(dx) > Math.abs(dy) * 1.2 ? "horizontal" : "vertical";
      }
      if (touchModeRef.current === "horizontal") event.preventDefault();
    };

    const onTouchEnd = (event: TouchEvent) => {
      lastTouchTimeRef.current = Date.now();
      if (touchModeRef.current !== "horizontal" || navLockedRef.current) {
        touchModeRef.current = null;
        return;
      }
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStartRef.current.x;
      const dy = touch.clientY - touchStartRef.current.y;
      touchModeRef.current = null;
      if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) step(1);
      else step(-1);
    };

    const onMouseDown = (event: MouseEvent) => {
      if (event.button !== 0 || navLockedRef.current) return;
      if (Date.now() - lastTouchTimeRef.current < 500) return;
      const target = event.target as HTMLElement;
      if (
        target.closest("a, button, summary, input, textarea, select, label")
      ) {
        return;
      }
      isDraggingRef.current = true;
      dragStartRef.current = event.clientX;
      const track = trackRef.current;
      if (track) track.style.transition = "none";
      deck.classList.add("is-dragging");
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const track = trackRef.current;
      if (!track) return;
      const dx = event.clientX - dragStartRef.current;
      track.style.transform = `translate3d(${-currentRef.current * slideWidth() + dx}px, 0, 0)`;
    };

    const onMouseUp = (event: MouseEvent) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      deck.classList.remove("is-dragging");
      if (navLockedRef.current) {
        goTo(currentRef.current, true, { force: true, skipLock: true });
        return;
      }
      const dx = event.clientX - dragStartRef.current;
      if (dx < -72) step(1);
      else if (dx > 72) step(-1);
      else goTo(currentRef.current, true, { force: true, skipLock: true });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (navLockedRef.current) return;
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        step(1);
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        step(-1);
      }
    };

    const onResize = () => {
      goTo(currentRef.current, false, { force: true, skipLock: true });
    };

    deck.addEventListener("wheel", onWheel, { passive: false });
    deck.addEventListener("touchstart", onTouchStart, { passive: true });
    deck.addEventListener("touchmove", onTouchMove, { passive: false });
    deck.addEventListener("touchend", onTouchEnd, { passive: true });
    deck.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    goTo(0, false, { force: true, skipLock: true });

    return () => {
      deck.removeEventListener("wheel", onWheel);
      deck.removeEventListener("touchstart", onTouchStart);
      deck.removeEventListener("touchmove", onTouchMove);
      deck.removeEventListener("touchend", onTouchEnd);
      deck.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      if (lockTimerRef.current) window.clearTimeout(lockTimerRef.current);
    };
  }, [goTo, slideWidth, step]);

  return {
    deckRef,
    trackRef,
    current,
    goTo,
    step,
    setSlideRef,
    counterLabel: `${String(current + 1).padStart(2, "0")} / ${String(slideCount).padStart(2, "0")}`,
    isFirst: current === 0,
    isLast: current === slideCount - 1,
  };
}
