import React from 'react';
import moods from '../assets/mood';
import Button from './Button';

interface MoodFilterProps {
  selectedGenre: string | null;
  toggleGenre: (mood: string, genre: string) => void;
}

const MoodFilter: React.FC<MoodFilterProps> = ({ toggleGenre }) => {
  return (
    <>
      <h1 className="my-6 grid lg:text-5xl text-4xl font-bold mood-center-container">
        No idea what to watch? Click on a mood and discover a top-rated anime!
      </h1>
      <p className="font-semibold text-xl"> Select Below </p>

      <div className="grid lg:grid-cols-3 grid-cols-3 grid-rows-4 lg:gap-6 gap-5 mood-center-container my-5">
        {Object.entries(moods).map(([mood, genre], index) => (
          <Button
            key={index}
            text={mood}
            className="btn-outline"
            onClick={() => toggleGenre(mood, genre)}
          />
        ))}
      </div>
    </>
  );
};

export default MoodFilter;