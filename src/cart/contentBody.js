import React, { Component } from 'react';
import { Layout, Fixed } from 'react-layout-pane';
import Flex, { FlexItem } from 'styled-flex-component';
import './Dashboard.css';
import logo from '../static/products/100_1.jpg';



export default class contentBody extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="App">

             
       <img src={logo} alt="Logo" className="image-css" />
                               
            </div>
        );
    }
}