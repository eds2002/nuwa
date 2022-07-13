import { Navbar } from "../components"
import { Footer } from "../sections"
import tw from "twin.macro"
import Link from "next/link"
import Head from "next/head"


const Error = () => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8'/>
        <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'/>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
        <title>404-Nüwa</title>
        <meta name = "keywords" content = 'NUWA, ESTETICA, BELLEZA'/>
      </Head>
      <Container>
      <Navbar/>
      <Content>
        <Logo>Nüwa</Logo>
        <ErrorText>404 Error</ErrorText>
        <Heading>Página no encontrada</Heading>
        <Paragraph>Lo sentimos, no pudimos encontrar la página que estás buscando.</Paragraph>
        <Link href = "/">
          <Anchor>Regresar a casa</Anchor>
        </Link>
      </Content>
      <Footer/>
      </Container>
    </>
  )
}

const Anchor = tw.a`
mt-5
cursor-pointer
text-[#C78F6D]
text-base
hover:text-[#a6785b]
`

const Paragraph = tw.p`
text-gray-500
text-base
max-w-md
text-center
mt-2
`

const Heading = tw.h3`
text-4xl
font-semibold
`

const ErrorText = tw.p``

const Logo = tw.h1`
text-5xl
font-bold
text-[#BCBCC2]
mb-10
`

const Content = tw.div`
flex
items-center
justify-center
flex-col
h-[100vh]
`

const Container = tw.section`
w-full
h-full
`

export default Error