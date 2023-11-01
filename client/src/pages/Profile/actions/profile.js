import { getJson } from 'requests';
import {
    REQUEST_PROFILE,
    RECEIVE_PROFILE,
    ERROR_RECEIVE_PROFILE,
} from './actionTypes';
import config from 'config';

const requestProfile = () => ({
    type: REQUEST_PROFILE,
});
const receiveProfileAction = (profile) => ({
    type: RECEIVE_PROFILE,
    profile,
});
const errorReceiveProfile = () => ({
    type: ERROR_RECEIVE_PROFILE,
});

const getProfile = ({ url }) => {
    console.log(`GET ${url}`);
    return getJson({ url })
        .catch(() => {
            return {
                profile: {
                    name: "Yarik",
                    surname: "Popovych",
                    email: "email1@gmail.com"
                }
            }
        });
}

const receiveProfile = () => async (dispatch) => {
    dispatch(requestProfile());
    await new Promise(r => setTimeout(r, 1000));
    const url = `${config.BASE_URL}${config.PROFILE_SERVICE}`;
    return getProfile({url})
        .then((data) => {
            dispatch(receiveProfileAction(data.profile))
        })
        .catch(() => dispatch(errorReceiveProfile()));

};

export default {
    receiveProfile,
};