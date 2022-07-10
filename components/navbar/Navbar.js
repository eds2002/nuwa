import Link from "next/link"
import tw, {styled, css}from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { MobNavbar } from "../mobNavbar/MobNavbar"

export default function Navbar(){
  const [mobileNav, setMobileNav] = useState(false)
  return (
    <Container className = "bg-white/5 backdrop-blur-sm">
      <Main className = "headingClr">
        <Nav>
          <Left>
            <IconsContainer>
              <Link href = "https://www.facebook.com/NUWAInnovacionEsteticaPeru">
                <a target = "_blank">
                  <SocialImage><FontAwesomeIcon icon={faFacebookF} /></SocialImage>
                </a>
              </Link>
              <Link href = "https://www.instagram.com/nuwainnovacionestetica">
                <a target = "_blank">
                  <SocialImage><FontAwesomeIcon icon={faInstagram} /></SocialImage>
                </a>
              </Link>
            </IconsContainer>
          </Left>
          <Middle>
            <Link href = "/">
              <Logo>Nüwa</Logo>
            </Link>
          </Middle>
          <Right>
            <ContactButton>
              <Link href = "/contacto">
                <LinkName>Contacto</LinkName>
              </Link>
            </ContactButton>
            <HamburgerContainer>
              <Hamburger onClick = {()=>setMobileNav(!mobileNav)} enableNav = {mobileNav} className = {mobileNav ? `bg-gray-400/25 transition` : `opacity-100 transition`}>
                  <Line top/>
                  <Line mid/>
                  <Line bottom/>
                  {mobileNav && (
                    <AnimationOverlay mobileNav/>
                  )}
              </Hamburger>
              <MobNavbar active = {mobileNav} setMobileNav = {setMobileNav}/>
            </HamburgerContainer>
          </Right>
        </Nav>
      </Main>
    </Container>
  )
}

const AnimationOverlay = tw.div`
absolute inset-0 rounded-full bg-gray-400/25 animate-ping pointer-events-none
`

const HamburgerContainer = tw.div`
relative
`

const Line = styled.div`
${tw`
w-[25px]
h-[3px]
my-0.5
rounded-full
bg-white
transition
`}

${({top})=>top && (tw`w-[25px] block`)}
${({mid})=>mid && (tw`w-[20px] block`)}
${({bottom})=>bottom && (tw`w-[15px] block`)}
`

const ContactButton = tw.div`
hidden
sm:block
`

const Hamburger = tw.div`
text-2xl
rounded-full
bg-white/20
hover:bg-white/50
hover:text-gray-400
active:bg-white/80
cursor-pointer
transition
z-10
flex
items-center
justify-center
flex-col
w-[40px]
h-[40px]
relative
`

const SocialImage = tw.span`
transition
cursor-pointer
px-2
hover:text-gray-400
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
sm:flex items-center justify-start
hidden
h-full

`

const Container = tw.div`
fixed
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
text-white
`

const Nav = tw.nav`
h-full
w-full 
flex items-center justify-center
`

const Logo = tw.h1`
text-3xl
font-bold
cursor-pointer
hover:text-gray-400
transition
`

const Links = tw.ul`
flex
text-sm
`

const LinkName = tw.a`
cursor-pointer
transition
ml-10
px-4
rounded-xl
hover:text-gray-400
`

const Middle = tw.div`
flex-1
flex
items-center
sm:justify-center
justify-start
h-full
z-[99999999]
`



