import {
    getJson,
    postJson,
} from 'requests';
import {
    clearToken,
    getToken,
    setToken,
} from 'token';
import config from 'config';

import {
    ERROR_RECEIVE_USER,
    ERROR_SIGN_IN,
    ERROR_SIGN_OUT,
    ERROR_SIGN_UP,
    RECEIVE_USER,
    REQUEST_SIGN_IN,
    REQUEST_SIGN_OUT,
    REQUEST_SIGN_UP,
    REQUEST_USER,
    SUCCESS_SIGN_IN,
    SUCCESS_SIGN_OUT,
    SUCCESS_SIGN_UP,
} from '../constants/actionTypes';

const errorReceiveUser = () => ({
    type: ERROR_RECEIVE_USER,
});

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    payload: user,
});

const requestUser = () => ({
    type: REQUEST_USER,
});

const errorSignIn = () => ({
    type: ERROR_SIGN_IN,
});

const requestSignIn = () => ({
    type: REQUEST_SIGN_IN,
});

const successSignIn = payload => ({
    payload,
    type: SUCCESS_SIGN_IN,
});

const requestSignOut = () => ({
    type: REQUEST_SIGN_OUT,
});

const successSignOut = () => ({
    type: SUCCESS_SIGN_OUT,
});

const errorSignOut = errors => ({
    payload: errors,
    type: ERROR_SIGN_OUT,
});

///

const getUser = () => {
    const {
        BASE_URL,
        USERS_SERVICE,
    } = config;

    return getJson({
        url: `${BASE_URL}${USERS_SERVICE}`
    }).catch(() => {
        const storage = {
            'token1': {
                email: 'email1@mail.com',
                role: 'Everyone',
            },
            'token2': {
                email: 'email2@mail.com',
                role: 'Everyone',
            }
        };
        const token = getToken();
        return storage[token];
    })
};

const signIn = ({
    email,
    password
}) => {
    const {
        BASE_URL,
        USERS_SERVICE,
    } = config;
    return postJson({
        body: {
            email,
            password,
        },
        url: `${BASE_URL}${USERS_SERVICE}`,
    }).catch(() => {
        const storage = {
            'email1@mail.com_123456': {
                role: 'Everyone',
                email: 'email1@mail.com',
                token: 'token1'
            },
            'email2@mail.com_654321': {
                role: 'Everyone',
                email: 'email2@mail.com',
                token: 'token2'
            }
        };
        return storage[`${email}_${password}`];
    })
};

const signOut = () => {
    const {
        BASE_URL,
        USERS_SERVICE,
    } = config;

    return postJson({
        url: `${BASE_URL}${USERS_SERVICE}/signOut`,
    }).catch(() => {
        // TODO: this catch() is just a stub, which should be removed
    });
};

///

export const fetchUser = () => (dispatch) => {
    if (getToken()) {
        dispatch(requestUser())
        return getUser({
            dispatch
        }).then(user => dispatch(receiveUser(user)))
            .catch(() => dispatch(errorReceiveUser()))
    }
};

export const fetchSignIn = ({
    email,
    password,
}) => (dispatch) => {
    dispatch(requestSignIn());
    return signIn({
        email,
        password,
    }).then((response) => {
        setToken(response.token);
        dispatch(successSignIn(response))
    }).catch(() => dispatch(errorSignIn()));
};

export const fetchSignOut = () => (dispatch) => {
    dispatch(requestSignOut());
    return signOut()
        .then(() => {
            clearToken();
            dispatch(successSignOut());
        }).catch(() => dispatch(errorSignOut()))
};