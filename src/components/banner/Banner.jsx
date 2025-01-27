import React, { useEffect } from 'react'
import './Banner.scss'
import Carousel from 'react-bootstrap/Carousel';
import banner from "../../assets/image/banner.png"
import { useDispatch, useSelector } from 'react-redux';
import { categoryFetch } from '../../redax/category/CategorySlise';
import { getProductByCategory } from '../../redax/products/productSlise';



function  Banner() {
  const dispatch =  useDispatch()
  const { loading, category , error} = useSelector((state) => state.categoryList)

  useEffect(()=>{
    dispatch(categoryFetch ())
  
  },[dispatch])

  console.log(category);
  
  return (
    <div className='banner container'>
       <div className='banner-sidebar'>
       <ul style={{ overflowY: "auto", maxHeight: "300px" }}>
  {
    category.slice(0, 9).map((x, index) => (
      <li
        onClick={() => dispatch(getProductByCategory(x))}
        key={x} 
       
      >
        {x}
      </li>
    ))
  }
</ul> 

       </div>
       <div className='banner-carousel'> 
       <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={banner} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={banner} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={banner} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
    </div>
  )
}

export default Banner
