import React, { Component } from 'react';

import './TaskComponent.scss';
import { TASKS } from '../../data/data';

import { Accordion, Card, Button } from 'react-bootstrap';


class TaskComponent extends Component {

    render() {
        return (
            <div className="tasks">
                <h3>Tasks</h3>
                <hr />
                <ul className="tasks--heading">
                    <li>Task</li>
                    <li>Note</li>
                    <li>Customer</li>
                    <li>Date</li>
                </ul>

                { TASKS.map((task) => {
                    return <Accordion key={task.task}>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    View {task.customer} Profile
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <ul className="tasks--body">
                                    <li>{task.task}</li>
                                    <li>{task.note}</li>
                                    <li>{task.customer}</li>
                                    <li>{task.date}</li>
                                </ul>                 
                                    {task.body}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion> 
                }) }
 
        </div>

        )
    }
}

export default TaskComponent;