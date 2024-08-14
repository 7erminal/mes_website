import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
// @ts-ignore
import { ROUTES } from "../apis/endpoints";

const Footer: React.FC = ()=>{
    return <footer className="default-text-css">
        <Container>
            <Row>
                <Col xs={12} md={3} className="mt-4">
                    <Stack gap={3}>
                        <div><b>Contact Us</b></div>
                        <div><a href="#" className="default-black-link">Mon - Fri: 9:00am - 5:00pm</a></div>
                        <div><a href="tel: +233303224453" className="default-black-link">Tel: +233 303 224 453</a></div>
                        <div><a href="tel: +233247461330" className="default-black-link">Tel: +233 247 461 330</a></div>
                        <div><a href="#" className="default-black-link">Tema, Accra, Ghana</a></div>
                        <div><a href="#" className="default-black-link">P. O. Box 2264, Tema</a></div>
                        <div><a href="#" className="default-black-link">info@mes.com</a></div>
                    </Stack>
                </Col>
                <Col xs={12} md={3} className="mt-4">
                    <Stack gap={3}>
                        <div><b>Quick Links</b></div>
                        <div><a href="#" className="default-black-link">FAQs</a></div>
                        <div><a href="#" className="default-black-link">Terms and Conditions</a></div>
                        <div><Link to={ROUTES.login} className="default-black-link">Login</Link></div>
                    </Stack>
                </Col>
                <Col xs={12} md={3} className="mt-4">
                    <Stack gap={3}>
                        <div><b>Navigation</b></div>
                        <div><a href="#" className="default-black-link">Blog</a></div>
                        <div><a href="#" className="default-black-link">Privacy Policy</a></div>
                        <div><a href="#" className="default-black-link">Service Request</a></div>
                    </Stack>
                </Col>
                <Col xs={12} md={3} className="mt-4">
                    <Stack gap={3}>
                        <div><b>Services</b></div>
                        <div><a href="#" className="default-black-link">Bulk SMS</a></div>
                        <div><a href="#" className="default-black-link">USSD Solution</a></div>
                        <div><a href="#" className="default-black-link">Mobile App Development</a></div>
                        <div><a href="#" className="default-black-link">E-Payments</a></div>
                    </Stack>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer