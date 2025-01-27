import React from 'react'
import "./Footer.scss"
import svg1 from '../../assets/svg/airplane.svg'
import image3 from '../../assets/image/3.png'
import image4 from '../../assets/image/4.png'
import  image5 from '../../assets/image/5.png'
import svg2 from '../../assets/svg/f.svg'
import svg3 from '../../assets/svg/s.svg'
import svg4 from '../../assets/svg/i.svg'
import svg5 from '../../assets/svg/in.svg'

function Footer() {
  return (
    <div className='Footer-content'>
     <div className='content'>
       <div className='Exclusive'>
       <h3>Subscribe</h3>
        <p>Get 10% off your first order</p>
        <div className='search'>
          <input type="Enter your email" />
          <img src={svg1} alt="" />
        </div>
       </div>
       <div className='support'>
        <h2>Support</h2>
        <ul>
          <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
       </div>
       <div className='Account'>
        <h2>Account</h2>
        <ul>
          <li>  My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
       </div>
       <div className='Quick-Link'>
        <h2>  Quick Link</h2>
        <ul>
          <li>Privacy Policy  </li>
          <li>  Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>

        </ul>
       </div>
       <div className='Download-App'>
        <h2>Download App</h2>
        <p>Save $3 with App New User Only</p>
        <img className='t' src={image5} alt="" />
       <div className='btn'>
       <img className='w' src={image3} alt="" />
       <img className='w' src={image4} alt="" />
       </div>
       <div className='svg'>
        <img className='s' src={svg2} alt="" />
        <img className='s' src={svg3} alt="" />
        <img className='s' src={svg4} alt="" />
        <img className='s' src={svg5} alt="" />
       </div>
       </div>

     </div>
    </div>
  )
}

export default Footer
