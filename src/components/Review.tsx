import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

type Props = {
    title: string
    rating: number
    date: string
    review: string
    reviewBy: string
}

const Review: React.FC<Props> = ({title, rating, date, review, reviewBy})=>{
    return <Container className="my-4 default-text-css">
        <Row>
            <h6><b>{title}</b></h6>
            <p>
                <FontAwesomeIcon icon={faStar} color="#FFC300" />
                <FontAwesomeIcon icon={faStar} color="#FFC300" />
                <FontAwesomeIcon icon={faStar} color="#FFC300" />
                <FontAwesomeIcon icon={faStar} color="#FFC300" />
                <FontAwesomeIcon icon={faStar} color="#FFC300" /> {date}
            </p>
            <p>
                {review}
            </p>
            <h6>
                - {reviewBy}
            </h6>
        </Row>
    </Container>
}

export default Review