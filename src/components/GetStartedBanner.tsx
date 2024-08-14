import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const GetStartedBanner: React.FC = ()=>{
    return <section className="get-started default-text-css x2-word-spacing">
        <Container>
            <Row style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'end'}}>
                <Col>
                    <Row>
                        <h4>LOOKING FOR AFFORDABLE SMS SERVICE?</h4>
                        <h4>Get SMS Online And Save Up To 20%!</h4>
                        <p>Surprisingly great rates. Get started now.</p>
                    </Row>
                </Col>
                <Col style={{ textAlign: 'end', display: 'flex', justifyContent: 'center'}}>
                    <button className="white-button" type="button">Get Started Now</button>
                </Col>
            </Row>
        </Container>
    </section>
}

export default GetStartedBanner