import React, { Component } from 'react';

import './AddLogComponent.scss';
import { Form, Button, Modal,  } from 'react-bootstrap';
import { setLocalStorageItem } from '../../services/localStorage';
import phone from '../../assets/phone-contact.svg';
import note from '../../assets/note.svg';

class AddLogComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          log: {
              task: '',
              time: '',
              icon: ''
          },
          showModal: true
        }
    }

    render() {

        const saveLog = (e) => {
            e.preventDefault();
            setLocalStorageItem(this.state.log);
            closeModal();
        }

        const handleChange = (e, icon) => {
            e.preventDefault();
            let iconType;
            if (this.props.type === 'call') {
                iconType = phone;
            } else {
                iconType = note;
            }

            this.setState({log: {icon: iconType ,task: e.target.value, time: new Date().toLocaleString()}});
        }

        const closeModal = () => {
            this.setState({showModal: false}); 
        }

        return (
            <div className="addLog">
                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        <Modal.Title>Enter Log</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Enter Log</Form.Label>
                            <Form.Control onChange={(e) => handleChange(e)}  placeholder="Enter Log"/>
                            <Form.Text className="text-muted">
                                Please enter customer log
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={(e) => { saveLog(e) }}  variant="primary"> Save Changes </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddLogComponent;