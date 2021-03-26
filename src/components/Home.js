import React from 'react'
import { Stagger, FadeTransform } from 'react-animation-components';
import { Col, Row, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Mission = () => {
    return (
        <div className="homeSection">
            <div className="container">
                <h3 className="brandAcronym">ETC</h3>
                <blockquote>
                    "Support what you wear"
                </blockquote>
            </div>
        </div>
    );
}


const RenderMaleShop = (props) => {
    return (
        <div>
            <Card>
                <CardImg
                    src={props.shopMaleCard.image}
                    alt={props.shopMaleCard.name}
                />
                <div>
                    Here is the shop male button
                </div>
            </Card>
        </div>
    )
}

const RenderFemaleShop = (props) => {
    return (
        <div>
            <Card>
                <CardImg
                    src={props.shopFemaleCard.image}
                    alt={props.shopFemaleCard.name}
                />
                <div>

                </div>
            </Card>
        </div>
    );
}

const Video = () => {
    return (
        <div>
            <h2>Video</h2>
        </div>
    );
}

const Newsletter = () => {
    return (
        <div>
            <h2>Newsletter</h2>
        </div>
    )
}

export default function Home(props) {
    return (
        <>

            <Stagger chunk={5} in>
                <FadeTransform in transformProps={{ exitTransform: 'translateX(-50%)' }}>
                    <Row>
                        <Mission />
                    </Row>
                    <Row>
                        <RenderMaleShop shopMaleCard={props.shopMaleCard} />
                        <RenderFemaleShop shopFemaleCard={props.shopFemaleCard} />
                    </Row>
                </FadeTransform>
                <FadeTransform in transformProps={{ exitTransform: 'translateY(-50%)' }}>
                    <Row>
                        <Col>
                            <Video />
                        </Col>
                    </Row>
                </FadeTransform>
                <FadeTransform in transformProps={{ exitTransform: 'translateX(-50%)' }}>
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
