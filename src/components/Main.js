import React, { Component } from 'react';
import Header from "./Header";
import Mission from "./Mission";
import Story from "./Story";
import Video from "./Video";
import Store from "./Store";
import Footer from "./Footer";
import { Switch, Route, Redirect } from 'react-router-dom';

export default class Main extends Component {
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
