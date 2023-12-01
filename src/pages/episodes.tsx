import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const GET_EPISODES_DATA = gql`
  query ExampleQuery($filter: FilterEpisode) {
    episodes(filter: $filter) {
      info {
        count
      }
      results {
        id
        name
        characters {
          name
          image
        }
      }
    }
  }
`;

function Episodes() {
  const [season, setSeason] = useState("S01");

  const { data, loading, error } = useQuery<episodesData>(GET_EPISODES_DATA, {
    variables: {
      filter: {
        episode: `${season}`,
      },
    },
  });
  console.log(data);
  if (loading) {
    return (
      <>
        <div className="text-center my-32">
          <h1 className="text-4xl font-bold">...Loading...</h1>
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <div className="text-center my-32">
          <h1 className="text-4xl font-bold">{error.message}</h1>;
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Episodes</title>
        <meta name="description" content="Characters by seasons and episodes" />
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mb-20">
        <div className=" my-4 w-full text-center">
          <p className="font-bold text-2xl">Characters by episodes</p>
          <label htmlFor="seasons">Choose a season: </label>
          <select
            name="seasons"
            id="seasons"
            className="bg-slate-500 text-white rounded-md my-4"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            <option value="S01">One</option>
            <option value="S02">Two</option>
            <option value="S03">Three</option>
            <option value="S04">Four</option>
            <option value="S05">Five</option>
          </select>
        </div>
        <div className="w-5/6 mx-auto">
          <table>
            <thead>
              <tr>
                <th>Nr.</th>
                <th>Name</th>
                <th>Pictures</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.episodes.results.map((episode, id) => {
                  return (
                    <>
                      <tr className="border-b last-of-type:border-none">
                        <td className="text-center font-bold p-1">{id + 1}.</td>
                        <td className="border-r p-1">{episode.name}</td>
                        <td className="flex flex-wrap">
                          {episode.characters.map((character) => {
                            return (
                              <>
                                <Image
                                  src={character.image}
                                  alt={character.name}
                                  width={60}
                                  height={60}
                                  className="m-1"
                                />
                              </>
                            );
                          })}
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Episodes;
