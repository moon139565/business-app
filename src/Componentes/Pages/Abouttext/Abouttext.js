import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import image from "../../Imges/about1111.png";
import "./Abouttext.css";

const Abouttext = () => {
    return (
        <section className='about-Text-area'>
            <Container>
                <Row className='about-text-div'>
                    <Col lg={5}>
                        <img src={image} alt='' className='w-100' />
                    </Col>
                    <Col lg={7}>
                        <div className='about-text'>
                        <h2>About Us</h2>
                        <p>Aenean Leo ligula, porttitor eu, the result of life, eleifend and, for Aliquam ante, dapibus in, viverra quis, feugiat a, tellus.Even if you don't advertise it. Curabitur ullamcorper ultricies unless. For God needs it. Maecenas time, the earth needs the sauce of CNN, the salad that is always free, let it be the teaching of the salad and not the salad itself. For how now, flattering or, mourning the pulvinar, hendrerit id.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Abouttext;