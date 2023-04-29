import React from 'react';
import './header.scss';
import { FaAngleRight } from 'react-icons/fa';
import '../11. p-with-dot/p-dot.scss'
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {
    return (
       <div className='bgimg'>
         <Carousel variant='dark'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./828.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <p className='p'><FaAngleRight />blah blah</p>
        <h1>10 BLah blah</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="./828.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className='p'><FaAngleRight />blah blah</p>
        <h1>10 BLah blah</h1>
        <h5>asdh</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <p className='p'><FaAngleRight />blah blah</p>
        <h1>10 BLah blah</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        
       </div>
    );
};



export default Header;