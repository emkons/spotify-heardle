import React from "react";
import Check from "./icons/Check";
import X from "./icons/X";

const guessList = [0, 1, 2, 3, 4, 5];

const Guesses = ({ guesses, correctTrack = false }) => {
  const guessCard = (guess, correct) => {
    return (
      <div className="flex flex-row justify-center gap-3">
        {correct ? (
          <div className="flex items-center text-lime-500">
            <Check size={18} />
          </div>
        ) : (
          <div className="flex items-center text-rose-600">
            <X size={18} />
          </div>
        )}
        <div className="flex-grow">
          {`${guess?.track.name} - ${guess?.track?.artists?.[0].name}`}
        </div>
      </div>
    );
  };

  const guessCardWrapper = (i) => {
    return guesses[i]?.track?.id === correctTrack?.track?.id
      ? guessCard(guesses[i], true)
      : guessCard(guesses[i], false);
  };

  return (
    <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-col flex-wrap p-3 antialiased mt-3 mb-3">
      {guessList.map((i) => (
        <div key={i} className="bg-gray-300 p-2 rounded mt-1 border-b border-gray">
          {i < guesses.length ? guessCardWrapper(i) : <div className="h-6"></div>}
        </div>
      ))}
    </div>
  );
};

export default Guesses;