import moods from '../assets/mood';
import Button from './Button';

const MoodFilter: React.FC = () => {
    return (
        <>
            <h1 className="my-6 grid lg:text-5xl text-4xl font-bold mood-center-container">
                No idea what to watch? Click on a mood and discover a top-rated anime!
            </h1>
            <p className="font-semibold text-xl"> Select Below </p>

            <div className="grid lg:grid-cols-3 grid-cols-3 grid-rows-4 lg:gap-6 gap-5 mood-center-container my-5">
                {Object.entries(moods).map(([mood, genre]) => (
                    <div key={genre}>
                        <Button text={mood} className="btn-outline" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default MoodFilter;