import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceTile from "./widgets/ServiceTile";
import PrimaryButton from "./widgets/PrimaryButton";

const ServicesPane: React.FC = ()=>{
    return <section className="services">
        <Container>
            <Row>
                <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <h1>Your 360 Communications Platform</h1>
                    <p className="default-text-css">We Promote reliable customer communications through a single platform</p>
                </Col>
            </Row>
            <Row className="services-tile-lane">
                <Col xs={6} md={3}>
                    <ServiceTile icon="" title="Bulk SMS" description="With MES Bulk SMS Services, you can send SMS messages to large groups of people at really affordable costs." />
                </Col>
                <Col xs={6} md={3}>
                    <ServiceTile icon="" title="USSD Solution" description="MES provides accessible, real time interaction for your users on both feature phone and smartphone." />
                </Col>
                <Col xs={6} md={3}>
                    <ServiceTile icon="" title="Mobile App Development" description="We build mobile apps capable of running on both Android and iOS devices."/>
                </Col>
                <Col xs={6} md={3}>
                    <ServiceTile icon="" title="E-payments" description="With a seamless payment solution, businesses can easily take payments from customers." />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col className="mt-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <PrimaryButton type="button" title="Explore more services" navigateTo={()=>{}} />
                </Col>
            </Row>
        </Container>
    </section>
}

export default ServicesPane