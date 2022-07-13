import { useState } from "react";
import { sanityClient } from "../../sanity";
import tw, {styled,css} from "twin.macro";
import { Navbar } from "../../components";
import {Footer} from '../../sections'
import { urlFor } from "../../sanity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faHeart, faMobileAndroidAlt } from "@fortawesome/free-solid-svg-icons";
import { Appointment } from "../../components";
import Head from "next/head";

export default function PageTreatment({treatment,allTreatments, locations}){
  const [modal,setModal] = useState(false)

  function changeModalStatus(state){
    setModal(state)
  }
  return (
    <>
    <Head>
      <meta charSet='UTF-8'/>
      <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
      <title>{treatment.treatmentName} - Nüwa</title>
      <meta name = "description" content = "Aprende más sobre nosotras y cómo empezamos!"/>
      <meta name = "keywords" content = 'NUWA, ESTETICA, BELLEZA'/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
    </Head>
    <Section className = "overflow-hidden">
      {treatment ? 
      <>
        <Navbar/>
        <TreatmentSection>
          <Hero>
            {treatment.treatmentImages != undefined ? 
            <Img src = {urlFor(treatment.treatmentImages.treatmentImage1.asset._ref)} alt = {treatment.treatmentImages.treatmentImage1.alt}/>
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
                <Button onClick = {()=>setModal(!modal)} className = "primaryBtn">
                Sacar Cita
                <FontAwesomeIcon icon = {faCalendarAlt}/>
                </Button>
              </TextWrapper>
            </TreatmentDetails>
          </Wrapper>
        </TreatmentSection>

        {/* TODO, there must be 3 benefits in order to display this section */}
        {treatment.benefits?.length >= 3 && (
          <Benefits>
            <BenefitsHeading>Los Beneficios</BenefitsHeading>
            <BenefitsSubHeading>Interesado? Descubre todos los beneficios que este tratamiento tiene para ti.</BenefitsSubHeading>
            <BenefitsCards>
                {treatment.benefits.map((benefit,i)=>(
                  <BenefitCard className = {`${i % 2 ? 'ml-auto' : 'mr-auto'}`} key = {i}>
                    <BenefitIcon className = {`${i % 2 ? 'sm:left-[-20px] left-[0px]' : 'sm:right-[-20px] right-[0px]'}`}>
                      <p className = "font-bold">{i+1}</p>
                    </BenefitIcon>
                    <BenefitTitle>{benefit.benefitTitle}</BenefitTitle>
                    <BenefitDesc>{benefit.benefitDesc}</BenefitDesc>
                  </BenefitCard>
                ))}
            </BenefitsCards>
          </Benefits>
        )}
        {modal && (<Appointment changeModalStatus = {changeModalStatus} allTreatments = {allTreatments} currentTreatment = {treatment} locations = {locations}/>)}
      </>  
      :
      <>
      cock eater
      </>
      }
    </Section>
    <Footer treatments = {allTreatments} limit = {5}/>
    </>
  )
}

const BenefitsSubHeading = tw.p`
text-gray-500
max-w-sm
text-lg
text-center
mx-auto
mb-24
`

const BenefitIcon = tw.div`
absolute
w-[50px]
h-[50px]
bg-[#C78F6D]
flex
items-center
justify-center
text-white
rounded-full
text-2xl
top-[-20px]
`

const BenefitDesc = tw.p`
text-sm
text-gray-500
`
const BenefitTitle = tw.h3`
font-semibold
mb-4
text-2xl
text-[#C78F6D]
`
const BenefitCard = styled.div`
${tw`
md:w-[40%]
w-full
rounded-xl
px-4
py-8
bg-[#EBEAEA]
shadow-xl
my-16
h-52
flex
items-start
justify-center
flex-col
relative
`}
`

const BenefitsHeading = tw.h3`
text-4xl
font-bold
my-2
text-center
`

const BenefitsCards = tw.div`
w-full
`

const Benefits = tw.section`
w-full
max-w-7xl
px-4
py-16
mx-auto
`

const Section = tw.section`
`

const Button = tw.button`
w-full
`

const Wrapper = tw.div`
flex
items-center
justify-center
pb-10
pt-5
sm:flex-1
h-[50vh]
sm:h-full
`

const Normal = tw.p`
my-4 text-base text-gray-700
max-w-xl
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
max-w-lg
flex
items-start
justify-center
flex-col
`

const TreatmentDetails = tw.div`
w-full
max-w-7xl
px-4
gap-5
flex
items-center
justify-center
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
sm:flex-1
sm:h-screen
h-[50vh]
overflow-hidden
`

const TreatmentSection = tw.section`
flex
items-center
justify-center
flex-col
sm:flex-row
text-6xl
w-full
h-screen
bg-[#EBEAEA]
`

export async function getServerSideProps({ params }) {
  // TODO Get list of treatments from sanity
  const treatmentsQuery = '*[ _type == "tratamientos"]';
  const locationQuery =  '*[ _type == "ubicaciones"]'
  const treatments = await sanityClient.fetch(treatmentsQuery)
  const locations = await sanityClient.fetch(locationQuery)

  // TODO find the index of the requested treatment
  const requestedTreatment = treatments.findIndex(treatment => treatment?.slug?.current === params.treatment)

  if(requestedTreatment === -1){
    // TODO, requested treatment doesnt exist, go to 404
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    }
  }else{
    // TODO, requested page exists
    console.log('exists bro')
    return {props:{treatment:treatments[requestedTreatment], allTreatments:treatments, locations: locations}}
  }
}
