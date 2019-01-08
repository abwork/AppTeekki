import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMedicines, deleteMedicine } from '../actions/medicineActions';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';


class MedicineList extends Component {

    componentWillMount() {
        this.props.getMedicines();
    };

    onDeleteClick = id => {
        this.props.deleteMedicine(id);
    };

    render() {
        const { medicines } = this.props.medicine;
        return(
            <ul className="collapsible">
                { medicines.map(({_id, name, general_information, side_effects}) => (  
                    <li  key= {_id}>
                        <div className="collapsible-header">
                            <div className="medicine__name">
                                {name}
                            </div>
                            <div className="delete__btn">
                                <a onClick={this.onDeleteClick.bind(this, _id)} >
                                    <Fab color="secondary" position="right" aria-label="Delete" size="small" onClick={this.toggle} className="add__medicine">
                                        <DeleteIcon />
                                    </Fab>
                                </a>
                            </div>
                        </div>
                        <div className="collapsible-body">
                        <p>{general_information}</p>
                        <p className="red-text"><i className="material-icons">warning</i>Side effects: {side_effects}</p>
                        </div>
                    </li>
                ))}
            </ul>

        );
    }
}

MedicineList.propTypes = {
    getMedicines: PropTypes.func.isRequired,
    medicine: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    medicine: state.medicine
});

export default connect(mapStateToProps, { getMedicines, deleteMedicine })(MedicineList); 