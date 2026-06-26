"use client";

import { useEffect, useState } from "react";

export function InotecHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`inotec-header${scrolled ? " is-scrolled" : ""}`}>
      {children}
    </header>
  );
}

export function InotecMobileNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <details className="relative md:hidden">
      <summary className="inotec-nav-toggle list-none cursor-pointer rounded-lg border border-white/25 px-3 py-2 text-sm font-bold text-white">
        メニュー
      </summary>
      <div className="inotec-mobile-nav">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
        <a href="#entry">エントリー</a>
      </div>
    </details>
  );
}
