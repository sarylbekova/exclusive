
import './About.scss'
import images from '../../src/assets/image/6.png'
import inageo from '../../src/assets/svg/g.svg'
import React,{useState} from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { Toast } from 'react-bootstrap'




  


 function About() {
  const [email ,setEmail] = useState('')
  const [password,setPassword] = useState("")

  
async function sugnUp() {
  try {
     const res = await createUserWithEmailAndPassword(auth,email,password)
     console.log(res);
     if(res){
      toast.success("Email   success created")
    }
     
  } catch (error) {
    console.log(error);
    toast.success(error.message)
    
  }
}

  return (
    
    <div  className='sugn-up'>
            <img  src={images} alt="" />
            <div className='login'>
                  <h2>Create an account</h2>
                  <h6>Enter your details below</h6>
                  <div className='box'>
                  <ul>
                    <input type="text"  placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <input placeholder='Password' type="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                    <input type="text" />
              </ul>
                  </div>
                   <div className='btns'>
                   <button onClick={()=>sugnUp()} className='button'>Create Account</button>
                   
                   </div>
                   <button className='btnimg' ><img src={inageo} alt="" />Sign up with Google</button>
                    
                 
             <div className='clas'>
              <p>Already have account?</p>
              <h6>Log in</h6>
             </div>
            </div>
        </div>
      

  )
}

export default About
