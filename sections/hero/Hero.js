// import tw from "tailwind-styled-components/dist/tailwind"
import { Navbar } from "../../components"
import tw from "twin.macro"

export default function Hero(){
  return (
    <Container>
      <Main>
        <Navbar/>
        <TextWrapper>
          <Wrapper>
            {/* <PreHeading>Nüwa</PreHeading> */}
            <Heading>Especialistas en tratamientos faciales y corporales. </Heading>
            <Button>Ver Tratamientos</Button>
          </Wrapper>
        </TextWrapper>
      </Main>
      {/* TODO - Display background image, add background color */}
      <ImgContainer>
        <BackgroundClr></BackgroundClr>
        <Img src = "https://images.pexels.com/photos/12115017/pexels-photo-12115017.jpeg?cs=srgb&dl=pexels-denys-mikhalevych-12115017.jpg&fm=jpg"/>
      </ImgContainer>
    </Container>
  )
}

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
bg-black/60
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
sm:text-left
text-center
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
text-gray-100
max-w-xl
text-4xl
md:text-5xl
lg:text-6xl
`
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
const Wrapper = tw.div``
