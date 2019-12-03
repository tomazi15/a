import React, { Component } from 'react';

import './SideBarComponent.scss';
import { Nav, Tab } from 'react-bootstrap'

import { loadScreen } from '../../actions';
import { connect } from 'react-redux';

class SideBarComponent extends Component {
    render() {
        const { loadScreen } = this.props;

        const renderScreen = (e) => {
            e.preventDefault();
            switch (e.target.id) {
                case 'tabs-tab-first':
                    loadScreen(true);
                    break;
                case 'tabs-tab-second':
                    loadScreen(false);
                    break;
                default: loadScreen();
            }
        }

        return (
            <aside className="aside" id="aside">
                <h2><span className="aside--title">Notes App</span></h2>
                <Tab.Container id="tabs" defaultActiveKey="first">
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first" onClick={(e) => {renderScreen(e)}}>Task Index</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second" onClick={(e) => {renderScreen(e)}}>Task Detail</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Tab.Container>                
            </aside>    
        )
    }
}

const mapDispatchToProps = () => {
    return {
        loadScreen
    }
}

export default connect(null, mapDispatchToProps())(SideBarComponent);