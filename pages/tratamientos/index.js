import { Navbar } from "../../components"
import { Footer, Treatments } from "../../sections"
import tw, {styled,css} from "twin.macro"
import { sanityClient } from "../../sanity"
import Image from "next/image"
import treatmentImage from '../../assets/treatmentImage.webp'
export default function TreatmentsPage({treatments}){
  return (
    <>
      <NavigationWrapper>
        <Navbar/>
        <TextWrapper>
          <H1>Tratamientos</H1>
          <P lightGray>
            Todos los tratamientos que tenemos para ofrecer
          </P>
        </TextWrapper>
        <BackgroundImage>
          <BackgroundOverlay/>
          <ImageWrapper>
            <Image src = {treatmentImage} layout = 'fill' css = {[tw`object-cover`]}/>
          </ImageWrapper>
        </BackgroundImage>
      </NavigationWrapper>
      <Treatments textHidden treatments={treatments}/>
      <Footer/>
    </>
  )
}

const BackgroundImage = tw.div`
absolute
inset-0
`

const P = styled.p`
${tw`max-w-sm mt-2 text-base text-gray-700`}
${({textSmall})=> textSmall && (tw`text-sm`)}
${({lightGray})=> lightGray && (tw`text-xl text-gray-100`)}
`

const H1 = tw.h1`
text-6xl
font-semibold
text-white
`

const NavigationWrapper = tw.section`
w-full
h-[50vh]
flex
items-center
justify-center
relative
overflow-hidden
`


const ImageWrapper = tw.div` w-full h-full absolute inset-0 overflow-hidden`

const TopHeader = tw.div`
w-full
h-[40vh]
relative
`

const TextWrapper = tw.div`
relative
z-[99999]
p-6
flex items-start justify-center h-full w-full flex-col
max-w-7xl
`

const Paragraph = tw.p`
text-white
text-6xl
tracking-tight
max-w-xl
text-center
font-medium
`

const ImageContainer = tw.div`
w-full h-full aspect-h-2 aspect-w-5
`
const BackgroundOverlay = tw.div`absolute inset-0 bg-gray-600/50 z-10`
const Img = tw.img`
object-cover object-center
`

export const getServerSideProps = async () =>{
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


