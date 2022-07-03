import Head from 'next/head'
import Image from 'next/image'
import { About, Cta, Footer, Hero, Treatments } from '../sections'


export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Treatments limit = {3}/>
      <Cta/>
      <Footer/>
    </>
  )
}
