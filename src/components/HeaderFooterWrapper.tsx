import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const HeaderFooterWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HeaderFooterWrapper;
