import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imge1 from "../../Imges/hh1.jpg"
import imge2 from "../../Imges/hh2.jpg"
import imge3 from "../../Imges/hh3.jpg"
import Button from 'react-bootstrap/Button';
import "./Home.css";

const Home = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="single-Item">
        <img className="d-block w-100" src={imge1} alt="First slide" />
        <Carousel.Caption className="carosel-Text">
          <h3>Bringing Together</h3>
          <p>Expertise & Industry Knowledge</p>
          <Button> More About </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="single-Item">
        <img className="d-block w-100" src={imge2} alt="First slide" />
        <Carousel.Caption className="carosel-Text">
          <h3>We Provoke Change</h3>
          <p>Expertise & Creating Knowledge</p>
          <Button> More About </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="single-Item">
        <img className="d-block w-100" src={imge3} alt="First slide" />
        <Carousel.Caption className="carosel-Text">
          <h3>Creative Agency</h3>
          <p>We Creating ideas </p>
          <Button> More About </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
