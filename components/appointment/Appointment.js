import tw from "twin.macro"
import { Fragment, useState, useRef, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon, ClockIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import styled from 'styled-components'
import Input from "../input/Input"
import emailjs from 'emailjs-com'

const people = [
  { id: 1, name: 'Sede Comas | Av. Universitaria, 2do piso (Ref. Metro Belaúnde)' },
  { id: 2, name: 'Sede La Victoria | Centro Comercial' },
  { id: 3, name: 'Sede San Martin De Porres' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Appointment({changeModalStatus, allTreatments, currentTreatment}){
  const [location, setLocation] = useState(people[0])
  const [treatment,setTreatment] = useState(currentTreatment.treatmentName)


  const modalRef = useRef(null)
  const form = useRef();

  const checkIfClickedOutside = (e)=>{
    if(!modalRef.current.contains(e.target)){
      changeModalStatus(false)
    }
  }
  useEffect(()=>{
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  },[modalRef])

  function currentDayFormatted(){
    let date = new window.Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
  
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    let today = year + "-" + month + "-" + day;
    return today
  }

  const [values,setValues] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    location:location.name,
    treatment:treatment,
    day:`${currentDayFormatted()}`,
    time:'10:30am',
    message:'',
  }) 

  const inputs = [
    {
      id:1,
      name:'firstName',
      type:'text',
      placeholder:'Nombre',
      label:'Nombre',
      required:true,
    },
    {
      id:2,
      name:'lastName',
      type:'text',
      placeholder:'Appellidos',
      label:'Appellidos',
      required:true,
    },
    {
      id:3,
      name:'phone',
      type:'text',
      placeholder:'Numero Telefonico',
      label:'Numero*',
      required:true,
    },
    {
      id:4,
      name:'email',
      type:'text',
      placeholder:'Correo electrónico (Opcional)',
      label:'Email',
      required:false,
    },
    {
      id:5,
      name:'message',
      label:'Mensaje',
      placeholder:'Si tienes alguna consulta, no dudes en llenar esta campo.',
      required:false,
    }
  ]

  const onChange = (e)=>{
    setValues({...values, [e.target.name]:e.target.value})
  }

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_q6wwnzf', 'template_r3mwlpf', form.current, 'Z37lQbTvaUroNGPYe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container>
      <Wrapper ref = {modalRef}>
        <TextHeading>
          Reserva tu cita
          <CloseIcon onClick = {()=>changeModalStatus(false)}><FontAwesomeIcon icon = {faTimes} className = "w-6 h-6"/></CloseIcon>
        </TextHeading>
        <Form onSubmit = {(e)=>sendEmail(e)} ref = {form}>
          {/* Names */}
          <div className = "w-full mt-4 text-s">
            <Label>Nombres*</Label>
            <div className = "flex items-center justify-between gap-x-3">
              {inputs.map(input=>(
                  <> 
                    {/* TODO, present only the first 2 inputs, these are the name inputs */}
                    {input.id <= 2 && (
                      <>
                        <Input key = {input.id} {...input} value = {values[input.name]} onChange={onChange} className = "flex-1 w-full px-3 py-2 text-sm bg-transparent border border-gray-900 rounded-md outline-none focus:ring-[#b08f6e] focus:border-[#b08f6e]"/>
                      </>
                    )}
                  </>
              ))}
            </div>
          </div>

          {/* Contact information */}
          <div className = "text-sm mt-7">
              {/* TODO, handle focus state, better for user experience. An error message should not display if the user is 1: Focused on the input 2: User has refreshed the page */}
              {inputs.map(input=>(
                <>
                  {input.id > 2 && input.id <= 4 ? 
                  <>
                    <Label className = "mt-7">{input.label}</Label>
                    <Input key = {input.id} {...input} value = {values[input.name]} onChange={onChange} className = "w-full px-3 py-2 text-sm bg-transparent border border-gray-900 rounded-md focus:ring-[#b08f6e] focus:border-[#b08f6e] focus:outline-none"/>
                  </>
                  :
                    ""
                  }
                </>
              ))}
          </div>

          {/* Location */}
          <Listbox value={location} onChange={setLocation}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-xs font-medium sm:text-sm mt-7">Sede*</Listbox.Label>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-sm text-left bg-transparent border border-gray-900 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-[#b08f6e] focus:border-[#b08f6e]">
                    <span className="block truncate">{location.name}</span>

                    {/* TODO, this is for emailjs */}
                    <input value = {location.name} className = "hidden" name = "location" onChange = {()=> void 0}/>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm bg-[#e8d4c0] rounded-md shadow-lg bg- max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'text-white bg-[#b08f6e]' : 'text-gray-900',
                              'cursor-default select-none relative py-2 pl-3 pr-9'
                            )
                          }
                          value={person}
                        >
                          {({ location, active }) => (
                            <>
                              <span className={classNames(location ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                {person.name}
                              </span>

                              {location ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-[#b08f6e]',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          {/* Treatment */}
          <Listbox value={treatment} onChange={setTreatment}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-xs font-medium sm:text-sm mt-7">Tratamiento*</Listbox.Label>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-sm text-left bg-transparent border border-gray-900 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-[#b08f6e] focus:border-[#b08f6e]">
                    <span className="block truncate">{treatment}</span>

                    {/* TODO, this is for email js */}
                    <input value = {treatment} className = "hidden" name = "service" onChange={()=> void 0}/>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm bg-[#e8d4c0] rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {allTreatments.map((treatment,index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            classNames(
                              active ? 'text-white bg-[#b08f6e]' : 'text-gray-900',
                              'cursor-default select-none relative py-2 pl-3 pr-9'
                            )
                          }
                          value={treatment.treatmentName}
                        >
                          {({ location, active }) => (
                            <>
                              <span className={classNames(location ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                {treatment.treatmentName}
                              </span>

                              {location ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'bg-[#b08f6e]',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          {/* Service Date */}
          <Date>
            <Label>Fecha y Hora*</Label>
            <DateInputWrapper>
              <DateInput 
                type="date" 
                defaultValue = {currentDayFormatted()} 
                min = {new window.Date().toISOString().split('T')[0]} 
                max = "2022-12-31" 
                required 
                name = "day" 
                onChange={onChange}
              />
              <div className="flex items-center justify-center px-3 py-2 bg-transparent border border-gray-900 rounded-md gap-x-2">
                <div className="flex">
                  <select name="time" className="text-sm bg-transparent outline-none appearance-none" onChange = {onChange}>
                    <option>10:00am</option>
                    <option>10:30am</option>
                    <option>11:00am</option>
                    <option>11:30am</option>
                    <option>12:00am</option>
                    <option>12:30am</option>
                    <option>1:00pm</option>
                    <option>1:30pm</option>
                    <option>2:00pm</option>
                    <option>2:30pm</option>
                    <option>3:30pm</option>
                    <option>4:00pm</option>
                    <option>4:30pm</option>
                    <option>5:00pm</option>
                    <option>5:30pm</option>
                    <option>6:30pm</option>
                    <option>7:00pm</option>
                    <option>7:30pm</option>
                    <option>8:00pm</option>
                    <option>8:30pm</option>
                  </select>
                </div>
                <ClockIcon className="w-4 h-4" aria-hidden="true" />
              </div>
            </DateInputWrapper>
          </Date>

          {/* Messages */}
          <div className="text-sm mt-7">
            <Label>Mensaje</Label>
            <TextBox placeholder = "Si tienes alguna consulta, no dudes en llenar esta campo." name = "message"></TextBox>
          </div>
          <Submit>Confirmar Cita</Submit>
        </Form>
      </Wrapper>
    </Container>
  )
}

const Label = tw.p`
sm:text-sm
text-xs
py-0.5
font-medium
`

const CloseIcon = tw.span`
h-full
absolute
flex items-center justify-center
top-0
right-0
cursor-pointer
hover:text-gray-400
transition
`

const DateLabel = tw.p``

const Submit = tw.button`
py-2
text-sm
tracking-wide
bg-[#E1B594]
rounded-md
text-white
font-medium
w-full
mt-4
transition
hover:bg-[#d2a98a]

`

const TextBox = tw.textarea`
resize-none
w-full
h-32
border
border-gray-900
bg-transparent
rounded-md
p-2
focus:outline-none
focus:border-[#b08f6e]
`


const DateInput = tw.input`
w-full
border
border-gray-900
bg-transparent
focus:outline-none
focus:ring-[#b08f6e] focus:border-[#b08f6e]
px-3
py-2
rounded-md
text-sm
`

const DateInputWrapper = tw.div`
gap-x-3
relative
flex
`

const Date = tw.div`
sm:w-[50%]
w-[75%]
text-sm
mt-7
`

const FirstNameInput = tw.input`
flex-1
border
border-gray-400
py-2
px-2
rounded-md
`


const Form = tw.form`
px-4
`

const TextHeading = tw.h1`
text-3xl
text-black
text-center
mx-4
relative
font-semibold
`

const Wrapper = tw.div`
max-w-xl
bg-[#F6ECE3]
h-full
w-[90%]
max-h-[93vh]
rounded-xl
px-2
py-6
overflow-y-scroll
overflow-x-hidden
`

const Container = tw.section`
fixed
inset-0
bg-black/50
z-[9999999999999]
flex items-center justify-center
`
