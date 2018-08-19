import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMedicines, deleteMedicine } from '../actions/medicineActions';
import PropTypes from 'prop-types';


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
            // <div className="container #eceff1 blue-grey lighten-5">
                <ul className="collapsible">
                    { medicines.map(({_id, name, general_information, side_effects}) => (  
                        <li  key= {_id}>
                          <div className="collapsible-header"><i className="material-icons" onClick={this.onDeleteClick.bind(this, _id)}>delete</i>{name}</div>
                          <div className="collapsible-body">
                            <p>{general_information}</p>
                            <p className="red-text"><i className="material-icons">warning</i>Side effects: {side_effects}</p>
                          </div>
                        </li>
                    ))}
                </ul>

            // </div>
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