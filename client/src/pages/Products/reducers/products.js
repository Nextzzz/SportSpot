import {
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS,
    ERROR_RECEIVE_PRODUCTS,
} from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    isError: false,
    list: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PRODUCTS: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        }
        case RECEIVE_PRODUCTS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                list: action.products,
            };
        }
        case ERROR_RECEIVE_PRODUCTS: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }

        default: return state;
    }
};