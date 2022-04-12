import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../component/navbar/Navbar'
import FirstSection from '../sections/page_one/FirstSection'

export default function Home() {
  return (
    <>
      <Navbar/>
      <FirstSection/>
    </>
  )
}
