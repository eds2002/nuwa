import tw from "twin.macro"
import { navigation } from "./footer.data"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"

export default function Footer(){
  return (
    <Container aria-labelledby="footer-heading">
      <SR>
        Footer
      </SR>
      <Main>
        <Grid>
          <CompanyInfo>
            <Logo>
              Nüwa
            </Logo>
            <Slogan>
              Especialistas en tratamientos faciales y corporales. Trabajamos para resaltar tu belleza.
            </Slogan>
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
            <GridColOne>
              <Solutions>
                <HeadingName>Tratamientos</HeadingName>
                <LinkList role="list">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-200 transition hover:text-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </LinkList>
              </Solutions>
              <Support>
                <HeadingName className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Support</HeadingName>
                <LinkList role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-200 transition hover:text-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </LinkList>
              </Support>
            </GridColOne>
            <GridColTwo>
              <Company>
                <HeadingName className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Company</HeadingName>
                <LinkList role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-200 transition hover:text-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </LinkList>
              </Company>
              <Legal>
                <HeadingName className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Legal</HeadingName>
                <LinkList role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-200 transition hover:text-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </LinkList>
              </Legal>
            </GridColTwo>
          </LinkHeadings>
        </Grid>
        <Copyright>
          <CopyrightInfo>&copy; 2022 Nuwa, Inc. All rights reserved.</CopyrightInfo>
        </Copyright>
      </Main>
    </Container>
  )
}

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
mt-12 md:mt-0
`

const LinkList = tw.ul`
mt-4 space-y-4
`

const HeadingName = tw.h3`
text-sm font-semibold  text-white uppercase
`

const Solutions = tw.div``

const GridColOne = tw.div`
md:grid md:grid-cols-2 md:gap-8
`

const LinkHeadings = tw.div`
grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2
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