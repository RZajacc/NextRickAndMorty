import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Homepage containing some general information about the app"
        />
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"container my-10 w-3/5 mx-auto"}>
        <div>
          <h1 className={"text-center text-2xl font-bold"}>Homepage</h1>
          <p className={"text-center my-5"}>
            Im learning about rendering styles in <strong>Next.js</strong> -
            this page was <strong>Statically Rendered</strong> by default.
          </p>
          <p className={"text-center my-5"}>
            The <em>Characters</em> page is rendered{" "}
            <strong>Server-Side</strong> and shows a list of Rick and Morty
            characters. From there, you can click each character to follow a
            <strong>Statically-Generated</strong> path, and visit Character page
            rendering with <strong>Static-Site-Generation</strong>. Ive fetched
            the data for these pages from a <strong>REST API</strong>.
          </p>
          <p className={"text-center my-5"}>
            The Episodes page is rendered <strong>Client-Side</strong>.
            I&apos;ve used a filtered <strong>GraphQL</strong> query to fetch
            the data.
            <a
              className={"font-bold underline"}
              href="https://www.netlify.com/blog/2020/12/21/send-graphql-queries-with-the-fetch-api-without-using-apollo-urql-or-other-graphql-clients/"
            >
              Here
            </a>{" "}
            is a good article to help you use Graph QL together with the Fetch
            API.
          </p>
        </div>
      </main>
    </>
  );
}
