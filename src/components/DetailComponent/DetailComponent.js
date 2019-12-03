import React, { Component } from 'react';

import './DetailComponent.scss';
import { Table, Button, Image } from 'react-bootstrap';

import TaskInfoComponent from '../TaskInfoComponent/TaskInfoComponent';
import AddLogComponent from '../AddLogComponent/AddLogComponent';
import { getLocalStorageItem } from '../../services/localStorage';
import phone from '../../assets/phone-contact.svg';

class DetailComponent extends Component {
    constructor(props) {
        super(props)   
        this.state = {
          toggleAddLog: false,
          tasks: [],
          type: ''
        }
    }
    
    componentWillMount () {
        let tasks = getLocalStorageItem('task') || [];
        this.setState({tasks: tasks});
    }

    render() {

        const toogleHandler = (e) => {
            e.preventDefault();
            this.setState({ toggleAddLog: true, type: e.target.id });
        }

        return (
            <div className="detail">
                <TaskInfoComponent></TaskInfoComponent>
                <div className="detail--logs">
                <h3>Log</h3>
                <hr />
                <Table striped bordered hover size="sm">
                    <tbody>
                        <tr>
                            <td><Image src={ phone }  height="30"/></td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                            <td>20/09/2017 09:35</td>
                        </tr>
                { this.state.tasks.map((task) => {
                    return <tr key={task.time}>
                        <td><Image src={task.icon}  height="30"/></td>
                        <td>{ task.task }</td>
                        <td>{ task.time }</td>
                    </tr>            
                }) }
                    </tbody>
                </Table>
                    <div className="detail--buttons">
                        <Button id="call" onClick={(e) => {toogleHandler(e)}} variant="secondary">Add Call</Button>
                        <Button id="note" onClick={(e) => {toogleHandler(e)}}variant="secondary">Add Note</Button>
                    </div>
                </div>
                { this.state.toggleAddLog ? <AddLogComponent type={this.state.type}/> : null }
            </div>
        )
    }
}

export default DetailComponent;