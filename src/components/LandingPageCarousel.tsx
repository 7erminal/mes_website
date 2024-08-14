import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const LandingPageCarousel: React.FC = ()=>{
    return <section className="landing-page-carousel">
        <Carousel className="carousel_" data-bs-theme="dark" controls={false}>
            <Carousel.Item>
                {/* <img src="/images/manphone.png" height="100%" /> */}
                <Container style={{height:'100%'}}>
                    <Row style={{height:'100%'}}>
                        <Col xs={11} md={5} style={{height:'100%'}}>
                            <div className="landing-page-carousel-caption">
                                <h4>We're building the next economic structure for the internet. Business and every size</h4>
                            </div>
                        </Col>
                        <Col className="d-md-block d-sm-none" md={7} style={{height:'100%'}}>
                            <div className="carousel-image-c">
                                <img src="/images/manonphones.png" height="100%" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container style={{height:'100%'}}>
                    <Row style={{height:'100%'}}>
                        <Col xs={11} md={5} style={{height:'100%'}}>
                            <div className="landing-page-carousel-caption">
                                <h4>We're building the next economic structure for the internet. Business and every size</h4>
                            </div>
                        </Col>
                        <Col className="d-md-block d-sm-none" md={7} style={{height:'100%'}}>
                            <div className="carousel-image-c">
                                <img src="/images/thumbsupman.png" height="100%" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container style={{height:'100%'}}>
                    <Row style={{height:'100%'}}>
                        <Col xs={11} md={5} style={{height:'100%'}}>
                            <div className="landing-page-carousel-caption">
                                <h4>We're building the next economic structure for the internet. Business and every size</h4>
                            </div>
                        </Col>
                        <Col className="d-md-block d-sm-none" md={7} style={{height:'100%'}}>
                            <div className="carousel-image-c">
                                <img src="/images/manontablet.png" height="100%" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
  </section>
}

export default LandingPageCarousel