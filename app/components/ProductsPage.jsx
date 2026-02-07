"use client";
import RevealDiv from "./RevealDiv";
import brand from "./brand";

const products = [
  {
    product: "Reserve Map",
    description: "Geographic visualization of credit card reservation benefits",
    link: "https://reservemap.vercel.app",
    repo: "https://github.com/cdsmith16/reservemap"
  },
  {
    product: "Present",
    description: "Capture the moment. Gift your reality.",
    link: "",
    repo: "Private"
  },
  {
    product: "Untracked",
    description: "URL filter for private, clean link sharing.",
    link: "",
    repo: "https://github.com/cdsmith16/linkstrippa"
  },
  {
    product: "JoLo",
    description: "Portfolio accountability tracker with AI-powered progress insights",
    link: "https://joloapp.com",
    repo: "Private"
  }
];

export default function ProductsPage() {
  return (
    <div style={{ background: brand.bgPage, minHeight: "100vh", paddingTop: 64 }}>
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 28px 80px" }}>
        <RevealDiv>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{
              fontFamily: "Oxygen, sans-serif", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase", color: brand.orange,
            }}>
              What we&apos;ve shipped
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
                      {p.repo && p.repo !== "Private" ? (
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
                      ) : p.repo === "Private" ? (
                        <span style={{
                          color: brand.textMuted,
                          opacity: 0.6,
                          fontSize: 13,
                          fontStyle: "italic"
                        }}>Private</span>
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
