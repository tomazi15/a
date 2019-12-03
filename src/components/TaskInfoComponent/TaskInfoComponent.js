import React, { Component } from 'react';

import './TaskInfoComponent.scss';
import { Image } from 'react-bootstrap'
import man from '../../assets/man-png-icon-4.jpg';

class TaskInfoComponent extends Component {

    render() {
        return (
            <div className="taskInfo">
                <h3>Task Information</h3>
                <hr />
                    <Image src={man} height="70" width="70"  roundedCircle />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        )
    }
}

export default TaskInfoComponent;