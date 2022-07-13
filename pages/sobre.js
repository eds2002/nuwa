import Image from "next/image"
import tw from "twin.macro"
import aboutImage from '../assets/aboutus.webp'
import { Navbar } from "../components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup, faMessage } from "@fortawesome/free-solid-svg-icons"
import {sanityClient} from '../sanity'
import { Cta, Footer } from "../sections"
import Link from "next/link"
import Head from "next/head"


export default function Sobre({aboutData}){
  return (
    <Main>
      <Head>
        <meta charSet='UTF-8'/>
        <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'/>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
        <title>Sobre Nosotras- Nüwa</title>
        <meta name = "description" content = "Aprende más sobre nosotras y cómo empezamos!"/>
        <meta name = "keywords" content = 'NUWA, ESTETICA, BELLEZA'/>
      </Head>
      <Navbar/>
      <Header>
        <HeaderImage>
          <TextWrapper>
            <Heading>Especialistas en tratamientos faciales y corporales. Trabajamos para resaltar tu belleza.</Heading>
            <ButtonsWrapper>
              <Link href = "/tratamientos">
                <ViewTreatmentsBtn className = "primaryBtn ">
                  Ver Tratamientos
                  <FontAwesomeIcon icon = {faLayerGroup}/>
                </ViewTreatmentsBtn>
              </Link>
              <Link href = "/contacto">
                <ContactBtn className = "secondaryBtn">
                  Hablemos
                  <FontAwesomeIcon icon = {faMessage}/>
                </ContactBtn>
              </Link>
            </ButtonsWrapper>
          </TextWrapper>
          <BgOverlay/>
          <Image src = {aboutImage} layout = 'fill' className = "object-cover" priority/>
        </HeaderImage>
      </Header>
      <About>
        <MissionWrapper>
          <MissionPreHeading>Nuestra misión</MissionPreHeading>

          <MissionHeading>
            {aboutData[0]?.mission?.missionTitle ? 
              <>{aboutData[0]?.mission?.missionTitle}</>
            :
              'Aquí para restaurar su belleza.'
            }
          </MissionHeading>
          <MissionParagraph>
            {aboutData[0]?.mission?.missionDesc.length > 0 ? 
                <>{aboutData[0]?.mission?.missionDesc.map((text,i)=>(
                  <span key = {i}>
                    {text.children[0].text}
                  </span>
                ))}
                </>
              :
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reiciendis corporis! Atque ut quam officiis eos facilis quia doloremque deserunt dolor, esse veniam omnis nemo facere perspiciatis, aspernatur repudiandae adipisci!'
            }
          </MissionParagraph>
        </MissionWrapper>
        <StoryWrapper>
          <StoryPreHeading>Nuestra historia</StoryPreHeading>

          <StoryHeading>
              {aboutData[0]?.story?.storyTitle ? 
                <>{aboutData[0]?.story?.storyTitle}</>
              :
                'Establecido en (mes, año).'
              }
          </StoryHeading>
          <StoryParagraph>
          {aboutData[0]?.mission?.missionDesc.length > 0 ? 
          <>
            {aboutData[0]?.story?.storyDesc.map((text,i)=>(
              <span key = {i}>
                {text.children[0].text}
              </span>
            ))}
          </>
          :
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reiciendis corporis! Atque ut quam officiis eos facilis quia doloremque deserunt dolor, esse veniam omnis nemo facere perspiciatis, aspernatur repudiandae adipisci!'
          }
          </StoryParagraph>
        </StoryWrapper>
      </About>
      <Values>
        <ValuesTextWrapper>
          <ValuesPreHeading>Nuestros valores</ValuesPreHeading>
          <ValuesHeading>
            {aboutData[0]?.values?.valuesPreheading ? 
              <>{aboutData[0]?.values?.valuesPreheading}</>
            :
             'Empresa de alto crecimiento con la cultura de las personas primero.'
            }
          </ValuesHeading>
        </ValuesTextWrapper>


        <ValuesList>
            {/* TODO, data must be within 3-6 benefits. Else this will not be displayed */}
          {aboutData[0].values.values.length >= 3 ? 
          <>
            {aboutData[0].values.values.map((item,i)=>(
              <ValueBox key = {i}>
                <ValueBoxTitle>{item.benefitTitle}</ValueBoxTitle>
                <ValueBoxDesc>{item.benefitDesc}</ValueBoxDesc>
              </ValueBox>
            ))}
          </>
          :
          <>
          <ValueBox>
            <ValueBoxTitle>Usted nos importa</ValueBoxTitle>
            <ValueBoxDesc>¿Primera vez con nosotros? Comencemos con una consulta gratuita.</ValueBoxDesc>
          </ValueBox>
          <ValueBox>
            <ValueBoxTitle>Dedicamos tiempo a tu belleza.</ValueBoxTitle>
            <ValueBoxDesc>Solo queremos lo mejor para ti, y siempre ponemos el 100% para asegurarnos de que te sientas increíble.</ValueBoxDesc>
          </ValueBox>
          <ValueBox>
            <ValueBoxTitle>Nos encanta lo que hacemos.</ValueBoxTitle>
            <ValueBoxDesc>Nuestro equipo está lleno de amantes de la cosmética, siempre obtendrás el mejor trato de nuestra parte.</ValueBoxDesc>
          </ValueBox>
          </>
          }
        </ValuesList>
      </Values>
      <Cta/>
      <Footer/>
    </Main>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[ _type == "sobre"]';
  const about = await sanityClient.fetch(query)
  console.log(about)

  if(!about.length){
    return {
      props:{
        aboutData: null,
      }
    }
  }else{
    return {
      props:{
        aboutData:about
      }
    }
  }
}

const ValuesList = tw.div`
grid
lg:grid-cols-3
sm:grid-cols-2
grid-cols-1
place-items-center
gap-6
mt-16
`

const ValueBox = tw.div`
h-full
w-full
bg-[#EBEAEA]
rounded-2xl
p-8
shadow-xl
text-center
`
const ValueBoxTitle = tw.p`
text-2xl
font-medium
mb-2
`
const ValueBoxDesc = tw.p`
text-gray-600
`

const ValuesTextWrapper = tw.div`
flex
items-center justify-center flex-col 
max-w-xl
text-center
mx-auto
`

const ValuesHeading = tw.h3`
text-4xl
font-bold
mb-2
text-gray-700
`

const ValuesPreHeading = tw.h5`
text-[#C78F6D]
uppercase
text-xs
font-medium
`

const Values = tw.section`
py-24
w-full
h-full
max-w-7xl
px-4
mx-auto
`

const StoryParagraph = tw.p`
text-gray-500
`

const StoryHeading = tw.h3`
text-4xl
font-bold
mb-2
text-gray-700
`

const StoryPreHeading = tw.h5`
text-[#C78F6D]
uppercase
text-xs
font-medium
`

const StoryWrapper = tw.div`
flex
justify-center
flex-col
w-full
sm:self-end
max-w-md
`

const MissionParagraph = tw.p`
text-gray-500
`

const MissionHeading = tw.h3`
text-4xl
font-bold
mb-2
text-gray-700
`
const MissionPreHeading = tw.h5`
text-[#C78F6D]
uppercase
text-xs
font-medium
mr-auto
`

const MissionWrapper = tw.div`
flex
items-start
justify-center
flex-col
max-w-md
w-full
sm:self-start
`

const About = tw.div`
py-24
w-full
max-w-5xl
px-4
h-full
mx-auto
flex
items-center
justify-center
flex-col
gap-y-20
`
const ContactBtn = tw.button``
const ViewTreatmentsBtn = tw.button``

const ButtonsWrapper = tw.div`
flex
items-center justify-center
gap-3
px-4
sm:flex-row
flex-col
w-full
`
const Heading = tw.h2`
lg:max-w-5xl
md:max-w-4xl
sm:max-w-3xl
text-center
lg:text-6xl
md:text-5xl
sm:text-4xl
text-3xl

text-white
font-bold
mb-10
`
const TextWrapper = tw.div`
relative
z-[9999]
w-full
h-full
flex
items-center justify-center flex-col
max-w-7xl
mx-auto
px-4
`

const BgOverlay = tw.div`
absolute inset-0 bg-yellow-600/5
z-10
`

const HeaderImage = tw.div`
absolute
inset-0
`

const Header = tw.div`
w-full
h-[100vh]
relative
`

const Main = tw.section`
w-full
h-full
`
