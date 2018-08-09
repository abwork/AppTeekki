import React, { Component } from 'react';
import { 
    Container, 
    ListGroup, 
    ListGroupItem, 
    Button
} from 'reactstrap';
import { 
    CSSTransition, 
    TransitionGroup 
} from 'react-transition-group';
import { connect } from 'react-redux';
import { getMedicines, deleteMedicine } from '../actions/medicineActions';
import PropTypes from 'prop-types';

class MedicineList extends Component {

    componentDidMount() {
        this.props.getMedicines();
    };

    onDeleteClick = id => {
        this.props.deleteMedicine(id);
    };

    render() {
        const { medicines } = this.props.medicine;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="medicine__list">
                        {medicines.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button 
                                  className="remove-btn"
                                  color="danger"
                                  size="sm"
                                  onClick={this.onDeleteClick.bind(this, _id)}
                                >&times; 
                                </Button>    
                                    {name}
                                </ListGroupItem>    
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>  
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