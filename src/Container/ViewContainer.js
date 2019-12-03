import React, { Component } from 'react';

import './ViewContainer.scss'
import { Container, Row, Col } from 'react-bootstrap';

import TaskComponent from '../components/TaskComponent/TaskComponent';
import DetailComponent from '../components/DetailComponent/DetailComponent'
import SideBarComponent from '../components/SideBarComponent/SideBarComponent';
import BannerComponent from '../components/BannerComponent/BannerComponent';

import { connect } from 'react-redux';

class ViewContainer extends Component {

    render() {

        const { screen } = this.props;
        return (
            <div className="view">
                <Container className="view--gutter" fluid>
                    <Row>
                        <Col xs={2} lg={2}>
                            <SideBarComponent />
                        </Col>
                        <Col xs={10} lg={10}>
                            <BannerComponent></BannerComponent>        
                            { screen ?  <TaskComponent></TaskComponent> : <DetailComponent></DetailComponent>}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        screen: state.screen
    }
}

export default connect(mapStateToProps, null)(ViewContainer);
