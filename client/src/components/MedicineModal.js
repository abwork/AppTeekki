import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
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
            name: this.state.name,
            general_information: this.state.general_information,
            side_effects: this.state.side_effects
        };

        //Add medicine using addMedicine action
        this.props.addMedicine(newMedicine);

        //Close modal
        this.toggle();
    };

    render() {
        return(
            <div>
                {/* <a  onClick={this.toggle} className="btn-floating btn-large waves-effect waves-light black"><i className="material-icons"></i></a>  */}
                <a class="waves-effect waves-light btn-large" onClick={this.toggle}><i class="material-icons left">add</i>ADD NEW</a>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>ADD MEDICINE TO LIST</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="name"
                                    id="medicine"
                                    placeholder="Enter medicine name"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="text"
                                    name="general_information"
                                    id="medicine"
                                    placeholder="Enter general information"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="text"
                                    name="side_effects"
                                    id="side_effects"
                                    placeholder="Enter side effects"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginBottom: '2rem', marginTop: '2rem'}}
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