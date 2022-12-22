import React from 'react';
import { Carousel } from 'react-bootstrap';

import roldos from '../images/Roldos.jpeg';
import concejo from '../images/Concejo.jpeg';
import cangahua from '../images/Cangahua.jpeg';
import padua from '../images/Padua.jpeg';
import velasco from '../images/Velasco.jpeg';

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={roldos}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Parroquia San Judas Tadeo</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={concejo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Capilla San Francisco Xavier</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cangahua}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Capilla San José de Cangahua</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={padua}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Capilla San Antonio de Padua</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={velasco}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Capilla la hacienda</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
};
export default Home;