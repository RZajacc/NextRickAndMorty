import React, { ReactElement } from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props) {
  return (
    <>
      <MyNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
