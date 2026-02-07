"use client";
import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import ProductsPage from "./ProductsPage";
import ServicesPage from "./ServicesPage";
import NotFoundPage from "./NotFoundPage";
import Footer from "./Footer";
import brand from "./brand";

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
