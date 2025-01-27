import React from 'react'
import './Product.scss'
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Star from '../../assets/svg/star';
import { useDispatch, useSelector } from 'react-redux';
import { addWish } from '../../redax/WishSlise/wish';

function Product({product}) {
    const dispatch = useDispatch()
    const {items} = useSelector((state) => state.wishList)
    const isInwishlis = items.some((item => item.id ==   product.id))

  return (
    <div className='product'>
      <div className="product-container">
        <div className="image">
          <img src={product?.thumbnail} alt="" />
        </div>
        <button className="adding">
          Add To Cart
        </button>
      </div>
    
      <div className="product-box">

          <div>

            {
              isInwishlis ?
              <FaRegHeart onClick={()=>dispatch(addWish(product.id))} className='icon' size={22} />
               :
               <FaRegHeart onClick={()=>dispatch(addWish(product))} className='icon' size={22} />
            }
           
          </div>
          <div>
            <FaRegEye className='icon' size={22} />
          </div>
      </div>
      <h3>{product.title}</h3>
      <p> 
        
      </p>
      <div className="rating">
        <div className="stars">
        {
            [1,2,3,4,5].map((x) => (
                <Star key={x} fill={product.rating >= x ? "#FFAD33": "gray"}/>
            ))

        }
        </div>
        <span>{product.rating}</span>
      </div>
    </div>
  )
}

export default Product;
