import Image from "next/image";
import brand, { LOGO_SRC } from "./brand";

export default function Footer() {
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
