import React, { Component } from 'react';
import Header from "./Header";
import Home from "./Home"
import Contact from "./Contact";
import Media from "./Media";
import Footer from "./Footer";
import Shop from "./Shop";
import { STOREITEMS } from "../storeitems";
import { Switch, Route, Redirect } from 'react-router-dom';

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeitems: STOREITEMS
        };
        
/* I want to have my main component manage all my state for my home component so I can pass it down. */
    }
    render() {

        const HomePage = () => {
            return (
                <Home  />
            )
        }

        

        return (
            <div>
                <Header />
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/contactus' render={ () => <Contact component={Contact}  />}/>
                            <Route exact path='/media' render={ () => <Media component={Media} />}/>
                            <Route exact path='/shop' render={ () => <Shop component={Shop} storeitems={this.state.storeitems} />}/>
                            <Redirect to ='/home' />
                        </Switch>
                <Footer />
            </div>
        )
    }
}
