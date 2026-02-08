"use client";
import Image from "next/image";
import brand, { LOGO_SRC, SMOKE_SRC } from "./brand";

export default function NotFoundPage() {
  return (
    <div style={{
      minHeight: "100vh", background: "#1a1e2e",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: 24, position: "relative", overflow: "hidden",
    }}>
      {/* Smoking corner bg */}
      <img src={SMOKE_SRC} alt="" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", opacity: 0.18, pointerEvents: "none",
      }} />

      <div style={{ position: "relative", textAlign: "center" }}>
        <h1 style={{
          fontFamily: "Raleway, sans-serif", fontWeight: 800,
          fontSize: "clamp(80px, 18vw, 180px)",
          color: "rgba(255,255,255,0.07)", margin: 0, lineHeight: 1, letterSpacing: "-0.04em",
        }}>
          404
        </h1>
        <div style={{ marginTop: -16, marginBottom: 20 }}>
          <Image src={LOGO_SRC} alt="Smith Labs" width={64} height={64} style={{ objectFit: "contain" }} />
        </div>
        <p style={{ fontFamily: "Oxygen, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", margin: "0 0 6px" }}>
          Slipped into the smoking corner.
        </p>
        <p style={{ fontFamily: "Oxygen, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.3)", margin: "0 0 28px", fontStyle: "italic" }}>
          This page doesn&apos;t exist. But the vibe does.
        </p>
        <a
          href="/"
          style={{
            display: "inline-block",
            fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 13,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: brand.tealDark, background: brand.orange,
            textDecoration: "none",
            borderRadius: 32, padding: "12px 34px", cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          Back to the garden
        </a>
      </div>
    </div>
  );
}
