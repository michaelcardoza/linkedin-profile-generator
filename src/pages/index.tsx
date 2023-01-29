import Head from 'next/head';

import {
  CreateAnswerForm,
  ProfileCard,
} from '@app/features/answers/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hackaton 2023 - Midudev</title>
        <meta name="description" content="Hackaton 2023 - Midudev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full rounded-xl bg-cslate-800 px-6 py-12">
        <CreateAnswerForm />
        <ProfileCard />
      </section>
    </>
  );
}
