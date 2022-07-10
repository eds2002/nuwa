import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'

export function MobNavbar({active, setMobileNav}){
  function handleClick (){
    setMobileNav(false)
  }
  return (
   <Container className = {active ? 'opacity-100 transition duration-500 pointer-events-auto' : 'opacity-0 transition duration-500 pointer-events-none'}>
    <Links>
      <Link href = "/">
        <PageLink onClick = {()=>handleClick()}>Inicio</PageLink>
      </Link>
      <Link href = "/tratamientos">
        <PageLink onClick = {()=>handleClick()}>Tratamientos</PageLink>
      </Link>
      <Link href = "/contacto">
        <PageLink onClick = {()=>handleClick()}>Sobre Nosotras</PageLink>
      </Link>
      <Link href = "/contacto">
        <PageLink onClick = {()=>handleClick()}>Contacto</PageLink>
      </Link>
    </Links>
   </Container>
  )
}

const SupportLink = tw.a`
cursor-pointer
text-white
text-sm
font-medium
`

const SupportLinks = tw.div`
flex
items-start
justify-center
gap-y-10
flex-col
pt-10
`

const PageLink = tw.a`
cursor-pointer
text-white
text-4xl
font-semibold
hover:text-gray-200
transition
`

const Links = tw.div`
flex
items-center
justify-center
gap-y-10
flex-col
pb-10
w-full
`

const Container = tw.div`
bg-[#D5BFAD]
fixed
inset-0
rounded-xl
flex
items-start
justify-center
flex-col
p-4
`

