"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import brand, { LOGO_SRC } from "./brand";

export default function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home",     id: "home" },
    { label: "Products", id: "products" },
    { label: "Services", id: "services" },
  ];

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(240,247,245,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 1px 14px rgba(0,0,0,0.07)" : "none",
        transition: "all 0.4s ease",
        padding: "0 36px",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}
    >
      {/* Logo + wordmark */}
      <button
        onClick={() => setPage("home")}
        style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}
      >
        <Image src={LOGO_SRC} alt="Smith Labs" width={38} height={38} style={{ objectFit: "contain" }} />
        <span style={{
          fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 17,
          color: brand.tealDark, letterSpacing: "0.05em", textTransform: "uppercase",
        }}>
          Smith Labs
        </span>
      </button>

      {/* Links */}
      <div style={{ display: "flex", gap: 36 }}>
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => setPage(l.id)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "Oxygen, sans-serif", fontSize: 13, fontWeight: 400,
              color: page === l.id ? brand.teal : brand.textMuted,
              letterSpacing: "0.07em", textTransform: "uppercase",
              position: "relative", paddingBottom: 5, padding: "0 0 5px",
            }}
          >
            {l.label}
            {page === l.id && (
              <span style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: 2, background: brand.orange, borderRadius: 1,
              }} />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
