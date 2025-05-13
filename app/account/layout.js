import React from "react";
import SideNavigation from "../_components/SideNavigation";
import Footer from "../_components/Footer";

export const metadata = {
  title: {
    default: "Account",
    template: "%s | Account",
  },
  description: "A new way to see the world",
};

function LayoutAccount({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row  gap-4 px-6 md:px-10 w-full">
        <SideNavigation />
        <div className="flex-1">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default LayoutAccount;
