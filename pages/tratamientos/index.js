import { Navbar } from "../../components"
import { Footer, Treatments } from "../../sections"
import tw from "twin.macro"
export default function TreatmentsPage({treatments}){
  return (
    <>
      <Navbar/>
      {/* <TopHeader>
        <TextWrapper>
          <Paragraph>Tratamientos</Paragraph>
        </TextWrapper>
        <ImageWrapper>
          <ImageContainer>
            <BackgroundOverlay/>
            <Img src = 'https://images.pexels.com/photos/6663368/pexels-photo-6663368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
          </ImageContainer>
        </ImageWrapper>
      </TopHeader> */}
      <Treatments textHidden treatments={treatments}/>
      <Footer/>
    </>
  )
}

const ImageWrapper = tw.div`bg-red-500 w-full h-full absolute inset-0 overflow-hidden`

const TopHeader = tw.div`
w-full
h-[40vh]
relative
`

const TextWrapper = tw.div`
relative
z-[99999]
p-6
flex items-center justify-center h-full w-full
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
const BackgroundOverlay = tw.div`absolute inset-0 bg-black/40 z-10`
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


