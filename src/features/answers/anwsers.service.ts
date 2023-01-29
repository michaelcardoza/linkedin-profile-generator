export type AnswerFormState = {
  job: string;
  skills: string[];
};

export const genereteAnwser = async (data: AnswerFormState) => {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('job', data.job);
  urlSearchParams.set('skills', data.skills.join(','));

  const response = await fetch(`/api/jarvis?${urlSearchParams.toString()}`);

  if (response.ok && response.status === 200) {
    const { text } = await response.json();
    return Promise.resolve(text);
  }
};
