import tw from "twin.macro"

export default function Cta(){
  return (
    <Container>
      <Main>
        <TextWrapper>
          <CallToAction>Venga y lo ayudaremos a comenzar con una consulta gratuita.</CallToAction>
          {/* <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Paragraph> */}
          <Button>Hablemos</Button>
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