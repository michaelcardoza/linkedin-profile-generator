import React, { useEffect, useState } from 'react';

import { skillListToString } from '@app/shared/utils/strings';
import { useAnswersContext } from '@app/features/answers/anwsers.context';
import { TokenField } from '@app/features/ui/components';
import {
  AnswerFormState,
  genereteAnwser,
} from '@app/features/answers/anwsers.service';

export const CreateAnswerForm = () => {
  const [isDisabled, setDisabled] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formState, setFormState] = useState<AnswerFormState>({
    job: '',
    skills: [],
  });
  const { setAnwserGenerated } = useAnswersContext();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsProcessing(true);
    genereteAnwser(formState)
      .then((text) => {
        setAnwserGenerated(text);
      })
      .finally(() => {
        setIsProcessing(false);
      });
  };

  useEffect(() => {
    if (formState.job && formState.skills.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formState]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-y-6"
    >
      <div className="flex w-full flex-col gap-y-2">
        <label className="text-center text-xl font-light text-white">
          Job:
        </label>
        <input
          type="text"
          placeholder="Backend Developer"
          className="mx-auto h-12 w-full max-w-xl rounded-2xl border-2 border-cslate-600 bg-cslate-700 px-4 text-center font-light text-white outline-none focus:border-cblue focus:ring focus:ring-cblue/20"
          onChange={(event) => {
            setFormState((prevState) => ({
              ...prevState,
              job: event.target.value,
            }));
          }}
        />
      </div>
      <div className="flex w-full flex-col gap-y-2">
        <label className="text-center text-xl font-light text-white">
          Skills:
        </label>
        <TokenField
          onChange={(items) => {
            setFormState((prevState) => ({
              ...prevState,
              skills: items,
            }));
          }}
        />
      </div>
      <div className="mx-auto max-w-xl">
        <p className="text-center text-slate-400">
          Write a professional profile for LinkedIn, I am a
          <strong className="font-medium text-slate-200">
            {` ${formState.job || '---'} `}
          </strong>
          and use
          <strong className="font-medium text-slate-200">
            {` ${
              formState.skills.length
                ? skillListToString(formState.skills)
                : '---'
            }.`}
          </strong>
        </p>
      </div>
      <button
        type="submit"
        className={`flex h-12 w-full max-w-xl items-center justify-center rounded-full px-6 text-center text-white ${
          isProcessing || isDisabled ? 'bg-blue-300' : 'bg-cblue'
        }`}
        disabled={isProcessing || isDisabled}
      >
        Generate
      </button>
    </form>
  );
};
