"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import brand, { LOGO_SRC } from "./brand";

export default function Hero({ setPage }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      background: `linear-gradient(165deg, ${brand.bgPage} 0%, ${brand.bgHero} 45%, ${brand.bgPage} 100%)`,
      position: "relative", overflow: "hidden",
      padding: "100px 28px 80px",
    }}>
      {/* Subtle bg shapes */}
      <svg style={{ position: "absolute", top: "8%", right: "-6%", opacity: 0.07, pointerEvents: "none" }}
        width="380" height="380" viewBox="0 0 380 380">
        <ellipse cx="190" cy="190" rx="130" ry="185" fill={brand.teal} transform="rotate(-18 190 190)" />
      </svg>
      <svg style={{ position: "absolute", bottom: "-10%", left: "-7%", opacity: 0.05, pointerEvents: "none" }}
        width="320" height="320" viewBox="0 0 320 320">
        <ellipse cx="160" cy="160" rx="110" ry="155" fill={brand.tealDark} transform="rotate(14 160 160)" />
      </svg>

      {/* Logo image */}
      <div style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "scale(1)" : "scale(0.88)",
        transition: "opacity 0.9s cubic-bezier(.4,0,.2,1), transform 0.9s cubic-bezier(.4,0,.2,1)",
        marginBottom: 36,
      }}>
        <Image src={LOGO_SRC} alt="Smith Labs logo" width={100} height={100} style={{ objectFit: "contain" }} />
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: "Raleway, sans-serif", fontWeight: 800,
        fontSize: "clamp(34px, 5.5vw, 60px)",
        color: brand.tealDark, textAlign: "center", lineHeight: 1.12,
        letterSpacing: "-0.02em", maxWidth: 680,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.9s cubic-bezier(.4,0,.2,1) 150ms, transform 0.9s cubic-bezier(.4,0,.2,1) 150ms",
      }}>
        An innovation engine.<br />
        <span style={{ color: brand.teal, fontWeight: 600 }}>Built to grow.</span>
      </h1>

      {/* Subhead */}
      <p style={{
        fontFamily: "Oxygen, sans-serif", fontSize: 16, color: brand.textMuted,
        textAlign: "center", maxWidth: 520, lineHeight: 1.75, marginTop: 20,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.9s cubic-bezier(.4,0,.2,1) 300ms, transform 0.9s cubic-bezier(.4,0,.2,1) 300ms",
      }}>
        Daring products and high-quality technical consultation — from New York to Latin America.
      </p>

      {/* CTA */}
      <div style={{
        marginTop: 40,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.9s cubic-bezier(.4,0,.2,1) 460ms, transform 0.9s cubic-bezier(.4,0,.2,1) 460ms",
      }}>
        <button
          onClick={() => setPage("services")}
          style={{
            fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 13,
            letterSpacing: "0.11em", textTransform: "uppercase",
            color: "#fff", background: brand.teal,
            border: "none", borderRadius: 32, padding: "15px 38px", cursor: "pointer",
            boxShadow: "0 4px 22px rgba(25,151,134,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(25,151,134,0.42)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)";  e.currentTarget.style.boxShadow = "0 4px 22px rgba(25,151,134,0.3)"; }}
        >
          Work with us
        </button>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", opacity: 0.3 }}>
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke={brand.teal} strokeWidth="1.5" />
          <rect x="9" y="6" width="2" height="6" rx="1" fill={brand.teal} style={{ animation: "scrollDot 1.8s infinite" }} />
        </svg>
      </div>
    </section>
  );
}
