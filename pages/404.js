import { Navbar } from "../components"
import { Footer } from "../sections"
import tw from "twin.macro"
import Link from "next/link"


const Error = () => {
  return (
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