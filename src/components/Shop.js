import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Button } from 'reactstrap';

function RenderStore({storeitems}) {
    if (storeitems) {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={storeitems.image} alt={storeitems.name} />
                    <CardBody>
                        <CardTitle>
                            {storeitems.name}
                        </CardTitle>
                        <CardText>
                            {storeitems.description}
                        </CardText>
                        <Button>Select</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
    return <div></div>
}

function Shop(props) {
    return <RenderStore storeitems={props.storeitems} />
}

export default Shop;