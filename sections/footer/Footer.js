import tw from "twin.macro"
import { navigation } from "./footer.data"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"
import { string_to_slug } from "../../utils/slugify"

export default function Footer({treatments}){
  return (
    <Container aria-labelledby="footer-heading">
      <SR>
        Footer
      </SR>
      <Main>
        <Grid>
          <CompanyInfo>
            <Logo>Nüwa</Logo>
            <Slogan>Especialistas en tratamientos faciales y corporales. Trabajamos para resaltar tu belleza.</Slogan>
            <Number>
              <Icon>
                <FontAwesomeIcon icon = {faPhone}/>
              </Icon>
              <a href={'tel:+51 944 900 077'}>+51 944 900 077</a>
            </Number>
            <Email>
              <Icon>
                <FontAwesomeIcon icon = {faEnvelope}/>
              </Icon>
              <a href = "mailto:nuwainnovacionestetica@gmail.com" >nuwainnovacionestetica@gmail.com</a>
            </Email>
          </CompanyInfo>
          <LinkHeadings>
            <AllTreatments>
              <HeadingName>Navegación</HeadingName>
                <LinkList role="list">
                  {navigation.navigate.map((item)=>(
                    <List key={item.name}>
                      <Link href = {item.href}>
                        <Anchor className="text-base text-gray-200 transition hover:text-gray-300">
                          {item.name}
                        </Anchor>
                      </Link>
                    </List>
                  ))}
                </LinkList>
            </AllTreatments>
            <Support>
              <HeadingName>Apoyo</HeadingName>
              <LinkList>
                {navigation.support.map((item) => (
                  <List key={item.name}>
                    <Link href = {item.href}>
                      <Anchor className="text-base text-gray-200 transition hover:text-gray-300">
                        {item.name}
                      </Anchor>
                    </Link>
                  </List>
                ))}
              </LinkList>
            </Support>
            <Company>
              <HeadingName>Sociales</HeadingName>
              <LinkList >
                {navigation.socials.map((item) => (
                  <List key={item.name}>
                    <Link href = {item.href}>
                      <Anchor className="text-base text-gray-200 transition hover:text-gray-300">
                        {item.name}
                      </Anchor>
                    </Link>
                  </List>
                ))}
              </LinkList>
            </Company>
          </LinkHeadings>
        </Grid>
        <Copyright>
          <CopyrightInfo>&copy; 2022 Nüwa, Inc. All rights reserved.</CopyrightInfo>
        </Copyright>
      </Main>
    </Container>
  )
}

export const getStaticProps = async () =>{
  const query = '*[ _type == "tratamientos"]';
  const treatments = await sanityClient.fetch(query)

  if(!treatments.length){
    return {
      props:{
        treatments: [],
      }
    }
  }else{
    return {
      props:{
        treatments:treatments
      }
    }
  }
}

const Anchor = tw.div`
text-white
hover:text-gray-200
cursor-pointer
transition
`

const List = tw.li``


const Logo = tw.p`
text-4xl
text-white
font-bold
`

const Icon = tw.span``

const Number = tw.p`
mt-3
text-sm
flex items-center justify-start gap-x-3
text-gray-100
hover:text-gray-300
transition
`
const Email = tw.p`
mt-3
text-sm
flex items-center justify-start gap-x-3
text-gray-100
hover:text-gray-300
transition
`
const Location = tw.p`
mt-3
text-sm
flex items-center justify-start gap-x-3
text-gray-100
hover:text-gray-300
transition
max-w-xs
`

const SR = tw.span`
sr-only
`

const CopyrightInfo = tw.p`
text-base text-gray-200 xl:text-center
`

const Copyright = tw.div`
mt-12 
`

const Legal = tw.div`
mt-12 md:mt-0
`

const Company = tw.div``

const GridColTwo = tw.div`
md:grid md:grid-cols-2 md:gap-8
`

const Support = tw.div`
h-full
`

const LinkList = tw.ul`
mt-4 space-y-4
`

const HeadingName = tw.h3`
text-sm font-semibold  text-[#63463A] uppercase
`

const AllTreatments = tw.div`
h-full
`

const GridColOne = tw.div`
md:grid md:grid-cols-2 md:gap-8
`

const LinkHeadings = tw.div`
grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 xl:mt-0 xl:col-span-2
`

const SocialLinks = tw.div`
flex space-x-6
`

const Slogan = tw.p`
text-base text-gray-100
`
const Container = tw.footer`
bg-[#BCBCC2]
`

const Main = tw.div`
px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8
`

const Grid = tw.div`
xl:grid xl:grid-cols-3 xl:gap-8
`

const CompanyInfo = tw.div`xl:col-span-1
`