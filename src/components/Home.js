import React from 'react'
import { Stagger, FadeTransform } from 'react-animation-components';
import { Col, Row, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Mission = () => {
    return(
            <Card className="missionCard" inverse>
                <CardImg className="missionCard" width="100%" src="./assets/images/mission.jpg" alt="ETC Graphic" />
                <CardImgOverlay className="mission row-content">
                <CardTitle tag="h3">Uplift - Empower - Support </CardTitle>
                    <CardText >
                                <blockquote>
                                    "We strive to create a community that
                                    uplifts, empowers, and supports one another.” 
                                </blockquote> 
                    </CardText>
                </CardImgOverlay>
            </Card>
    );
}

const Video = () => {
    return(
        <div>
            <h2>Video</h2>
        </div>
    );
}

const Newsletter = () => {
    return(
        <div>
            <h2>Newsletter</h2>
        </div>
    )
}



export default function Home() {
    return (
        <>
            
                <Stagger chunk={5} in>
                        <FadeTransform in transformProps={{exitTransform: 'translateX(-50%)' }}>
                          <Row>
                                <Mission /> 
                          </Row>
                        </FadeTransform>
                        <FadeTransform in transformProps={{exitTransform: 'translateY(-50%)' }}>
                            <Row>
                                <Col>
                                    <Video />
                                </Col>
                            </Row>
                        </FadeTransform>
                        <FadeTransform in transformProps={{exitTransform: 'translateX(-50%)' }}>
                            <Row>
                                <Col>
                                <Newsletter />
                                </Col>
                            </Row>
                        </FadeTransform>
                </Stagger>
            
        </>
    )
}
