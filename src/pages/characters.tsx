import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";
import { Data } from "@/types/CharacterTypes";
import Head from "next/head";

export const getServerSideProps = (async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data: Data = await res.json();
  return { props: { data } };
}) satisfies GetServerSideProps<{ data: Data }>;

function characters({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Characters</title>
        <meta
          name="description"
          content="Page fetching all characters from the api"
        />
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"container my-10 mx-auto"}>
        <h1 className={"text-center text-2xl font-bold"}>List of Characters</h1>
        <div className="container columns-7 mt-5">
          {data.results &&
            data.results.map((character) => {
              return (
                <Image
                  src={character.image}
                  key={character.id}
                  className="mb-4"
                  width={"200"}
                  height={"200"}
                  alt={character.name}
                />
              );
            })}
        </div>
        <div className="text-center my-6">
          <button className="bg-indigo-950 text-white p-2 mx-5 w-24 rounded-lg hover:font-semibold">
            Previous
          </button>
          <button className="bg-indigo-950 text-white p-2 mx-5 w-24 rounded-lg hover:font-semibold">
            Next
          </button>
        </div>
      </main>
    </>
  );
}

export default characters;
