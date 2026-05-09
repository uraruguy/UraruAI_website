"use client";

import Image from "next/image";

export function UraruLogo({ width = 140 }: { width?: number }) {
  const bearSize = Math.round(width * 0.26);
  const fontSize = Math.round(bearSize * 0.62);
  const gap = Math.round(width * 0.07);

  return (
    <div style={{ display: "flex", alignItems: "center", gap }}>
      <UraruBear size={bearSize} />
      <span
        style={{
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          fontWeight: 700,
          fontSize,
          color: "#F0EDE4",
          letterSpacing: "0.08em",
          lineHeight: 1,
          textTransform: "uppercase",
        }}
      >
        Uraru{" "}
        <span style={{ color: "#00C4CF" }}>AI</span>
      </span>
    </div>
  );
}

export function UraruBear({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/logo-bear.png"
      width={size}
      height={size}
      alt="Uraru AI bear"
      style={{ objectFit: "contain" }}
      priority
    />
  );
}
