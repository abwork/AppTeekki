import axios from 'axios';
import { 
    GET_MEDICINES,
    ADD_MEDICINE, 
    DELETE_MEDICINE,
    UPDATE_MEDICINE, 
    MEDICINES_LOADING 
} from './types';

export const getMedicines = () => dispatch => {
    dispatch(setMedicinesLoading());
    axios.get('api/medicines').then(res => 
        dispatch({
            type: GET_MEDICINES,
            payload: res.data
        })
    );
};

export const addMedicine = medicine => dispatch => {
    axios.post('./api/medicines', medicine).then(res =>
        dispatch({
            type: ADD_MEDICINE,
            payload: res.data
        })
    );
};

export const deleteMedicine = id => dispatch => {
    axios.delete(`api/medicines/${id}`).then(res => 
        dispatch({
            type: DELETE_MEDICINE,
            payload: id
        })
    );
}; 

export const updateMedicine = id => dispatch => {
    axios.put(`./api/medicines/${id}`).then( res =>
        dispatch({
            type: UPDATE_MEDICINE
        })
    );
};

export const setMedicinesLoading = () => {
    return {
        type: MEDICINES_LOADING
    };
};