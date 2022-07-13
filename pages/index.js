import Head from 'next/head'
import Image from 'next/image'
import { About, Cta, Footer, Hero, Treatments } from '../sections'
import {sanityClient} from '../sanity'


export default function Home({treatments}) {
  return (
    <>
    <Head>
      <meta charSet='UTF-8'/>
      <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'/>
      <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
      <title>Nüwa</title>
      <meta name = "keywords" content = 'NUWA, ESTETICA, BELLEZA'/>
    </Head>
    <Hero/>
    <About/>
    <Treatments limit = {3} treatments = {treatments}/>
    <Cta/>
    <Footer/>
    </>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[ _type == "tratamientos"]';
  const treatments = await sanityClient.fetch(query)

  if(!treatments.length){
    return {
      props:{
        treatments: null,
      }
    }
  }else{
    return {
      props:{
        treatments:treatments
      }
    }
  }
}
