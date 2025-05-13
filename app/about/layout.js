import React from "react";
import Footer from "../_components/Footer";

function layout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default layout;
