import React, { useState } from 'react';

type DefaultContextValue = {
  answers: string[];
  anwserGenerated: string;
  addToAnswerList: () => void;
  cleanAnswerList: () => void;
  setAnwserGenerated: React.Dispatch<React.SetStateAction<string>>;
};

type AnswersStateProviderProps = {
  children: React.ReactNode;
};

export const AnswersStateContext = React.createContext(
  {} as DefaultContextValue,
);

export const useAnswersContext = () => {
  return React.useContext(AnswersStateContext);
};

export const AnswersStateProvider: React.FC<AnswersStateProviderProps> = (
  props,
) => {
  const [anwserGenerated, setAnwserGenerated] = useState<string>('');
  const [answers, setAnswers] = React.useState<string[]>([]);

  const addToAnswerList = () => {
    if (anwserGenerated) {
      const newAnswerList = [...answers, anwserGenerated];

      setAnswers(newAnswerList);
      window.localStorage.setItem('answers', JSON.stringify(newAnswerList));
    }
  };

  const cleanAnswerList = () => {
    setAnswers([]);
    window.localStorage.setItem('answers', JSON.stringify([]));
  };

  React.useEffect(() => {
    const data = window.localStorage.getItem('answers');

    if (data) {
      setAnswers(JSON.parse(data));
    }
  }, []);

  return (
    <AnswersStateContext.Provider
      value={{
        answers,
        addToAnswerList,
        anwserGenerated,
        setAnwserGenerated,
        cleanAnswerList,
      }}
    >
      {props.children}
    </AnswersStateContext.Provider>
  );
};
