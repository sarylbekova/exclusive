import React, {useState} from 'react'
import shops from "../../src/assets/image/shop.png"
import "./Contact.scss"
import Block from '../components/Todo/Block'
import Info from '../components/Todo/Info'
import Count from '../components/Todo/Count'
import Red from '../components/Todo/Red'
import Pink from '../components/Todo/Pink'




function contact() {
  const [value, setValue]= useState(0)
  const [color, setColor] = useState("gray")
  
  const increment = () =>setValue(value + 1)
  const decrement = () => setValue (value - 1)
  
  const changeColor = (text) => setColor (text)
  return (
    <div >
      Contact
        <Info count ={value}/>
        <Count clicked={increment} decrement={decrement}/>
        <Block color={color}/>
      <Red click = {changeColor}/>
      <Pink click = {changeColor}/>
    </div>
  )
}

export default contact
