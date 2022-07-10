// import tw from "tailwind-styled-components/dist/tailwind"
import { Navbar } from "../../components"
import tw from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"


export default function Hero(){
  return (
    <Container>
      <Main>
        <Navbar/>
        <TextWrapper>
          <Wrapper>
            {/* <PreHeading>Nüwa</PreHeading> */}
            <Heading className = "headingClr">Especialistas en tratamientos faciales y corporales. </Heading>
            <Link href = "/tratamientos">
              <Button className = "primaryBtn">
                Ver Tratamientos
                <FontAwesomeIcon icon = {faLayerGroup}/>
              </Button>
            </Link>
          </Wrapper>
        </TextWrapper>
          {/* <Image src = {image} layout = 'fill' objectFit="cover"/> */}
      </Main>
      {/* TODO - Display background image, add background color */}
      <ImgContainer>
        <Test>  
          <V autoPlay muted loop playsInline>
            <S src='/heroVideo.mp4' type="video/mp4" />
          </V>
        </Test>
        <BackgroundClr/>
      </ImgContainer>
    </Container>
  )
}

const V = tw.video`
w-full
h-screen
z-10
object-cover
`

const S = tw.source``

const Test = tw.div`
relative 
w-full
h-screen
`

const Container = tw.section`
  relative
  w-full
  h-[100vh]
  mx-auto
  object-contain
  overflow-hidden
`

const ImgContainer = tw.div`
w-full
flex
items-center
justify-center
absolute
inset-0
`

const BackgroundClr = tw.div`
bg-gray-600/25
inset-0 
absolute
`

const Img = tw.img`
w-full
h-full 
object-cover
`

const Main = tw.div`
max-w-7xl
mx-auto
w-full
h-full
`

const TextWrapper = tw.div`
absolute
z-10
h-full
max-w-7xl
w-full
flex
items-center
sm:justify-start
justify-center
px-4
`
const PreHeading = tw.p`
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
font-bold
text-white
`
const Heading = tw.p`
max-w-xl
text-4xl
md:text-5xl
lg:text-6xl
font-semibold
`
const Button = tw.button`
mt-7
`
const Wrapper = tw.div``
