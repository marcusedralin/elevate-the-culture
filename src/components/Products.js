import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardImgOverlay, Button, Container, Col, Row, Input, FormGroup, Label } from 'reactstrap';

const Products = (props) => {
    return (
    <main>
        <Container xs={12} lg={3}>
            {props.products.map((product) => (
                <Container item key={product.id}>
                    <Row>
                        <Col>
                            <Card>
                                <CardImg src={product.image} alt={product.name} />
                                <CardBody>
                                    <CardTitle tag='h3'>{product.name}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <FormGroup>
                                        <Label for="size">Size</Label>
                                        <Input type="select" name="select" id="size">
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                        </Input>
                                    </FormGroup>
                                    <Button>Add to Cart</Button>
                                </CardBody>  
                            </Card>
                        </Col>
                    </Row>
                </Container>
            ))}
        </Container>
    </main>
    );
}

// I am having this components of Products be the presentational component that will map through the PRODUCTS array of obj in product.js to display each product acquired via the props obj to be returned on a card.

export default Products;