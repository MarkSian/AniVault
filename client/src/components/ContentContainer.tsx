import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import ContentList from './ContentList';
import MoodFilter from './MoodFilter';
import NavBar from './NavBar';
import Footer from './Footer';

const GET_MOVIES = gql`
  query GetMovies {
    getMovies {
      id
      title
      trailer {
        url
        youtube_id
        embed_url
      }
      genres {
        name
      }
      aired {
        from
        to
        prop {
          day
          month
          year
        }
        string
      }
      synopsis
      score
      rating
    }
  }
`;

const ContentContainer: React.FC = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [genres, setGenres] = useState<string[]>([]);
  const [aired, setAired] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [synopsis, setSynopsis] = useState<string | null>(null);
  const [rating, setRating] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);
  const [history, setHistory] = useState<any[]>([]);

  const toggleGenre = (mood: string, genre: string) => {
    setSelectedMood(mood);
    setSelectedGenre(genre);
    setHistory([]);
  };

  useEffect(() => {
    if (data && data.getMovies && selectedGenre) {
      const filtered = data.getMovies.filter((movie: any) =>
        movie.genres.some((g: any) => g.name === selectedGenre)
      );
      setFilteredMovies(filtered);

      if (filtered.length > 0) {
        const randomMovie = filtered[Math.floor(Math.random() * filtered.length)];
        setTrailerUrl(randomMovie.trailer.embed_url);
        setTitle(randomMovie.title);
        setGenres(randomMovie.genres.map((genre: any) => genre.name));
        setAired(randomMovie.aired.string);
        setScore(randomMovie.score);
        setSynopsis(randomMovie.synopsis);
        setRating(randomMovie.rating);
      }
    }
  }, [data, selectedGenre]);

  const handleNextClick = () => {
    if (filteredMovies.length > 0) {
      const randomMovie = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
      setHistory((prevHistory) => [
        ...prevHistory,
        { trailerUrl, title, genres, aired, score, synopsis, rating },
      ]);
      setTrailerUrl(randomMovie.trailer.embed_url);
      setTitle(randomMovie.title);
      setGenres(randomMovie.genres.map((genre: any) => genre.name));
      setAired(randomMovie.aired.string);
      setScore(randomMovie.score);
      setSynopsis(randomMovie.synopsis);
      setRating(randomMovie.rating);
    }
  };

  const handleBackClick = () => {
    if (history.length > 0) {
      const previousMovie = history[history.length - 1];
      setHistory((prevHistory) => prevHistory.slice(0, -1));
      setTrailerUrl(previousMovie.trailerUrl);
      setTitle(previousMovie.title);
      setGenres(previousMovie.genres);
      setAired(previousMovie.aired);
      setScore(previousMovie.score);
      setSynopsis(previousMovie.synopsis);
      setRating(previousMovie.rating);
    } else {
      setSelectedMood(null);
      setSelectedGenre(null);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <NavBar onBackClick={handleBackClick} selectedMood={selectedMood} />
      <MoodFilter selectedGenre={selectedGenre} toggleGenre={toggleGenre} />
      {selectedGenre && (
        <ContentList
          trailerUrl={trailerUrl}
          title={title}
          genres={genres}
          aired={aired}
          score={score}
          synopsis={synopsis}
          rating={rating}
          onNextClick={handleNextClick}
          onBackClick={handleBackClick}
        />
      )}
      <Footer />
    </div>
  );
};

export default ContentContainer;