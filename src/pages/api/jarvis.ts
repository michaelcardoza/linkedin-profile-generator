import type { NextApiRequest, NextApiResponse } from 'next';
import { AIClient } from '@app/shared/lib/cohere';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { job, skills } = req.query;

  const response = await AIClient.generate({
    model: 'command-xlarge-20221108',
    prompt: `Write a professional profile for LinkedIn, I am a ${job} and use ${skills}.`,
    max_tokens: 300,
  });
  console.log(response.body.generations);

  res.status(200).json(response.body.generations);
}
