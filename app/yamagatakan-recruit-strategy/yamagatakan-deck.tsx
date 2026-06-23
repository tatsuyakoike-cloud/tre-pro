"use client";

import { useEffect, useMemo } from "react";
import { navItems, slides } from "./yamagatakan-slides";
import { useSlideDeck } from "./use-slide-deck";
import "./yamagatakan.css";

export default function YamagatakanDeck() {
  const {
    deckRef,
    trackRef,
    current,
    goTo,
    step,
    setSlideRef,
    counterLabel,
    isFirst,
    isLast,
  } = useSlideDeck(slides.length);

  const slideIndexById = useMemo(() => {
    const map = new Map<string, number>();
    slides.forEach((slide, index) => map.set(slide.id, index));
    return map;
  }, []);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const onContactClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href="#contact"]');
      if (!link) return;
      event.preventDefault();
      const contactIndex = slideIndexById.get("next");
      if (contactIndex !== undefined) goTo(contactIndex);
    };

    deck.addEventListener("click", onContactClick);
    return () => deck.removeEventListener("click", onContactClick);
  }, [deckRef, goTo, slideIndexById]);

  const slideClass = (variant?: string) => {
    if (variant === "hero") return "yk-slide yk-hero";
    if (variant === "alt") return "yk-slide is-alt";
    if (variant === "dark") return "yk-slide is-dark";
    return "yk-slide";
  };

  return (
    <div className="yk-root h-full">
      <header className="yk-header no-print">
        <nav className="yk-nav" aria-label="ページ内ナビゲーション">
          {navItems.map((item) => {
            const index = slideIndexById.get(item.id);
            if (index === undefined) return null;
            return (
              <button
                key={item.id}
                type="button"
                className={current === index ? "is-active" : undefined}
                onClick={() => goTo(index)}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
        <p className="yk-counter" aria-live="polite">
          {counterLabel}
        </p>
        <button
          className="yk-print no-print"
          type="button"
          onClick={() => window.print()}
        >
          印刷 / PDF
        </button>
      </header>

      <div
        ref={deckRef}
        className="yk-deck"
        tabIndex={0}
        aria-label="提案スライド"
      >
        <div ref={trackRef} className="yk-track">
          {slides.map((slide, index) => (
            <section
              key={slide.id}
              id={slide.id}
              ref={(el) => setSlideRef(index, el)}
              className={slideClass(slide.variant)}
              data-page={String(index + 1).padStart(2, "0")}
              aria-hidden={current !== index}
            >
              {slide.variant === "hero" ? (
                slide.content
              ) : (
                <div className="yk-slide-inner">{slide.content}</div>
              )}
            </section>
          ))}
        </div>
      </div>

      <div className="yk-controls no-print">
        <button
          type="button"
          className="yk-ctrl-btn slide-prev"
          aria-label="前のスライド"
          disabled={isFirst}
          onClick={() => step(-1)}
        >
          ‹
        </button>
        <p className="yk-swipe-hint">スワイプでスライド切替</p>
        <p className="yk-scroll-hint">スクロールでスライド切替</p>
        <div className="yk-dots" aria-hidden="true">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`yk-dot${current === index ? " is-active" : ""}`}
              aria-label={`スライド ${index + 1}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="yk-ctrl-btn slide-next"
          aria-label="次のスライド"
          disabled={isLast}
          onClick={() => step(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
