import React, { Component } from 'react';
import { Layout, Fixed } from 'react-layout-pane';
import Flex, { FlexItem } from 'styled-flex-component';
import './Dashboard.css';
import logo from '../static/bag-icon.png';
import content from './contentBody'
import Products from './Products';


export default class Dasboard extends Component {
    constructor() {
        super();
       // this.state = {};
    }

    state = {
    products: [
      { id: 'asfa1', name: 'Max', price: 28 },
      { id: 'vasdf1', name: 'Manu', price: 29 },
      { id: 'asdf11', name: 'Stephanie', price: 26 }
    ]
  };

    render() {
        return (
            <div className="App">
                <Layout type="column">
                    <Fixed className="header">
                            <Flex center full>
                                <FlexItem order="1">Shopping cart</FlexItem>
                                <FlexItem order="2">
                                <img src={logo} alt="Logo" className="image-css" />
                                </FlexItem>
                            </Flex>
                    </Fixed>
                    <Fixed className="contentBody">
                        <Layout type="row">
                            <Fixed className="sidebar">Fixed Sidebar</Fixed>
                            <Flex className="content">Flex Body
                            <Products 
                             products={this.state.products}
                            />
                            </Flex>
                        </Layout>
                        </Fixed>
                </Layout>
            </div>
        );
    }
}