import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Banner from "../components/banner";
import About from '../components/about';
import Projects from "../components/projects"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Ma Suhyeon</title>
      </Head>

      <Banner />
      <About />
      <Projects />
    </div>
  )
}

export default Home
