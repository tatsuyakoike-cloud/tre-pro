"use client";

export function InotecHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <header className="inotec-header">{children}</header>;
}

export function InotecMobileNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <details className="relative lg:hidden">
      <summary className="inotec-nav-toggle" aria-label="メニューを開く">
        メニュー
      </summary>
      <div className="inotec-mobile-nav">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </div>
    </details>
  );
}
