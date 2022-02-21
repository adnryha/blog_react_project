import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import FirstSlide from '../images/carousel/firstSlide.jpg'
import SecondSlide from '../images/carousel/secondSlide.jpg'
import ThirdSlide from '../images/carousel/thirdSlide.jpg'
import "./Slider.css"
export default function Slider() {
  return (
    <>

      <Carousel className='Carousel' variant="dark">
        <Carousel.Item className='carousel-item'>
          <img
            className="d-block w-100 "
            src={FirstSlide}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SecondSlide}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ThirdSlide}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}