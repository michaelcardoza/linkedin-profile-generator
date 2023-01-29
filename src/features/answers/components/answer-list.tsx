import React from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/solid';

import { useAnswersContext } from '@app/features/answers/anwsers.context';

export const AnswerList = () => {
  const { answers, cleanAnswerList } = useAnswersContext();

  const handleCopy = (text: string) => () => {
    navigator.clipboard.writeText(text);
  };

  const handleCleanAll = () => cleanAnswerList();

  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="text-xl text-white">Last anwsers:</h3>
        <button
          className={`rounded-full border border-cblue bg-transparent py-2 px-6 text-sm text-cblue ${
            answers.length
              ? 'hover:bg-cblue hover:text-white'
              : 'cursor-default opacity-30'
          }`}
          onClick={handleCleanAll}
        >
          Clean all
        </button>
      </div>
      <hr className="my-4 border-cslate-600" />
      {answers.length ? (
        <div className="flex flex-col gap-y-6">
          {answers.map((answer, index) => (
            <div
              key={index}
              className="relative w-full rounded-2xl bg-cslate-800 p-6 font-light text-white shadow"
            >
              <div className="mb-4 flex items-end justify-between">
                <p className="text-lg">Text:</p>
                <button
                  className="block flex h-8 w-8 cursor-pointer items-center justify-center rounded border-2 border-cslate-700 bg-cslate-600"
                  onClick={handleCopy(answer)}
                >
                  <ClipboardDocumentIcon className="h-4 w-4 text-white/50" />
                </button>
              </div>
              <p className="font-extralight">{answer}</p>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-center text-lg font-extralight text-cslate-600">
          Empty list
        </h3>
      )}
    </section>
  );
};
