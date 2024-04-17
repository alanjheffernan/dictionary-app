import React from "react";
import iconPlay from "../assets/images/icon-play.svg";
import newWindow from "../assets/images/icon-new-window.svg";
import sadFaceEmoji from "../assets/images/emoji-sad-face.png";

const WordResults = ({ data, isLoading, error }) => {
  const playAudio = () => {
    if (data.phonetics.length > 0 && data.phonetics[0].audio) {
      const audio = new Audio(data.phonetics[0].audio);
      audio.play();
    }
  };

  return (
    <section className="sm:mx-auto sm:max-w-[800px]">
      {!error && data && (
        <>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-[32px] font-bold text-grey-darker sm:text-[64px]">
                {data.word}
              </h1>
              <h2 className="text-lg text-purple sm:text-2xl">
                {data.phonetic}
              </h2>
            </div>
            <div >
              <img
                src={iconPlay}
                alt="icon-play"
                className="h-12 w-12 cursor-pointer hover:fill-gray-700  sm:h-[75px] sm:w-[75px]"
                onClick={playAudio}
              />
            </div>
          </div>
          {data.meanings.map((meaning, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center gap-4">
                <p className="mb-8 font-bold text-grey-darker sm:text-2xl">
                  {meaning.partOfSpeech}
                </p>
                <hr className="w-full border-grey-light " />
              </div>
              <div className="mb-8 sm:mb-10">
                <div>
                  <h5 className="mb-4 text-grey sm:text-xl">Meaning</h5>
                  <ul className="mb-6 ml-4 w-auto list-outside list-disc marker:text-purple">
                    {meaning.definitions.map((definition, innerIndex) => (
                      <li
                        key={innerIndex}
                        className="mb-3 text-sm text-grey-darker sm:text-lg"
                      >
                        {definition.definition}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {meaning.synonyms.length > 0 && (
                <div className="flex gap-6">
                  <h5 className="text-grey sm:text-xl">Synonyms</h5>
                  <p className="font-bold text-purple sm:text-xl">
                    {meaning.synonyms[0]}
                  </p>
                </div>
              )}
            </div>
          ))}
          <hr className="mb-6" />
          <div className="sm:flex sm:flex-row sm:gap-6">
            <h5 className="mb-2 text-sm text-grey underline">Source</h5>
            <div className="flex gap-2">
              <a
                href="https://en.wiktionary.org/wiki/keyboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-grey-darker"
              >
                {data.sourceUrls[0]}
              </a>
              <img src={newWindow} alt="new-window" />
            </div>
          </div>
        </>
      )}
      {!error && !data && <p>No data, no error</p>}
      {error && (
        <div className="mt-[120px] flex flex-col items-center justify-center">
          <img className="mb-10" src={sadFaceEmoji} alt="sad-face" />
          <p className="mb-6 text-xl font-bold">{error.data.title}</p>
          <p className="text-center">
            {error.data.message}
            {error.data.resolution}
          </p>
        </div>
      )}
    </section>
  );
};

export default WordResults;
