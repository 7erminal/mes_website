import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecondaryButton from "./widgets/SecondaryButton";

const OurStoryPane: React.FC = ()=>{
    return <section className="our-story-pane">
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Row><small><b>OUR STORY</b></small></Row>
                    <Row className="my-4">
                        <h4>We're building the next economic structure for the internet. Business and every size</h4>
                    </Row>
                    <Row className="my-4">
                        <p className="default-text-css">A living place for curiosity and collaboration, meeting and meaning. The heart of a creative community.</p>
                    </Row>
                    <Row className="my-4">
                        <Col><SecondaryButton title="Read about MES" type="button" navigateTo={()=>{}} /></Col>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <ul>
                        <li>
                            <h6>6 years of intense research</h6>
                            <p className="default-text-css">A living place for curiosity and collaboration, meeting and meaning. The heart of a creative community.</p>
                        </li>
                        <li>
                            <h6>Audience Segmentation</h6>
                            <p className="default-text-css">A living place for curiosity and collaboration, meeting and meaning. The heart of a creative community.</p>
                        </li>
                        <li>
                            <h6>Contact Monitoring</h6>
                            <p className="default-text-css">A living place for curiosity and collaboration, meeting and meaning. The heart of a creative community.</p>
                        </li>
                        <li>
                            <h6>Contact Monitoring</h6>
                            <p className="default-text-css">A living place for curiosity and collaboration, meeting and meaning. The heart of a creative community.</p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>
}

export default OurStoryPane;