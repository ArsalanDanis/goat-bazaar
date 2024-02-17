import Head from 'next/head';
import styles from './About.module.css';
import AboutAuthor from './aboutAuthor';

const About = () => {
  return (
    <>
   
      <Head>
        <title>About Us - GoatBazaar</title>
      </Head>

    <AboutAuthor />
    </>
  );
};

export default About;