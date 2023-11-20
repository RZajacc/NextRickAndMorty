import { Characters, Data } from "@/types/CharacterTypes";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React from "react";

type ComponentProps = {
  character: Characters;
};

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = Array.from({ length: 826 }, (value, index) =>
    (index + 1).toString()
  );

  const paths = slugs.map((slug) => {
    return {
      params: {
        id: slug,
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ComponentProps> = async (
  context
) => {
  //   console.log("context", context.params?.id);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params?.id}`
  );
  const result = await response.json();
  return { props: { character: result } };
};

function Character({ character }: ComponentProps) {
  console.log(character);
  return (
    <>
      <div className="container columns-2">
        <Image
          src={character.image}
          key={character.id}
          className="mb-4 relative group-hover:opacity-10"
          width={"200"}
          height={"200"}
          alt={character.name}
        />
        <p>{character.name}</p>
        <p>{character.gender}</p>
        <p>{character.species}</p>
        <p>{character.status}</p>
        <p>{character.location.name}</p>
        <p>{character.episode.length}</p>
      </div>
    </>
  );
}

export default Character;
