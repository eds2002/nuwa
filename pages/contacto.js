import React from 'react'
import { Navbar } from '../components'
import tw, {styled,css} from 'twin.macro'
import contactImage from '../assets/contactImage.webp'
import Image from 'next/image'
import { sanityClient } from '../sanity'
import { Footer } from '../sections'
import Head from "next/head"

export default function Contacto({locations}){
  return (
    <>
      <Head>
        <meta charSet='UTF-8'/>
        <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'/>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
        <title>Contacto - Nüwa</title>
        <meta name = "description" content = "Estamos aquí para ayudarte."/>
        <meta name = "keywords" content = 'NUWA, ESTETICA, BELLEZA'/>
      </Head>
      <NavigationWrapper>
        <Navbar/>
        <TextWrapper>
          <H1>Hablemos</H1>
          <P lightGray>Estamos aquí para ayudarte.</P>
        </TextWrapper>
        <BackgroundImage>
          <BackgroundOverlay/>
          <ImageWrapper>
            <Image src = {contactImage} layout = 'fill' css = {[tw`object-cover`]} priority/>
          </ImageWrapper>
        </BackgroundImage>
      </NavigationWrapper>
      <ContactInformation>
        <ContactTextWrapper>
          <H3>Necesitas ayuda?</H3>
          <P>El horario de atención de nuestra tienda es de <b>10:00am</b> a <b>7:00pm</b>.</P>
        </ContactTextWrapper>
        <ContactList borderB>
          <Heading>Contactos</Heading>
          <Grid>
            <ContactBox>
              <H5>Numero Telefonico</H5>
              <P textSmall>+51 944 900 077</P>
            </ContactBox>
            <ContactBox>
              <H5>E-mail</H5>
              <P>nuwainnovacionestetica@gmail.com</P>
            </ContactBox>
          </Grid>
        </ContactList>
        <ContactList>
          <Heading>Sedes</Heading>
          <Grid>
            {locations.map((location,index)=>(
              <ContactBox key = {index}>
                <H5>{location.location}</H5>
                <P textSmall>{location.locationReference || ""}</P>
              </ContactBox>
            ))}
          </Grid>
        </ContactList>
      </ContactInformation>
      <Footer/>
    </>
  )
}

export async function getStaticProps(context){
  const locationQuery =  '*[ _type == "ubicaciones"]'
  const locations = await sanityClient.fetch(locationQuery)
  console.log(locations)
  return{
    props:{locations:locations}
  }
}


const Heading = tw.h5`
w-[30%]
text-3xl
font-semibold
`

const Grid = tw.div`
sm:mt-0
mt-10
flex-1
grid
sm:grid-cols-2
grid-cols-1
pb-10
gap-y-6
`
const ContactBox = tw.div`
h-full
max-w-xs
`
const H5 = tw.h5`
text-base
text-gray-800
font-medium
`

const ContactList = styled.div`
${tw`flex flex-col h-full mt-10 sm:flex-row`}
${({borderB})=>borderB && (tw`border-b-[1px] border-b-[#d0bfb0]`)}
`

const ContactTextWrapper = tw.div`
mb-24

`

const H3 = tw.h3`
text-gray-900
text-5xl
font-semibold


`

const ContactInformation = tw.section`
py-24
max-w-7xl
mx-auto
w-full
h-full
px-4
`

const BackgroundOverlay = tw.div`
bg-gray-300/25
absolute
inset-0
z-10
`

const ImageWrapper = tw.div`
w-full
h-full
`

const BackgroundImage = tw.div`
absolute
inset-0
`

const NavigationWrapper = tw.section`
w-full
h-[50vh]
flex
items-center
justify-center
relative
overflow-hidden
`

const TextWrapper = tw.div`
max-w-7xl
w-full
h-full
px-4
mx-auto
flex
items-start
justify-center
flex-col
z-[9999]
`

const H1 = tw.h1`
text-6xl
font-semibold
text-white
`
const P = styled.p`
${tw`mt-2 text-base text-gray-700`}
${({textSmall})=> textSmall && (tw`text-sm`)}
${({lightGray})=> lightGray && (tw`text-xl text-gray-100`)}
`
