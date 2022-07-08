import { useState } from "react";
import { sanityClient } from "../../sanity";
import tw from "twin.macro";
import { Navbar } from "../../components";
import { urlFor } from "../../sanity";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMobileAndroidAlt } from "@fortawesome/free-solid-svg-icons";
import { Appointment } from "../../components";
import Head from "next/head";

export default function PageTreatment({treatment,allTreatments}){
  const [modal,setModal] = useState(false)

  function changeModalStatus(state){
    setModal(state)
  }

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
    </Head>
    <Section className = "overflow-hidden">
      {treatment ? 
      <>
        <Navbar/>
        <Container>
          <Hero>
            {treatment.treatmentImages != undefined ? 
            <Img src = {urlFor(treatment.treatmentImages.treatmentImage2.asset._ref)} alt = {treatment.treatmentImages.treatmentImage1.alt}/>
            :
            <Img src={"https://images.pexels.com/photos/9496596/pexels-photo-9496596.jpeg?cs=srgb&dl=pexels-brett-jordan-9496596.jpg&fm=jpg"} alt="Error"/>
            }
            <OverlayColor/>
          </Hero>
          <Wrapper>
            <TreatmentDetails>
              <TextWrapper>
                {treatment.longTreatmentDesc.map((p, index)=>(
                  <div key = {index}>
                    {p.style === 'normal' &&
                      <Normal key = {index}>{p.children[0].text}</Normal>
                    }
                    {p.style === 'h1' &&
                      <H1 key = {index}>{p.children[0].text}</H1>
                    }
                    {p.style === 'h2' &&
                      <H2 key = {index}>{p.children[0].text}</H2>
                    }
                    {p.style === 'h3' &&
                      <H3 key = {index}>{p.children[0].text}</H3>
                    }
                  </div>
                ))}
                <Button onClick = {()=>setModal(!modal)}>
                Sacar Cita
                <FontAwesomeIcon icon = {faCalendarAlt}/>
                </Button>
              </TextWrapper>
            </TreatmentDetails>
          </Wrapper>
        </Container>
        {modal && (<Appointment changeModalStatus = {changeModalStatus} allTreatments = {allTreatments} currentTreatment = {treatment}/>)}
      </>  
      :
      <>
      cock eater
      </>
      }
    </Section>
    </>
  )
}

const Section = tw.section``

const Button = tw.button`
sm:py-3
py-2
text-base
tracking-wide
bg-[#E1B594]
rounded-md
text-white
font-medium
md:w-[200px]
w-full
mt-7
transition
border-2
hover:bg-[#e1b59461]
border-[#E1B594]
flex items-center justify-center gap-x-4
`

const Wrapper = tw.div`
bg-gray-400
h-full
flex
items-center
justify-center
pb-10
pt-5
sm:flex-1
`

const Normal = tw.p`
my-4 text-base text-gray-700
`

const H1 = tw.h1`
my-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800
`

const H2 = tw.h2`
my-4 text-5xl font-bold text-gray-900
`

const H3 = tw.h3`
my-4 text-4xl font-bold text-gray-900
`


const TreatmentImageContainer = tw.div`
w-full
bg-yellow-600/50
rounded-xl
my-auto
md:flex-1
h-full
`

const TreatmentImage = tw.img`
rounded-xl
`

const TextWrapper = tw.div`
w-full
h-full
flex-1
`

const TreatmentDetails = tw.div`
w-full
max-w-7xl
px-4
gap-5
`


const Heading = tw.h3`
absolute
text-white
z-10
font-medium
tracking-tight
text-3xl md:text-5xl lg:text-6xl
text-center
`

const OverlayColor = tw.div`
absolute
inset-0
bg-black/25
`

const Img = tw.img`
w-full
h-full
object-cover
select-none
pointer-events-none
`

const Hero = tw.div`
relative
w-full
h-full
flex-1
`

const Container = tw.section`
flex
items-center
justify-center
flex-col
sm:flex-row
text-6xl
w-full
h-[100vh]
`

export async function getServerSideProps({ params }) {
  // TODO Get list of treatments from sanity
  const query = '*[ _type == "tratamientos"]';
  const treatments = await sanityClient.fetch(query)

  // TODO find the index of the requested treatment
  const requestedTreatment = treatments.findIndex(treatment => treatment?.slug?.current === params.treatment)

  if(requestedTreatment === -1){
    // TODO, requested treatment doesnt exist
    return{props:{treatment:null}}
  }else{
    // TODO, requested page exists
    console.log('exists bro')
    return {props:{treatment:treatments[requestedTreatment], allTreatments:treatments}}
  }
}
