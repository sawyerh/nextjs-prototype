import React from "react";
import Head from "next/head";
import Link from "next/link";

const About = () => (
  <main>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>About</h1>

    <p>
      This is simple static page. <Link href="/">Go back to the Homepage.</Link>
    </p>
  </main>
);

export default About;
