import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

// Fetches the data from the movie api and puts it on the server allowing us to pass it as props
export async function getServerSideProps(context) {
  // genre just gets the name of genre we're trying to access.
  // eg. you can imagine trying to see the comedy movies you would click in the nav bar on the "Comedy" button which would route you to the ?genre=fetchComedyMovies page
  // genre then stores this exact variable "fetchComedyMovies"
  const genre = context.query.genre;

  // on page load you default to getting the "fetchTrending" page otherwise you get the url out of the genre on which the user clicked
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
