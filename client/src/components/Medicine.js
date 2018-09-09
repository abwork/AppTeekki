import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Medicine extends Component {
    render() {
        // const medicine = this.props.getMedicine(this.props._id);
   
        return (
            <div className="container">
                <div className="active__medicine">
                    <h3 className="active__medicine__name">Active Medicine Name</h3>
                    <h4 className="active__medicine__general_information">
                        General Information goes in here...
                    </h4>
                    <button className="active__medicine__btn">
                        <Link to={{
                            pathname: `/`
                        }}>Back
                        </Link>
                    </button>
                </div>
            </div>
        );
    }
};

export default Medicine;