import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageFrame from './ImageFrame';


function App() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  let [entranceImg,setEntranceImg] = useState(['https://www.pmoa.co.jp/product/350/pop.jpg','https://www.pmoa.co.jp/product/371/pop.jpg','https://pbs.twimg.com/media/Fz1vUG7aMAEHs64?format=jpg&name=900x900'])


  return (
    <div className="App">
      
      <Navbar bg="light" data-bs-theme="light">
        <Container className='bootstrapContainer'>
          <Navbar.Brand href="#home" style={{fontSize : '40px'}}>JUN/D Prize</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Features</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h4 style={{marginBlock:"30px",marginRight:"60%", fontFamily:"CuteFont", fontSize:"30px"}}>인기상품</h4>

      <Carousel activeIndex={index} onSelect={handleSelect} style={{width:'80%',marginLeft:'10%'}}>
      <Carousel.Item>
      
        <ImageFrame entranceImg = {entranceImg} num={0}/>
        <Carousel.Caption>
          
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
       <ImageFrame entranceImg = {entranceImg} num={1}/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <ImageFrame entranceImg = {entranceImg} num={2}/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      
    </div>
  );
}

export default App;
