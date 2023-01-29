import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';

import { useAnswersContext } from '@app/features/answers/anwsers.context';

export const ProfileCard = () => {
  const { addToAnswerList, anwserGenerated, setAnwserGenerated } =
    useAnswersContext();

  const handleAddToList = () => {
    addToAnswerList();
    setAnwserGenerated('');
  };

  return anwserGenerated ? (
    <div className="mt-12 flex flex-col items-center gap-y-6 rounded-xl border border-cslate-600 px-6 py-12">
      <span className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-[3px] border-cblue bg-transparent">
        <span className="block flex h-20 w-20 items-center justify-center rounded-full bg-cslate-700">
          <UserIcon className="h-12 w-12 text-white" />
        </span>
      </span>
      <h3 className="text-xl text-white">My bio generated with co:here</h3>
      <div className="flex flex-col items-center gap-y-6 rounded-xl border-2 border-cslate-600 bg-cslate-700 p-6 shadow">
        <p className="text-center font-extralight text-white">
          {anwserGenerated}
        </p>
        <button
          type="submit"
          className="flex h-10 w-40 w-full items-center justify-center rounded-full bg-cblue px-6 text-center text-white"
          onClick={handleAddToList}
        >
          Add to list
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};
