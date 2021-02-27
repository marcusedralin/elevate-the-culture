import React from 'react'
import { Stagger, FadeTransform } from 'react-animation-components';
import { Container, Col, Row } from 'reactstrap';





export default function Home() {
    return (
        <>
            <Container>
                <Stagger chunk={6} in>
                        <FadeTransform in transformProps={{exitTransform: 'translateX(50%)' }}>
                            <Row>
                                <Col>
                                    <h1 className>Home page</h1>
                                </Col>
                            </Row>
                        </FadeTransform>
                        <FadeTransform in transformProps={{exitTransform: 'translateY(50%)' }}>
                            <Row>
                                <Col>
                                    <h2>Mission Statement</h2>
                                </Col>
                            </Row>
                        </FadeTransform>
                        <FadeTransform in transformProps={{exitTransform: 'translateY(-50%)' }}>
                            <Row>
                                <Col>
                                    <h2>Newsletter</h2>
                                </Col>
                            </Row>
                        </FadeTransform>
                        <FadeTransform in transformProps={{exitTransform: 'translateX(-50%)' }}>
                            <Row>
                                <Col>
                                <h2>Video</h2>
                                </Col>
                            </Row>
                        </FadeTransform>
                </Stagger>
            </Container>
        </>
    )
}
