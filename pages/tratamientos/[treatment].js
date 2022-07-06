import { sanityClient } from "../../sanity";
import tw from "twin.macro";
import { Navbar } from "../../components";
import { urlFor } from "../../sanity";
import styled from 'styled-components'

export default function treatment({treatment}){
  console.log("bro",treatment)
  return (
    <>
      {treatment ? 
      <>
        <Navbar/>
        <Container>
          <Hero>
            <Heading>{treatment.treatmentName}</Heading>
            {treatment.treatmentImage?.asset ? 
            <Img src = {urlFor(treatment.treatmentImage.asset._ref)} alt = {treatment.treatmentImage.alt}/>
            :
            <Img src={"https://images.pexels.com/photos/9496596/pexels-photo-9496596.jpeg?cs=srgb&dl=pexels-brett-jordan-9496596.jpg&fm=jpg"} alt="Error"/>
            }
            <OverlayColor/>
          </Hero>
          <Wrapper>
            <TreatmentDetails>
              <TextWrapper>
                {treatment.longTreatmentDesc.map((p, index)=>(
                  <Paragraph style = {p.style} key = {index}>{p.children[0].text}</Paragraph>
                ))}
                <Button>Sacar Cita</Button>
              </TextWrapper>
              <TreatmentImageContainer>
                <TreatmentImage/>
                asdf
              </TreatmentImageContainer>
            </TreatmentDetails>
          </Wrapper>
        </Container>
      </>  
      :
      <>
      cock eater
      </>
      }
    </>
  )
}

const Button = tw.button`
sm:py-3
py-2
text-base
tracking-wide
bg-[#E1B594]
rounded-md
text-white
font-medium
w-[200px]
mt-7
transition
border-2
hover:bg-[#e1b59461]
border-[#E1B594]
`

const Wrapper = tw.div`
w-full
h-[70vh]
flex items-center justify-center
my-24
`

const Paragraph = styled.p`
${({style})=> style === 'normal' && tw`my-4 text-base text-gray-700`}
${({style})=> style === 'h1' && tw`my-4 text-6xl font-medium text-gray-800`}
${({style})=> style === 'h2' && tw`my-4 text-5xl font-bold text-gray-900`}
${({style})=> style === 'h3' && tw`my-4 text-4xl font-bold text-gray-900`}
`


const TreatmentImageContainer = tw.div`
flex-1
h-full
w-full
bg-green-500
`

const TreatmentImage = tw.img``

const TextWrapper = tw.div`
w-full
h-full
flex-1
`

const TreatmentDetails = tw.div`
flex
justify-center
w-full
max-w-7xl
px-4
mx-auto
sm:flex-row
flex-col
`


const Heading = tw.h3`
absolute
text-white
z-10
`

const OverlayColor = tw.div`
absolute
inset-0
bg-black/50
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
h-[30vh] md:h-[45vh]
overflow-hidden
flex items-center justify-center
`

const Container = tw.section`
flex
items-center
justify-center
text-6xl
h-full
w-full
flex-col
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
    return {props:{treatment:treatments[requestedTreatment]}}
  }
}
