"use client";

export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Cyan blob */}
      <div
        className="absolute"
        style={{
          width: 800,
          height: 800,
          top: 0,
          left: 0,
          background:
            "radial-gradient(circle, rgba(0,196,207,0.15) 0%, transparent 65%)",
          filter: "blur(80px)",
          animation: "drift-cyan 50s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Sky blue blob */}
      <div
        className="absolute"
        style={{
          width: 700,
          height: 700,
          top: 0,
          left: 0,
          background:
            "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
          animation: "drift-blue 38s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Teal blob */}
      <div
        className="absolute"
        style={{
          width: 650,
          height: 650,
          top: 0,
          left: 0,
          background:
            "radial-gradient(circle, rgba(13,148,136,0.10) 0%, transparent 65%)",
          filter: "blur(80px)",
          animation: "drift-teal 65s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Indigo accent blob */}
      <div
        className="absolute"
        style={{
          width: 550,
          height: 550,
          top: 0,
          left: 0,
          background:
            "radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
          animation: "drift-indigo 45s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Deep teal blob */}
      <div
        className="absolute"
        style={{
          width: 600,
          height: 600,
          top: 0,
          left: 0,
          background:
            "radial-gradient(circle, rgba(15,118,110,0.09) 0%, transparent 65%)",
          filter: "blur(80px)",
          animation: "drift-deep-teal 55s ease-in-out infinite",
          willChange: "transform",
        }}
      />
    </div>
  );
}
