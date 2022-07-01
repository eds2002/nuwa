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
            <PreHeading>Nüwa</PreHeading>
            <Heading>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Heading>
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
h-[100vh]
flex
items-center
justify-center
absolute
inset-0
`

const BackgroundClr = tw.div`
bg-black/20
inset-0 
absolute
`

const Img = tw.img`
w-full
h-full 
object-cover
`

const Main = tw.div`
px-4
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
justify-start
`
const PreHeading = tw.p`
text-7xl
font-bold
text-white
`
const Heading = tw.p`
text-gray-100
text-xl
max-w-xl
`
const Button = tw.button`
py-3
text-sm
bg-[#E1B594]
rounded-sm
text-white
font-medium
w-[200px]
mt-5
transition
`
const Wrapper = tw.div``
