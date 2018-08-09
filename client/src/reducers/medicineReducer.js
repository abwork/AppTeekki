import { 
    GET_MEDICINES, 
    ADD_MEDICINE, 
    DELETE_MEDICINE,
    UPDATE_MEDICINE, 
    MEDICINES_LOADING 
} from '../actions/types';

const intialState = {
    medicines: [],
    loading: false
}

export default function(state = intialState, action){
    switch(action.type) {
        case GET_MEDICINES:
            return {
                ...state,
                medicines: action.payload,
                loading: false
            };
        case ADD_MEDICINE:
            return {
                ...state,
                medicines: [action.payload, ...state.medicines]
            }; 
        case DELETE_MEDICINE:
            return {
                ...state,
                medicines: state.medicines.filter(medicine => medicine._id !== action.payload)
            };
        case UPDATE_MEDICINE:
            return {
                ...state,
                medicines: action.payload 
            };
        case MEDICINES_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
