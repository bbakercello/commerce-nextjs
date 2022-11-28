import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
export default function Home() {
  return (
    <div>
      <Head>
        <title>
        Gravers.com | Mens Clothing | Official Website | Gravers
        </title>
        <meta name="description" content="Discover Gravers: Well Crafted Clothing. Great Fit. Crazy Good Quality. Incredibly Reasonable Prices."></meta>
      </Head>
      
      <NavBar/>
    </div>
  )
}
