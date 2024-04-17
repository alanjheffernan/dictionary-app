import React from "react";
import iconPlay from "../assets/images/icon-play.svg";
import newWindow from "../assets/images/icon-new-window.svg";

const WordResults = ({ data, isLoading, error }) => {
  return (
    <section className="sm:mx-auto sm:max-w-[800px]">
      {!error && data ? (
        <>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-grey-darker mb-2 text-[32px] font-bold sm:text-[64px]">
                {data.word}
              </h1>
              <h2 className="text-purple text-lg sm:text-2xl">
                {data.phonetic}
              </h2>
            </div>
            <div>
              <img
                src={iconPlay}
                alt="icon-play"
                className="h-12 w-12 cursor-pointer hover:fill-gray-700  sm:h-[75px] sm:w-[75px]"
              />
            </div>
          </div>
          {data.meanings.map((meaning, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center gap-4">
                <p className="mb-8 text-grey-darker font-bold sm:text-2xl">
                  {meaning.partOfSpeech}
                </p>
                <hr className="border-grey-light w-full " />
              </div>
              <div className="mb-8 sm:mb-10">
                <div>
                  <h5 className="text-grey mb-4 sm:text-xl">Meaning</h5>
                  <ul className="marker:text-purple mb-6 ml-4 w-auto list-outside list-disc">
                    {meaning.definitions.map((definition, innerIndex) => (
                      <li
                        key={innerIndex}
                        className="text-grey-darker mb-3 text-sm sm:text-lg"
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
                  <p className="text-purple font-bold sm:text-xl">
                    {meaning.synonyms[0]}
                  </p>
                </div>
              )}
            </div>
          ))}
          <hr className="mb-6" />
          <div className="sm:flex sm:flex-row sm:gap-6">
            <h5 className="text-grey mb-2 text-sm underline">Source</h5>
            <div className="flex gap-2">
              <a
                href="https://en.wiktionary.org/wiki/keyboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-darker text-sm"
              >
               {data.sourceUrls[0]}
              </a>
              <img src={newWindow} alt="new-window" />
            </div>
          </div>
        </>
      ) : (
        <p>no DAta</p>
      )}
    </section>
  );
};

export default WordResults;
