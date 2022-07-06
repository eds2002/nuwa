import Head from 'next/head'
import Image from 'next/image'
import { About, Cta, Footer, Hero, Treatments } from '../sections'
import {sanityClient} from '../sanity'


export default function Home({treatments}) {
  return (
    <>
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
        treatments: [],
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
