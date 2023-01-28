import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [formState, setFormSate] = useState({
    job: 'Frontend Developer',
    skills: 'react, html, css and nextjs',
  });

  const handleSend = async (event: any) => {
    event.preventDefault();

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('job', formState.job);
    urlSearchParams.set('skills', formState.skills);

    const response = await fetch(`/api/jarvis?${urlSearchParams.toString()}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Hackaton 2023 - Midudev</title>
        <meta name="description" content="Hackaton 2023 - Midudev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section></section>
    </>
  );
}
