import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import "./Footer.css";

const Footer = () => {
    return (
        <section className='Footer-Section'>
            <Container>
                <Row>
                    <div className='footer-Text'>
                      <p>copyright © 2023 || Design with by moon</p>
                    </div>

                </Row>
            </Container>
        </section>
    );
};

export default Footer;