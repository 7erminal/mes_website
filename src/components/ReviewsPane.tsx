import React from "react";
import Review from "./Review";

const ReviewsPane: React.FC = ()=>{
    return <section className="reviews-pane">
        <Review title="Great Experience" rating={5} date="July 12, 2022" review="I'm proud to be associated with one of the long standing SMS companies in Ghana. I have been working closely with MES for the past 5 years and have always found their service to be outstanding." reviewBy="Edward Amoah" />
        <div className="spacer2"></div>
        <Review title="Great Experience" rating={5} date="July 12, 2022" review="I'm proud to be associated with one of the long standing SMS companies in Ghana. I have been working closely with MES for the past 5 years and have always found their service to be outstanding." reviewBy="Edward Amoah" />
    </section>
}

export default ReviewsPane