"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── Image paths ────────────────────────────────────────────────────────────
const LOGO_SRC = "/Smith_Labs_Logo_Icon.png";
const SMOKE_SRC = "/smoking_corner.jpg";

// ─── Brand Tokens (derived from logo pixel extraction) ──────────────────────
const brand = {
  // Teal anchor — the logo's dominant cool tone
  teal:       "#199786",
  tealDark:   "#0f7e6b",   // medium green / deep anchor
  tealLight:  "#2cae85",   // seafoam leaves
  tealPale:   "#46c994",   // brightest leaf green

  // Sky blue — the petal tip accent
  skyBlue:    "#07a0c3",
  skyDark:    "#0068a0",

  // Orange — petal accent, CTAs only
  orange:     "#f69a31",
  orangeDark: "#f17920",

  // Backgrounds — cool, not warm
  bgPage:     "#f0f7f5",   // very soft teal-tinted white
  bgCard:     "#ffffff",
  bgHero:     "#e8f4f0",   // slightly deeper for hero gradient

  // Text
  text:       "#1e2a27",
  textMuted:  "#5a706a",
  textLight:  "#8a9da4",
};

// ─── Reveal on scroll ────────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function RevealDiv({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(.4,0,.2,1) ${delay}ms, transform 0.7s cubic-bezier(.4,0,.2,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ page, setPage }) {
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

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero({ setPage }) {
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

// ─── Products ────────────────────────────────────────────────────────────────
const products = [
  {
    product: "JoLo",
    description: "Portfolio accountability tracker with AI-powered progress insights",
    link: "https://jolo.app",
    repo: "https://github.com/christiandean/jolo"
  },
  {
    product: "Present",
    description: "Thoughtfully designed gift tracking and reminder system",
    link: "",
    repo: ""
  },
  {
    product: "Link Strippa",
    description: "Developer utility for cleaning and managing URLs",
    link: "",
    repo: "https://github.com/christiandean/link-strippa"
  },
  {
    product: "Card Benefits Map",
    description: "Geographic visualization of credit card reservation benefits",
    link: "",
    repo: ""
  },
];

function ProductsPage() {
  return (
    <div style={{ background: brand.bgPage, minHeight: "100vh", paddingTop: 64 }}>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 28px 80px" }}>
        <RevealDiv>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{
              fontFamily: "Oxygen, sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase", color: brand.orange,
            }}>
              What we've shipped
            </span>
            <h2 style={{
              fontFamily: "Raleway, sans-serif", fontWeight: 800,
              fontSize: "clamp(30px, 4.5vw, 44px)", color: brand.tealDark,
              marginTop: 10, letterSpacing: "-0.02em",
            }}>
              Products
            </h2>
          </div>
        </RevealDiv>

        <RevealDiv delay={120}>
          <div style={{
            overflowX: "auto",
            background: brand.bgCard,
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            border: "1px solid rgba(25,151,134,0.12)"
          }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              fontFamily: "Oxygen, sans-serif"
            }}>
              <thead>
                <tr style={{
                  background: `linear-gradient(160deg, ${brand.teal}12 0%, ${brand.tealLight}08 100%)`,
                  borderBottom: `2px solid ${brand.teal}30`
                }}>
                  <th style={{
                    padding: "18px 24px",
                    textAlign: "left",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: brand.tealDark
                  }}>Product</th>
                  <th style={{
                    padding: "18px 24px",
                    textAlign: "left",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: brand.tealDark
                  }}>Description</th>
                  <th style={{
                    padding: "18px 24px",
                    textAlign: "center",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: brand.tealDark,
                    width: 100
                  }}>Link</th>
                  <th style={{
                    padding: "18px 24px",
                    textAlign: "center",
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: brand.tealDark,
                    width: 100
                  }}>Repo</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr key={p.product} style={{
                    borderBottom: i < products.length - 1 ? "1px solid rgba(25,151,134,0.08)" : "none",
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = `${brand.teal}06`}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    <td style={{
                      padding: "20px 24px",
                      fontWeight: 600,
                      fontSize: 15,
                      color: brand.tealDark
                    }}>{p.product}</td>
                    <td style={{
                      padding: "20px 24px",
                      fontSize: 14,
                      color: brand.textMuted,
                      lineHeight: 1.6
                    }}>{p.description}</td>
                    <td style={{
                      padding: "20px 24px",
                      textAlign: "center"
                    }}>
                      {p.link ? (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: brand.teal,
                          textDecoration: "none",
                          fontSize: 13,
                          fontWeight: 600,
                          transition: "color 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = brand.orange}
                        onMouseLeave={(e) => e.currentTarget.style.color = brand.teal}
                        >
                          Visit →
                        </a>
                      ) : (
                        <span style={{
                          color: brand.textMuted,
                          opacity: 0.4,
                          fontSize: 13
                        }}>—</span>
                      )}
                    </td>
                    <td style={{
                      padding: "20px 24px",
                      textAlign: "center"
                    }}>
                      {p.repo ? (
                        <a href={p.repo} target="_blank" rel="noopener noreferrer" style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: brand.tealDark,
                          textDecoration: "none",
                          fontSize: 13,
                          fontWeight: 600,
                          transition: "color 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = brand.orange}
                        onMouseLeave={(e) => e.currentTarget.style.color = brand.tealDark}
                        >
                          GitHub →
                        </a>
                      ) : (
                        <span style={{
                          color: brand.textMuted,
                          opacity: 0.4,
                          fontSize: 13
                        }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealDiv>
      </section>
    </div>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
function ServicesPage({ setPage }) {
  return (
    <div style={{ background: brand.bgPage, minHeight: "100vh", paddingTop: 64 }}>
      {/* Header — teal gradient, no thick block feel */}
      <section style={{
        background: `linear-gradient(160deg, ${brand.tealDark} 0%, ${brand.teal} 100%)`,
        padding: "88px 28px 72px", textAlign: "center",
      }}>
        <RevealDiv>
          <span style={{
            fontFamily: "Oxygen, sans-serif", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase", color: brand.orange,
          }}>
            How we help
          </span>
          <h2 style={{
            fontFamily: "Raleway, sans-serif", fontWeight: 800,
            fontSize: "clamp(30px, 4.5vw, 44px)", color: "#fff",
            marginTop: 10, letterSpacing: "-0.02em",
          }}>
            Services
          </h2>
          <p style={{
            fontFamily: "Oxygen, sans-serif", fontSize: 15,
            color: "rgba(255,255,255,0.72)", maxWidth: 500, margin: "14px auto 0", lineHeight: 1.7,
          }}>
            Deep technical expertise, applied where it matters most.
          </p>
        </RevealDiv>
      </section>

      {/* Service blocks */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "72px 28px 80px" }}>
        {/* Technical Consultation */}
        <RevealDiv>
          <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{
              flex: "0 0 auto", width: 72, height: 72, borderRadius: 18,
              background: `linear-gradient(135deg, ${brand.teal}, ${brand.tealDark})`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: 28 }}>⚙️</span>
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 style={{
                fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 24,
                color: brand.tealDark, margin: "0 0 10px",
              }}>
                Technical Consultation
              </h3>
              <p style={{
                fontFamily: "Oxygen, sans-serif", fontSize: 15,
                color: brand.textMuted, lineHeight: 1.75, margin: 0,
              }}>
                Experienced technical advisor with 12 years hands-on — building across New York, Seattle, and Silicon Valley. Background spans Microsoft PM, AWS strategic deal negotiation, and 4x venture-backed forward deployed engineering. Ideal for services startups navigating technical hiring, Fortune 500 SOW structuring, or API integration and documentation efforts.
              </p>
            </div>
          </div>
        </RevealDiv>

        {/* Divider */}
        <div style={{ width: 44, height: 2, background: brand.orange, borderRadius: 1, margin: "56px 0" }} />

        {/* Career Negotiation */}
        <RevealDiv delay={100}>
          <div style={{ display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{
              flex: "0 0 auto", width: 72, height: 72, borderRadius: 18,
              background: `linear-gradient(135deg, ${brand.orange}, ${brand.orangeDark})`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: 28 }}>📈</span>
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 style={{
                fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 24,
                color: brand.tealDark, margin: "0 0 10px",
              }}>
                Career Negotiation
              </h3>
              <p style={{
                fontFamily: "Oxygen, sans-serif", fontSize: 15,
                color: brand.textMuted, lineHeight: 1.75, margin: 0,
              }}>
                Strategic guidance on navigating comp negotiations, role positioning, and career transitions — drawing on real experience across top-tier tech and VC-backed environments.
              </p>
            </div>
          </div>
        </RevealDiv>

        {/* CTA block */}
        <RevealDiv delay={200}>
          <div style={{
            marginTop: 64, textAlign: "center",
            background: `linear-gradient(135deg, ${brand.bgHero}, ${brand.bgPage})`,
            borderRadius: 22, padding: "52px 32px",
            border: `1px solid rgba(25,151,134,0.15)`,
          }}>
            <h3 style={{
              fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 21,
              color: brand.tealDark, margin: "0 0 8px",
            }}>
              Ready to talk?
            </h3>
            <p style={{
              fontFamily: "Oxygen, sans-serif", fontSize: 15,
              color: brand.textMuted, margin: "0 0 24px",
            }}>
              Send an inquiry and let's figure out how Smith Labs can help.
            </p>
            <button
              style={{
                fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 13,
                letterSpacing: "0.11em", textTransform: "uppercase",
                color: "#fff", background: brand.teal,
                border: "none", borderRadius: 32, padding: "14px 38px", cursor: "pointer",
                boxShadow: "0 4px 20px rgba(25,151,134,0.25)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(25,151,134,0.38)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)";  e.currentTarget.style.boxShadow = "0 4px 20px rgba(25,151,134,0.25)"; }}
            >
              Request a Consultation
            </button>
          </div>
        </RevealDiv>
      </section>
    </div>
  );
}

// ─── 404 ─────────────────────────────────────────────────────────────────────
function NotFoundPage({ setPage }) {
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
          This page doesn't exist. But the vibe does.
        </p>
        <button
          onClick={() => setPage("home")}
          style={{
            fontFamily: "Raleway, sans-serif", fontWeight: 600, fontSize: 13,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: brand.tealDark, background: brand.orange,
            border: "none", borderRadius: 32, padding: "12px 34px", cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          Back to the garden
        </button>
      </div>
    </div>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: brand.tealDark, color: "rgba(255,255,255,0.6)",
      padding: "44px 28px", textAlign: "center",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
        <Image src={LOGO_SRC} alt="" width={26} height={26} style={{ objectFit: "contain" }} />
        <span style={{
          fontFamily: "Raleway, sans-serif", fontWeight: 700, fontSize: 14,
          color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase",
        }}>
          Smith Labs
        </span>
      </div>
      <p style={{ fontFamily: "Oxygen, sans-serif", fontSize: 13, margin: 0 }}>
        © 2025 Smith Labs LLC · New York · Innovation, with care.
      </p>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function SmithLabsApp() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return (<><Hero setPage={setPage} /><ProductsPage /><ServicesPage setPage={setPage} /></>);
      case "products":
        return <ProductsPage />;
      case "services":
        return <ServicesPage setPage={setPage} />;
      case "404":
        return <NotFoundPage setPage={setPage} />;
      default:
        return <NotFoundPage setPage={setPage} />;
    }
  };

  return (
    <>
      <Nav page={page} setPage={setPage} />

      {/* 404 preview trigger */}
      <button
        onClick={() => setPage("404")}
        style={{
          position: "fixed", bottom: 18, right: 18, zIndex: 999,
          background: "rgba(15,126,107,0.18)", border: "1px solid rgba(25,151,134,0.25)",
          color: brand.teal, fontSize: 11, padding: "6px 14px", borderRadius: 18,
          cursor: "pointer", fontFamily: "Oxygen, sans-serif",
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}
      >
        Preview 404
      </button>

      {renderPage()}
      {page !== "404" && <Footer />}
    </>
  );
}
