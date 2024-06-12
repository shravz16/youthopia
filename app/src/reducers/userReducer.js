import { SET_USER_DETAILS, SET_USER_NAME, SET_USER_PHOTO, SET_EMAIL, SET_PASSWORD, SET_AGE, SET_SEX, SET_RACE, SET_OCCUPATION, SET_ORG } from '../actions/userActions.js';

const initialState = {
    userName: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password',
    age: 2,
    sex: 'male',
    race: 'india',
    occupation: 'occupation',
    org: '--',
    photo: null
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DETAILS:
            return {
                ...state,
                userName: action.payload.userName,
                email: action.payload.email,
                password: action.payload.password,
                occupation: action.payload.occupation,
                age: action.payload.age,
                sex: action.payload.sex,
                race: action.payload.race,
                org: action.payload.org,

            };
        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.payload
            };
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.payload,
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        case SET_AGE:
            return {
                ...state,
                age: action.payload,
            };
        case SET_SEX:
            return {
                ...state,
                sex: action.payload,
            };
        case SET_RACE:
            return {
                ...state,
                race: action.payload,
            };
        case SET_OCCUPATION:
            return {
                ...state,
                occupation: action.payload,
            };
        case SET_ORG:
            return {
                ...state,
                org: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;