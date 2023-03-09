import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./Services.css";
import Service from '../Service/Service';



const Services = () => {
    const [services, setService] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
    return (
        <section className='service-Area'>
            <Container>
              <div className='service-Title'>
                 <h2 className=' text-center py-5 mb-5'>Service Area</h2>
              </div>
            <Row>
            {services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
            </Row>
        </Container>
        </section>
    );
};

export default Services;