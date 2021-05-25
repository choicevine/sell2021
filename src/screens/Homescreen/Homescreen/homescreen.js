import React from 'react';
import {Col, Container, Row} from "react-bootstrap"
import Categories from '../../../components/categories/categories'
import Video from '../../../components/videos/videos'

const homescreen = () => {
    return (
        <Container>
            <Categories />
            <Row>
             {  [...new Array(20)].map ( () => 
                <Col lg={3} md={4}> 
                    <Video /> 
                    One
                </Col>)}
            </Row>
        </Container>
    )
}

export default homescreen
