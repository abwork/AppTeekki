import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addMedicine } from '../actions/medicineActions';

class MedicineModal extends Component {
    state = {
        modal: false,
        name: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newMedicine = {
            name: this.state.name
        };

        //Add medicine using addMedicine action
        this.props.addMedicine(newMedicine);

        //Close modal
        this.toggle();
    };

    render() {
        return(
            <div>
                <Button
                   color="dark"
                   style={{marginBottom: '2rem'}}
                   onClick={this.toggle}
                >Add to List
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add medicine to list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="medicine">Add</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="medicine"
                                    placeholder="Add new medicine"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginBottom: '2rem'}}
                                    block
                                >Add to List
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    medicine: state.medicine
});

export default connect(mapStateToProps, { addMedicine })(MedicineModal);