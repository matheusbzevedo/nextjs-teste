import React from 'react';
import Head from 'next/head';
import EldoradoLogo from './../assets/images/eldorado-logo.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC= () => {
  return (
    <Container>
      <Head>
        <title>Eldorado Gaming</title>
      </Head>

      <EldoradoLogo />
      <h1>We are Eldorado!</h1>
      <p>We are coming!</p>
    </Container>
  )
};

export default Home;
