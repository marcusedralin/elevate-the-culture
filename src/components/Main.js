import React, { Component } from 'react';
import Header from "./Header";
import Mission from "./Mission";
import Story from "./Story";
import Video from "./Video";
import Store from "./Store";
import Footer from "./Footer";
import { HEADERBG } from "../shared/headerBg"
import { Switch, Route, Redirect } from 'react-router-dom';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            headerBg : HEADERBG
        };
    }
    render() {
        return (
            <div>
                <Header />
                <Mission />
                <Story />
                <Video />
                <Store />
                <Footer />
            </div>
        )
    }
}
