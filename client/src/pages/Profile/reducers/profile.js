import {
    REQUEST_PROFILE,
    RECEIVE_PROFILE,
    ERROR_RECEIVE_PROFILE,
} from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    isError: false,
    profile: {
        profile: {
            name: 'xz',
            surname: 'sxz',
            email: 'xz@mail.com'
        }
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PROFILE: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        }
        case RECEIVE_PROFILE: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                profile: action.profile,
            };
        }
        case ERROR_RECEIVE_PROFILE: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        }

        default: return state;
    }
};