import React from 'react'
import { FadeTransform, Stagger, Fade } from 'react-animation-components';
import { Card, CardTitle, CardBody, Container, Col, Row, Jumbotron } from 'reactstrap';

export default function Media() {
    return (
        <>
            <FadeTransform in transformProps={{ exitTransform: 'scale(0.5)'
            }}>
                <Jumbotron>
                    <h2>Media</h2>
                </Jumbotron>
            </FadeTransform>
            <Stagger in>
                <Fade in>
                    <Container>
                        <Row>
                            <Col sm={3}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>
                                            IG Post
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <CardTitle>
                                            IG Post 3
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <CardTitle>
                                            IG Post 5
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={3}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>
                                            IG Post 2
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <CardTitle>
                                            IG Post 4
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <CardTitle>
                                            IG Post 6
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                    </Row>
                    </Container>
                </Fade>
            </Stagger>
        </>
    )
}
