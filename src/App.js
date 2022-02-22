import React from 'react'
import Slider from '././Components/Slider/Slider'
import NaviBar from './Components/NaviBar/NaviBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import './App.css'
import SliderTeam from './Components/SliderTeam/SliderTeam'



function App() {
  return (
    <>
      <Container fluid  >
        < NaviBar />
        <Slider />
        <SliderTeam />

      </Container>
    </>
  );
}

export default App;
