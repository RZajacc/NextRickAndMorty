import { Data } from "@/types/CharacterTypes";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type ComponentProps = {
  data: Data;
};

export const getStaticPaths: GetStaticPaths = () => {
  //   const slugs = ["1", "2", "3", "4", "5"];
  const slugs = Array.from({ length: 42 }, (value, index) =>
    (index + 1).toString()
  );

  const paths = slugs.map((slug) => {
    return {
      params: {
        page: slug,
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ComponentProps> = async (
  context
) => {
  console.log("Context", context);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${context.params?.page}`
  );
  const result = await response.json();
  return { props: { data: result } };
};

function CharPage({ data }: ComponentProps) {
  const router = useRouter();
  return (
    <>
      <main className={"container my-10 mx-auto"}>
        <h1 className={"text-center text-2xl font-bold"}>List of Characters</h1>
        <div className="container columns-7 mt-5">
          {data.results &&
            data.results.map((character) => {
              return (
                <>
                  <Image
                    src={character.image}
                    key={character.id}
                    className="mb-4"
                    width={"200"}
                    height={"200"}
                    alt={character.name}
                  />
                  <p>See more</p>
                </>
              );
            })}
        </div>
        <div className="text-center my-6">
          <button className="bg-indigo-950 text-white p-2 mx-5 w-24 rounded-lg hover:font-semibold">
            <Link
              href={`/characters/${(router.query.page
                ? +router.query.page >= 2
                  ? +router.query.page - 1
                  : +router.query.page
                : "1"
              ).toString()}`}
            >
              Previous
            </Link>
          </button>
          <button className="bg-indigo-950 text-white p-2 mx-5 w-24 rounded-lg hover:font-semibold">
            <Link
              href={`/characters/${(router.query.page
                ? +router.query.page <= 41
                  ? +router.query.page + 1
                  : +router.query.page
                : "1"
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

export default CharPage;
