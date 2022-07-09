import tw, { styled,css } from "twin.macro"
import {features} from "./treatments.data"
import Link from "next/link"
import { urlFor } from "../../sanity"
import { string_to_slug } from "../../utils/slugify"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

export default function Treatments({textHidden, limit, treatments}) {
  console.log("yuo",treatments)
  return (
    <Container>
      <SectionText textHidden = {textHidden}>
        <Heading>Servicios</Heading>
        <Paragraph isPrimary = {true}>
          Servicios que a nuestros clientes les encantan. 
        </Paragraph>
      </SectionText>

      <Features>
        {treatments.map((treatment, featureIdx) => (
          <>
            {/* TODO// If there is a limit present display only the limit amount */}
            {limit ? 
              <>
              {featureIdx <= limit-1 && (
                <FeatureContainer key={treatment.id}>
                  <FeatureText position = {featureIdx % 2 === 0 ? 'true' : 'false'}
                      // featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                      // 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                  >
                    <FeatureH3>{treatment.treatmentName}</FeatureH3>
                    <FeatureP>{treatment.shortTreatmentDesc}</FeatureP>
                    <ButtonsWrapper>
                      <Link href = {`/tratamientos/${string_to_slug(treatment.treatmentName)}`}>
                        <Appointment>
                          Sacar Cita
                          <FontAwesomeIcon icon = {faCalendarAlt}/>
                        </Appointment>
                      </Link>
                      <Link href = "/tratamientos/${treatmentName}">
                        <LearnMore>Aprende Más</LearnMore>
                      </Link>
                    </ButtonsWrapper>
                  </FeatureText>
                  {/* <p>{featureIdx % 2 === 0 ? 'true': 'false'}</p> */}
                  <FeatureImgContainer position = {featureIdx % 2 === 0 ? 'true' : 'false'}>
                    <FeatureImgWrapper>
                      {treatment.treatmentImages != undefined ? 
                      <FeatureImg src={urlFor(treatment.treatmentImages.treatmentImage1.asset._ref)} alt={treatment.treatmentImage?.alt} />
                      :
                      <FeatureImg src={"https://images.pexels.com/photos/9496596/pexels-photo-9496596.jpeg?cs=srgb&dl=pexels-brett-jordan-9496596.jpg&fm=jpg"} alt="Error" />
                      }
                    </FeatureImgWrapper>
                  </FeatureImgContainer>
                </FeatureContainer>
              )}
              </>
            :
              <>
              <FeatureContainer key={treatment.id}>
                <FeatureText position = {featureIdx % 2 === 0 ? 'true' : 'false'}>
                  <FeatureH3>{treatment.treatmentName}</FeatureH3>
                  <FeatureP>{treatment.shortTreatmentDesc}</FeatureP>
                  <ButtonsWrapper>
                      <Link href = {`/tratamientos/${treatmentName}`}>
                        <Appointment>Sacar Cita</Appointment>
                      </Link>
                      <Link href = "/tratamientos/${treatmentName}">
                        <LearnMore>Aprende Más</LearnMore>
                      </Link>
                    </ButtonsWrapper>
                </FeatureText>
                <FeatureImgContainer position = {featureIdx % 2 === 0 ? 'true' : 'false'}>
                  <FeatureImgWrapper>
                    <FeatureImg src={treatment.treatmentImage.asset?._ref} alt={treatment.treatmentImage.alt} />
                  </FeatureImgWrapper>
                </FeatureImgContainer>
              </FeatureContainer>
              </>
            }
          </>
        ))}
        {limit && (
          <ViewAllTreatments>
            <Link href = "/tratamientos">
              <LinkName>
                Ver todos los tratamientos
                <FontAwesomeIcon icon = {faLayerGroup}/>
              </LinkName>
            </Link>
          </ViewAllTreatments>
        )}
      </Features>
    </Container>
  )
}

const ButtonsWrapper = tw.div`
flex items-center gap-x-5
mt-5
`

const Appointment = tw.a`
py-3
text-sm
bg-[#E1B594]
rounded-md
text-white
font-medium
px-8
mt-7
transition
hover:bg-[#caa385]
flex items-center justify-center gap-x-2
cursor-pointer
`
const LearnMore = tw.a`
py-3
text-xs
rounded-md
text-gray-800
hover:text-gray-600
font-medium
mt-7
transition
flex items-center justify-center gap-x-2
cursor-pointer
`

const LinkName = tw.a`
py-3
text-sm
bg-[#E1B594]
rounded-md
text-white
font-medium
mx-auto
px-8
mt-7
w-[300px]
transition
hover:bg-[#caa385]
flex items-center justify-center gap-x-2
cursor-pointer
`

const ViewAllTreatments = tw.p`
pt-10
text-sm
text-center
`

const FeatureImg = tw.img`
object-cover object-center
`

const FeatureImgWrapper = tw.div`
overflow-hidden bg-gray-100 rounded-lg aspect-w-5 aspect-h-2
`

const FeatureImgContainer = styled.div`
${tw`flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8`}
${({position})=> position === 'true' ? tw`lg:col-start-6 xl:col-start-5` : tw`lg:col-start-1`}
`

const FeatureH3 = tw.h3`
text-lg font-medium text-gray-900
`

const FeatureP = tw.p`
mt-2 text-sm text-gray-500
`


const FeatureText = styled.div`
${tw`mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4`}
${({position})=> position === 'true' ? tw`lg:col-start-1` : tw`lg:col-start-8 xl:col-start-9`}
`

const FeatureContainer = tw.div`
flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center
`

const Features = tw.div`
mt-16 space-y-16
`

const SectionText = styled.div`
${tw`max-w-3xl mx-auto text-center`}
${({textHidden}) => textHidden && tw`hidden`}
`

const Container = tw.section`
max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8
`

const Heading = tw.p`
text-sm font-bold text-gray-900 
`

const Paragraph = tw.p`
mt-4 text-gray-900
md:text-5xl
text-3xl
font-extrabold
tracking-tight
`
