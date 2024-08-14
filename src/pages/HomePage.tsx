import React from "react";
import NavBarComponent from "../components/NavBarComponent";
import NavBarContactComponent from "../components/NavBarContactComponent";
import { Container } from "react-bootstrap";
import LandingPageCarousel from "../components/LandingPageCarousel";
import ServicesPane from "../components/ServicesPane";
import OurStoryPane from "../components/OurStoryPane";
import ChannelsPane from "../components/ChannelsPane";
import ReviewsPane from "../components/ReviewsPane";
import GetStartedBanner from "../components/GetStartedBanner";
import Footer from "../components/Footer";

const HomePage: React.FC = () =>{
    return <div className="body">
        <header>
            <NavBarContactComponent />
            <Container><hr style={{marginTop: '0', marginBottom: '0'}} /></Container>
            <NavBarComponent />
            <LandingPageCarousel />
        </header>
        <ServicesPane />
        <OurStoryPane />
        <ChannelsPane />
        <ReviewsPane />
        <GetStartedBanner />
        <Footer />
    </div>
}

export default HomePage