import tw from "twin.macro"
import { navigation } from "./footer.data"
import Link from "next/link"
import Image from "next/image"

export default function Footer(){
  return (
    <Container aria-labelledby="footer-heading">
      <SR>
        Footer
      </SR>
      <Main>
        <Grid>
          <CompanyInfo>
            <div>
              Nüwa // Logo
            </div>
            <Slogan>
              Making the world a better place through constructing elegant hierarchies.
            </Slogan>
            <SocialLinks>
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </SocialLinks>
          </CompanyInfo>
          <LinkHeadings>
            <GridColOne>
              <Solutions>
                <HeadingName>Solutions</HeadingName>
                <LinkList role="list">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
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
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
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
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
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
                      <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
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

const SR = tw.span`
sr-only
`

const CopyrightInfo = tw.p`
text-base text-gray-400 xl:text-center
`

const Copyright = tw.div`
pt-8 mt-12 border-t border-gray-200
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
text-sm font-semibold tracking-wider text-gray-400 uppercase
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
text-base text-gray-500
`
const Container = tw.footer`
bg-white
`

const Main = tw.div`
px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8
`

const Grid = tw.div`
xl:grid xl:grid-cols-3 xl:gap-8
`

const CompanyInfo = tw.div`
space-y-8 xl:col-span-1
`