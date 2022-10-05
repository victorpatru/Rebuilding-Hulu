import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    // Thumbnail Section
    <section
      ref={ref}
      className="group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105"
    >
      {/* Image */}
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt=""
      />
      {/* Movie Information */}
      <div className="p-2">
        <p className="max-w-md truncate">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <HandThumbUpIcon className="mx-2 h-5" />
          {result.vote_count}
        </p>
      </div>
    </section>
  );
});
export default Thumbnail;
