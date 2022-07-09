import React from 'react'
import tw from 'twin.macro'

export default function About(){
  return (
    <Container>
      <Main>
        <TextWrapper>
          <Heading>Sobre Nosotras</Heading>
          <Paragraph>Especialistas en tratamientos faciales y corporales. Trabajamos para resaltar tu belleza.</Paragraph>
          <Button className = "primaryBtn">Aprende más</Button>
        </TextWrapper>
      </Main>
    </Container>
  )
}

const Container = tw.section`
w-full
h-full
bg-[#EBEAEA]
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
text-[#C78F6D]
`

const Paragraph = tw.p`
text-center
max-w-3xl
mt-4 text-gray-700
md:text-5xl
text-3xl
font-bold
tracking-tight
`

const Button = tw.button`mt-7`