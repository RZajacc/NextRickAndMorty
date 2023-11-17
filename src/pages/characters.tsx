import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";

type Place = {
  name: string;
  url: string;
};

type Characters = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Place;
  location: Place;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type Data = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Characters[];
};

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
      </main>
    </>
  );
}

export default characters;
