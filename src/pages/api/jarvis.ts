import type { NextApiRequest, NextApiResponse } from 'next';

import { AIClient } from '@app/shared/lib/cohere';
import { skillListToString } from '@app/shared/utils/strings';

type ResponseError = {
  message: string;
};

type ResponseData = {
  text: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>,
) {
  const method = req.method;
  const { job, skills } = req.query;

  switch (method) {
    case 'GET':
      try {
        if (!job && !skills) throw new Error('Missing information!');

        const AIResponse = await AIClient.generate({
          model: 'command-xlarge-20221108',
          prompt: `Write a professional profile for LinkedIn, I am a ${job} and use ${skillListToString(
            (<string>skills).split(','),
          )}.`,
          max_tokens: 300,
        });
        const { text } = AIResponse.body.generations[0];

        if (!text) throw new Error('Try again!');

        res.status(200).json({ text });
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({
            message: error.message,
          });
        } else {
          res.status(500).json({
            message: 'Server Internal Error',
          });
        }
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
