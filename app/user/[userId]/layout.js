import Footer from "@/app/_components/Footer";
import React from "react";

function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
