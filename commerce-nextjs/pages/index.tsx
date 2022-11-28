import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import {Slideshow} from '../components/Slideshow'
import Main from '../components/MainItems'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Gravers.com | Mens Clothing | Official Website | Gravers</title>
        <meta
          name="description"
          content="Discover Gravers: Well Crafted Clothing. Great Fit. Crazy Good Quality. Incredibly Reasonable Prices."
        ></meta>
      </Head>
      <NavBar />
      <div className='p-4 bg-neutral-200'>
        <Slideshow />
      </div>
      <div>
        <Main/>
      </div>
    </div>
  );
}
