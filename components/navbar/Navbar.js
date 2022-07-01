import Link from "next/link"
import tw from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Navbar(){
  return (
    <Container>
      <Main>
        <Nav>
          <Left>
            <IconsContainer>
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faInstagram} />
            </IconsContainer>
          </Left>
          <Middle>
            <Link href = "#">
              <Logo>Nüwa</Logo>
            </Link>
          </Middle>
          <Right>
            <Link href = "#">
              <LinkName>Contacto</LinkName>
            </Link>
          </Right>
        </Nav>
      </Main>
    </Container>
  )
}

const Right = tw.div`
flex-1
flex
items-center justify-end
text-sm
`

const IconsContainer = tw.div`
items-center justify-center gap-x-3
hidden
sm:flex
`

const Left = tw.div`
flex-1
flex items-center justify-start
text-white
`

const Container = tw.div`
absolute
top-0
bottom-0
right-0
z-[999999999999]
h-20
w-full
mx-auto
`

const Main = tw.div`
px-4
max-w-7xl
mx-auto
h-full
flex
`

const Nav = tw.nav`
h-full
w-full 
flex items-center justify-center
`

const Logo = tw.h1`
text-2xl
font-medium
text-[#EEE1D0]
cursor-pointer
`

const Links = tw.ul`
flex
text-sm
`

const LinkName = tw.a`
text-[#F1E9DC]
hover:text-[#E1B594]
hover:border-[#E1B594]
cursor-pointer
transition
ml-10
px-4
border-[1px]
border-white
rounded-xl
`

const Middle = tw.div`
flex-1
flex
items-center
justify-center
`



