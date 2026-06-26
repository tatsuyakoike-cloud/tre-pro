import type { ReactNode } from "react";

/** PC（md以上）では意図した位置で改行、スマホでは自然に流れる */
export function PcLines({
  lines,
  always = false,
}: {
  lines: string[];
  always?: boolean;
}) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={index} className={always ? "block" : "md:block"}>
          {line}
        </span>
      ))}
    </>
  );
}

export function renderText(text: string | readonly string[]): ReactNode {
  if (typeof text === "string") return text;
  return <PcLines lines={[...text]} />;
}
