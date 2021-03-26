import React, { Component } from 'react';
import Header from "./Header";
import Home from "./Home"
import Contact from "./Contact";
import Media from "./Media";
import Footer from "./Footer";
import Products from "./Products";
import { PRODUCTS } from "../products";
import { SHOPMALE } from "../shopMale";
import { SHOPFEMALE } from "../shopFemale";
import { Switch, Route, Redirect } from 'react-router-dom';

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: PRODUCTS,
            selectedItem: null,
            shopMale: SHOPMALE,
            shopFemale: SHOPFEMALE
        };
    }

    // This is my function to decide what store item the user clicks on. Don't know if I need this here or on the Products component...
    onItemSelect(itemId) {
        this.setState({ selectedItem: itemId });
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    products={this.state.products.map(product => product.bestSeller === true)[0]}
                    shopMaleCard={this.state.shopMale.map(maleT => maleT)[0]}
                    shopFemaleCard={this.state.shopFemale.map(femaleT => femaleT)[1]}
                />
            );
        }



        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/contactus' render={() => <Contact component={Contact} />} />
                    <Route exact path='/media' render={() => <Media component={Media} />} />
                    <Route exact path='/products' render={() => <Products component={Products} products={this.state.products} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}
