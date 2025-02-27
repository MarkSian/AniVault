import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Button from './Button';

const GET_MOVIES = gql`
  query GetMovies {
    getMovies {
      id
      trailer {
        url
        youtube_id
        embed_url
      }
    }
  }
`;

const ContentList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  useEffect(() => {
    if (data && data.getMovies) {
      // Filter out movies with trailers that do not have a URL
      const trailers = data.getMovies
        .filter((movie: any) => movie.trailer && movie.trailer.url)
        .map((movie: any) => movie.trailer.embed_url);

      if (trailers.length > 0) {
        const randomTrailer = trailers[Math.floor(Math.random() * trailers.length)];
        setTrailerUrl(randomTrailer);
      }
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card center-container bg-slate-100/5 card-compact mt-4 w-96 shadow-xl">
      <figure className="aspect-[16/9]">
        {trailerUrl && (
          <iframe
            className="w-full h-full"
            width="1044"
            height="587"
            src={trailerUrl}
            title="Anime Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title font-bold cursor-pointer">Anime Title</h2>
        <p className="text-lg font-thin">2019 · 2h 3min · ⭐ 6.9/10</p>

        <div className="mt-2 flex space-x-2">
          <div className="badge badge-accent">accent</div>
          <div className="badge badge-accent">accent</div>
        </div>

        <p className="text-sm font-thin mt-2">
          Anime Description Anime Description Anime Description Anime Description Anime Description Anime Description Anime Description
        </p>

        <div className="flex justify-between mt-3">
          <Button text={"Back"} />
          <Button text={"Hide"} />
          <Button text={"Next"} />
        </div>
      </div>
    </div>
  );
};

export default ContentList;