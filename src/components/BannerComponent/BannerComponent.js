import React, { Component } from 'react';

import './BannerComponent.scss';
import { Image } from 'react-bootstrap'

import alpha  from '../../assets/AlfaLogo.svg'

class BannerComponent extends Component {

    render() {
        return (
            <div className="banner">
                <Image className="banner--logo" src={alpha} height="80"/>
            </div>
        )
    }
}

export default BannerComponent;