import Link from "next/link"
import tw from "twin.macro"

export default function Navbar(){
  return (
    <Container>
      <Main>
        <Nav>
          <Middle>
            <Link href = "#">
              <Logo>Nüwa</Logo>
            </Link>
          </Middle>
        </Nav>
      </Main>
    </Container>
  )
}

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
text-xl
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
`

const Middle = tw.div`
flex-1
flex
items-center
justify-center
`



