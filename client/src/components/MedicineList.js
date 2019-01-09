import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMedicines, deleteMedicine } from '../actions/medicineActions';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const ExpansionPanel = withStyles({
    root: {
      border: '1px solid rgba(0,0,0,.125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
    },
    expanded: {
      margin: 'auto',
    },
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0,0,0,.03)',
      borderBottom: '1px solid rgba(0,0,0,.125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(props => <MuiExpansionPanelSummary {...props} />);
  
  ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing.unit * 2,
    },
  }))(MuiExpansionPanelDetails);
  

class MedicineList extends Component {

    componentWillMount() {
        this.props.getMedicines();
    };

    state = {
        expanded: 'panel',
      };
    
    handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };
          
    onDeleteClick = id => {
        this.props.deleteMedicine(id);
    };

    
    render() {
        const { medicines } = this.props.medicine;
        const { expanded } = this.state;

        return(
            <div>
                { medicines.map(({_id, name, general_information, side_effects}) => (  
                    <ExpansionPanel expanded={expanded === _id } onChange={this.handleChange(_id)}>
                        <ExpansionPanelSummary className="panel__header">
                            <div className="delete__btn">
                                <a onClick={this.onDeleteClick.bind(this, _id)} >
                                    <Fab color="secondary" position="right" aria-label="Delete" size="small" onClick={this.toggle} className="add__medicine">
                                        <DeleteIcon />
                                    </Fab>
                                </a>
                            </div>
                            <div>
                                <Typography variant="h6" className="medicine__name"> 
                                    {name}
                                </Typography>                            
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className="panel__body">
                            <Typography variant="subtitle1">
                                <div>{general_information}</div>
                                <div><Icon>star</Icon>Side effects: {side_effects}</div>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}
            </div>

        );
    }
}

MedicineList.propTypes = {
    getMedicines: PropTypes.func.isRequired,
    medicine: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    medicine: state.medicine
});

export default connect(mapStateToProps, { getMedicines, deleteMedicine })(MedicineList); 
