import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-indigo-950 text-white fixed bottom-0 w-full text-right p-2">
      This App was made using data fetched from the{" "}
      <strong>Rick and Morty API</strong>
    </div>
  );
}

export default Footer;
