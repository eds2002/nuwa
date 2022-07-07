import { useState } from "react"

export default function Input(props){
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = () =>{
    setFocused(true)
  }
  return (
    <input
    {...inputProps}
    onChange={onChange}
    onBlur={handleFocus}
    onFocus={() =>
      inputProps.name === "confirmPassword" && setFocused(true)
    }
    focused={focused.toString()}
  />
  )
}