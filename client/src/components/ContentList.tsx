import React from 'react';
import Button from './Button';

interface ContentListProps {
  trailerUrl: string | null;
  title: string | null;
  genres: string[];
  aired: string | null;
  score: number | null;
  synopsis: string | null;
  rating: string | null;
  onNextClick: () => void;
  onBackClick: () => void;
}

const ContentList: React.FC<ContentListProps> = ({
  trailerUrl,
  title,
  genres,
  aired,
  score,
  synopsis,
  rating,
  onNextClick,
  onBackClick,
}) => {
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
        <h2 className="card-title text-xl font-bold cursor-pointer">{title || 'Anime Title'}</h2>
        <p className="text-sm font-thin">{aired} · ⭐ {score}</p>
        <p className="text-sm font-thin">Rating: {rating}</p>

        <div className="mt-2 flex space-x-2">
          {genres.map((genre, index) => (
            <div key={index} className="badge badge-accent">
              {genre}
            </div>
          ))}
        </div>

        <p className="mt-3 font-thin text-md">{synopsis}</p>

        <div className="flex justify-between mt-3">
          <Button text={"Back"} onClick={onBackClick} />
          <Button text={"Next"} onClick={onNextClick} />
        </div>
      </div>
    </div>
  );
};

export default ContentList;