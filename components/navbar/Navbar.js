import Link from "next/link"
import tw from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
  return (
    <Container>
      <Main>
        <Nav>
          <Left>
            <IconsContainer>
              <SocialImage><FontAwesomeIcon icon={faFacebookF} /></SocialImage>
              <SocialImage><FontAwesomeIcon icon={faInstagram} /></SocialImage>
            </IconsContainer>
          </Left>
          <Middle>
            <Link href = "#">
              <Logo>Nüwa</Logo>
            </Link>
          </Middle>
          <Right>
            <ContactButton>
              <Link href = "#">
                <LinkName>Contacto</LinkName>
              </Link>
            </ContactButton>
            <Hamburger><FontAwesomeIcon icon = {faBars}/></Hamburger>
          </Right>
        </Nav>
        {/* <MobileNav>
          <Panel>
            <Top>
              <Link href = "#">
                <MobileLogo>Nüwa</MobileLogo>
              </Link>
              <CloseButton><FontAwesomeIcon icon = {faTimes}/></CloseButton>
            </Top>
            <MiddleMobile>
              <Link href = "#">
                <MobileLink active = "active">Inicio</MobileLink>
              </Link>
              <Link href = "#">
                <MobileLink>Tratamientos</MobileLink>
              </Link>
              <Link href = "#">
                <MobileLink>Contacto</MobileLink>
              </Link>
              <Link href = "#">
                <MobileLink>Ayuda</MobileLink>
              </Link>
            </MiddleMobile>
          </Panel>
        </MobileNav> */}
      </Main>
    </Container>
  )
}

const MiddleMobile = tw.div`
py-5
flex flex-col
gap-y-3
`

const MobileLink = tw.a`
text-black
text-2xl
font-bold
py-2
rounded-md
px-4
cursor-pointer
hover:text-white
`

const CloseButton = tw.span`
text-xl
text-gray-400
`
const MobileLogo = tw.p`
text-xl
font-bold
`

const Top = tw.div`
text-center
flex justify-between items-center
px-4
py-5
`

const Panel = tw.div`
sm:hidden
absolute
right-0
w-[50vw]
shadow-xl
bg-[#F6ECE3]
h-full
p-4
`

const MobileNav = tw.div`
fixed inset-0
bg-black/50
sm:hidden
`

const ContactButton = tw.div`
hidden
sm:block
`

const Hamburger = tw.div`
text-2xl
px-2
ml-5
text-white
rounded-full
hover:bg-white/10
cursor-pointer
`

const SocialImage = tw.span`
text-[#F1E9DC]
hover:text-[#E1B594]
hover:border-[#E1B594]
transition
cursor-pointer
px-2
`

const Right = tw.div`
flex-1
flex
items-center justify-end
text-sm
h-full
`

const IconsContainer = tw.div`
items-center justify-center gap-x-2
hidden
sm:flex
`

const Left = tw.div`
flex-1
flex items-center justify-start
text-white
h-full
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
cursor-pointer
transition
ml-10
px-4
rounded-xl
`

const Middle = tw.div`
flex-1
flex
items-center
justify-center
text-white
h-full
`



