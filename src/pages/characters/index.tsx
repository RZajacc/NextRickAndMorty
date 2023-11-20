import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";
import { Data } from "@/types/CharacterTypes";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps = (async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data: Data = await res.json();
  return { props: { data } };
}) satisfies GetServerSideProps<{ data: Data }>;

function Characters({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
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
        <h1 className={"text-center text-2xl font-bold "}>
          List of Characters
        </h1>
        <div className="container columns-7 mt-5">
          {data.results &&
            data.results.map((character) => {
              return (
                <>
                  <div className="relative bg-indigo-950 group">
                    <Image
                      src={character.image}
                      key={character.id}
                      className="mb-4 relative group-hover:opacity-10"
                      width={"200"}
                      height={"200"}
                      alt={character.name}
                    />
                    <Link
                      href={""}
                      className="absolute bottom-16 left-9 text-white-500 text-xl invisible group-hover:visible hover:font-bold  "
                    >
                      Learn more
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
        <div className="text-center my-6">
          <button className="bg-indigo-950 text-white p-2 mx-5 w-24 rounded-lg hover:font-semibold">
            <Link
              href={`/characters/${(router.query.page
                ? +router.query.page
                : "1"
              ).toString()}`}
            >
              Previous
            </Link>
          </button>
          <button className="bg-indigo-950 text-white p-2 mx-5 w-24 rounded-lg hover:font-semibold">
            <Link
              href={`/characters/${(router.query.page
                ? +router.query.page
                : "2"
              ).toString()}`}
            >
              Next
            </Link>
          </button>
        </div>
      </main>
    </>
  );
}

export default Characters;
