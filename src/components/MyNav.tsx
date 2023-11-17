import Link from "next/link";
import React from "react";
import styles from "@/styles/Nav.module.css";

type Props = {};

function MyNav({}: Props) {
  return (
    <>
      <nav className={"bg-indigo-950 text-white p-5 space-x-2"}>
        <Link
          href={"/"}
          className={"hover:bg-sky-700 rounded-lg  p-2 focus:font-semibold"}
        >
          Homepage
        </Link>
        <Link
          href={"/characters"}
          className={"hover:bg-sky-700 rounded-lg p-2 focus:font-semibold"}
        >
          Characters
        </Link>
        <Link
          href={"/episodes"}
          className={"hover:bg-sky-700 rounded-lg p-2 focus:font-semibold"}
        >
          Episodes
        </Link>
      </nav>
    </>
  );
}

export default MyNav;
