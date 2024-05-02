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