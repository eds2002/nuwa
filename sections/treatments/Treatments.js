import tw from "twin.macro"
import {services} from "./treatments.data"

export default function Treatments() {
  return (
    <Container>
      <Main>
        <TreatmentsWrapper>
          <TextWrapper>
            <Heading>Servicios</Heading>
            <Paragraph>Servicios que a nuestros clientes les encantan.</Paragraph>
          </TextWrapper>

          <Service>
            {services.map((service)=>(
              <ServiceWrapper>
                <ServiceText>
                  <ServiceHeading>{service.heading}</ServiceHeading>
                  <ServiceParagraph>{service.paragraph}</ServiceParagraph>
                </ServiceText>
                <ServiceImageWrapper>
                  <ServiceImage src = {service.image} alt = {service.alt}/>
                </ServiceImageWrapper>
              </ServiceWrapper>
            ))}
          </Service>
        </TreatmentsWrapper>
      </Main>
    </Container>
  )
}

const Container = tw.section`
w-full
h-full
`

const Main = tw.div`
max-w-7xl
px-4
mx-auto
`

const TreatmentsWrapper = tw.div`
max-w-2xl mx-auto py-24 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8
`

const TextWrapper = tw.div`
w-full
flex items-center justify-center flex-col
`

const Heading = tw.p`
text-[#A87853]
text-sm
font-extrabold
`

const Paragraph = tw.p`
max-w-xl
text-center
text-3xl
font-bold
mt-4
text-black
`

const Service = tw.div`
mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8
`

const ServiceWrapper = tw.div`
flex flex-col-reverse
`

const ServiceText = tw.div`
mt-6
`

const ServiceHeading = tw.h3`
text-sm font-medium text-gray-900
`

const ServiceParagraph = tw.p`
mt-2 text-sm text-gray-500
`

const ServiceImageWrapper = tw.div`
aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden
`

const ServiceImage = tw.img`
object-center object-cover
`