import React from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import FirstTrener from '../images/carousel_team/1.jpg'
import SecondTrener from '../images/carousel_team/2.jpg'
import ThirdTrener from '../images/carousel_team/3.jpg'
// import FourthTrener from '../images/carousel_team/4.jpg'
// import FifthTrener from '../images/carousel_team/5.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
export default function SliderTeam() {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col><Carousel variant="dark">
            <Carousel.Item>

              <img
                className="d-block w-100"
                src={FirstTrener}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

              <img
                className="d-block w-100"
                src={SecondTrener}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ThirdTrener}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel></Col>
          <Col></Col>
        </Row>
      </Container>
    </>


  )
}