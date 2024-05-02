import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Clock from 'react-live-clock';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>What's the time?</p>
        <p>
          <Clock format="HH:mm:ss" interval={1000} ticking={true} />
        </p>
      </section>
    </Layout>
  );
}

// function returns div
// get current unixtime
// target unixtime
// if it's even, show the time
//  return the clock div
// if it's odd, show text for 20 seconds
//  set target to time.now() = 20 seconds
//  return the text div
// while loop
//  while time.now is less than target unix time
//  show text

//  a function that runs every second
//  variable to track what should show
