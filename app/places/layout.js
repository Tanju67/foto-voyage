import React from "react";
import Footer from "../_components/Footer";

function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
