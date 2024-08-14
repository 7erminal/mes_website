import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecondaryButton from "./widgets/SecondaryButton";

const ChannelsPane: React.FC = ()=>{
    return <section className="channels-pane">
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Row><small><b>CHANNELS</b></small></Row>
                    <Row className="my-4">
                        <h4>All of your customers' preferred channels in one place</h4>
                    </Row>
                    <Row className="my-4">
                        <p className="default-text-css">Whether you're trying to improve the quality of existing channels like SMS, Voice or Email - or adopting new ways of communicating through Whatsapp, Instagram Direct or Google Maps - we manage the complexity for you.</p>
                    </Row>
                    <Row className="my-4">
                        <Col><SecondaryButton title="Learn More"  type="button" navigateTo={()=>{}} /></Col>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <img src="/images/girlLaptopGlasses.jpeg" width="100%" />
                </Col>
            </Row>
        </Container>
    </section>
}

export default ChannelsPane