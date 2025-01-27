import React from 'react'
import './Cart.scss'
import   images from  '../../src/assets/image/aa.png'
import  img from '../../src/assets/svg/fff.svg'

function Cart() {
  return (
    <div className='cart'>
     Home/cart
     <div  className='xx'>
       <ul style={{display:"flex",justifyContent:"space-between",listStyle:"none",fontsize: "16px",}}>
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Subtotal</li>
       </ul>
     </div>
     <div style={{width:"1107px",height:"102px",}} className='img'>
       <img src={images} alt="" />
       <h6>H1 Gamepad</h6>
      <ul className='price'>
        <li>$550</li>
        <li><button > 02<img src={img} alt="" /></button></li>
        <li>$1100

        </li>
      </ul>
      
     </div>
     <div style={{marginTop:"80px", display: "flex",flexDirection:' row',justifyContent:"space-between",AlignItems: 'flex-start',}} className='btn'>
      <button style={{width:"218px", height:"56px",  BoxSizing:' border-box',border:"1px solid blue",borderRadius:"4px",color:"black",fontSize:"16"}}>Return To Shop</button>
      <button  style={{width:"218px", height:"56px",  BoxSizing:' border-box',border:"1px solid blue",borderRadius:"4px",color:"black",fontSize:"16"}}>Update Cart</button>
     </div>
     <div >

     </div>

   

    </div>
  )
}

export default Cart
