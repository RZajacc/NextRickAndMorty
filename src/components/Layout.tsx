import React, { ReactElement } from "react";
import MyNav from "./MyNav";

type Props = {
  children: ReactElement;
};

function Layout({ children }: Props) {
  return (
    <>
      <MyNav />
      <main>{children}</main>
    </>
  );
}

export default Layout;
