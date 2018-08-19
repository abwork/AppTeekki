import axios from 'axios';
import { 
    GET_MEDICINES,
    GET_MEDICINE,
    ADD_MEDICINE, 
    DELETE_MEDICINE,
    UPDATE_MEDICINE, 
    MEDICINES_LOADING 
} from './types';

//Get all the medicines in the list
export const getMedicines = () => dispatch => {
    dispatch(setMedicinesLoading());
    axios.get('api/medicines').then(res => 
        dispatch({
            type: GET_MEDICINES,
            payload: res.data
        })
    );
};

//Get a medicine from the list
export const getMedicine = id => dispatch => {
    axios.get(`api/medicines/${id}`).then(res => 
        dispatch({
            type: GET_MEDICINE,
            payload: res.data
        })
    );
}; 

//Add a new medicine to the list
export const addMedicine = medicine => dispatch => {
    axios.post('./api/medicines', medicine).then(res =>
        dispatch({
            type: ADD_MEDICINE,
            payload: res.data
        })
    );
};

//Remove medicine from the list
export const deleteMedicine = id => dispatch => {
    axios.delete(`api/medicines/${id}`).then(res => 
        dispatch({
            type: DELETE_MEDICINE,
            payload: id
        })
    );
}; 

//Update a medicine in the list
export const updateMedicine = id => dispatch => {
    axios.put(`./api/medicines/${id}`).then( res =>
        dispatch({
            type: UPDATE_MEDICINE
        })
    );
};

//Loading the data from our lab (mLab)
export const setMedicinesLoading = () => {
    return {
        type: MEDICINES_LOADING
    };
};