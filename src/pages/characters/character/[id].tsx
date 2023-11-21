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
      <div className="container columns-2 w-1/2 mx-auto my-16">
        <Image
          src={character.image}
          key={character.id}
          className="mb-4 relative group-hover:opacity-10"
          width={"300"}
          height={"300"}
          alt={character.name}
        />
        <div className="mx-4 w-96">
          <p className="p-1">
            <strong>Name: </strong>
            {character.name}
          </p>
          <p className="p-1">
            <strong>Gender: </strong>
            {character.gender}
          </p>
          <p className="p-1">
            <strong>Species: </strong>
            {character.species}
          </p>
          <p className="p-1">
            <strong>Status: </strong>
            {character.status}
          </p>
          <p className="p-1">
            <strong>Origin: </strong>
            {character.location.name}
          </p>
          <p className="p-1">
            Appears in <strong>{character.episode.length} </strong>episodes
          </p>
        </div>
      </div>
    </>
  );
}

export default Character;
