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
text-4xl
text-center
max-w-3xl
`
const Paragraph = tw.p`
mt-4
text-xl
text-gray-600
`
const Button = tw.button`
bg-[#E1B594]
font-medium
text-sm
py-3
px-8
rounded-sm
text-white
my-6
w-[200px]
`