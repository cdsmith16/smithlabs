"use client";
import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import ProductsPage from "./ProductsPage";
import ServicesPage from "./ServicesPage";
import Footer from "./Footer";

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
      default:
        return (<><Hero setPage={setPage} /><ProductsPage /><ServicesPage setPage={setPage} /></>);
    }
  };

  return (
    <>
      <Nav page={page} setPage={setPage} />
      {renderPage()}
      <Footer />
    </>
  );
}
