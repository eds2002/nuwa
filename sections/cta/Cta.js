import tw from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage } from "@fortawesome/free-solid-svg-icons"

export default function Cta(){
  return (
    <Container>
      <Main>
        <TextWrapper>
          <CallToAction>Venga y lo ayudaremos a comenzar con una consulta gratuita.</CallToAction>
          {/* <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph> */}
          <Button>
            Hablemos
            <FontAwesomeIcon icon = {faMessage}/>
          </Button>
        </TextWrapper>
      </Main>
    </Container>
  )
}

const Container = tw.section`
w-full
h-full
bg-[#AEA79D]
`

const Main = tw.div`
max-w-7xl
w-full
px-4
mx-auto
py-24
`
const TextWrapper = tw.div`
flex 
items-center
justify-center 
flex-col 
text-white 
font-bold
`

const CallToAction = tw.p`
mt-4 text-white
md:text-5xl
text-3xl
font-bold
tracking-tight
text-center
max-w-3xl
`
const Paragraph = tw.p`
mt-4
text-xl
text-gray-600
`
const Button = tw.button`
py-3
text-sm
bg-[#E1B594]
rounded-md
text-white
font-medium
px-4
mt-7
transition
hover:bg-[#caa385]
flex items-center justify-center gap-x-2
cursor-pointer
`