"use client";
import RevealDiv from "./RevealDiv";
import brand from "./brand";

export default function ServicesPage({ setPage }) {
  return (
    <div style={{ background: brand.bgPage, minHeight: "100vh", paddingTop: 64 }}>
      {/* Header — teal gradient */}
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
              Send an inquiry and let&apos;s figure out how Smith Labs can help.
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
