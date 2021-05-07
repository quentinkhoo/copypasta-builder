import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react'

import "../styles/Header.css";

class Header extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });

        switch(name) {
            case 'Copy Pasta':
                this.props.history.push('/copypasta-builder');
                break;
            case '299':
                this.props.history.push('/299');
                break;
            default:
                return 'ggwp';
        }

        e.preventDefault()
    } 

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu>
                    <Menu.Item
                        name='Copy Pasta'
                        active={activeItem === 'Copy Pasta'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='299'
                        active={activeItem === '299'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
        );
    }
}

export default Header;
