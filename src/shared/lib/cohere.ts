import getConfig from 'next/config';
import cohere from 'cohere-ai';

const { serverRuntimeConfig } = getConfig();
const { cohere: cohereServerConfig } = serverRuntimeConfig;

cohere.init(cohereServerConfig.apiKey, '2022-12-06');

export const AIClient = cohere;
