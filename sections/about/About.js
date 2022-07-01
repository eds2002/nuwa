import React from 'react'
import tw from 'twin.macro'

export default function About(){
  return (
    <Container>
      <Main>
        <TextWrapper>
          <Heading>Sobre Nosotras</Heading>
          <Paragraph>Especialistas en tratamientos faciales y corporales. Trabajamos para resaltar tu belleza.</Paragraph>
          <Button>Aprende más</Button>
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
flex items-center justify-center flex-col
`

const Heading = tw.h3`
text-sm
font-bold
text-white
`

const Paragraph = tw.p`
text-4xl
text-center
max-w-3xl
mt-4
text-white
font-bold
`

const Button = tw.button`
bg-[#E1B594]
font-medium
text-sm
py-2
px-8
rounded-sm
text-white
my-5
`