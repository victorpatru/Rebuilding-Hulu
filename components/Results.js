import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <section className="my-10 flex-wrap justify-center px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </section>
  );
}
export default Results;
