export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const SET_USER_PHOTO = 'SET_USER_PHOTO';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_AGE = 'SET_AGE';
export const SET_SEX = 'SET_SEX';
export const SET_RACE = 'SET_RACE';
export const SET_OCCUPATION = 'SET_OCCUPATION';
export const SET_ORG = 'SET_ORG';
export const setUserDetails = (userName, email, password, age, race, sex, occupation, org) => ({
    type: SET_USER_DETAILS,
    payload: { userName, email, password, age, race, sex, occupation, org }
});

export const setUserPhoto = (photo) => ({
    type: SET_USER_PHOTO,
    payload: photo
});
export const setUserName = (userName) => ({
    type: SET_USER_NAME,
    payload: userName
});

export const setEmail = (email) => ({
    type: SET_EMAIL,
    payload: email
});
export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password
});
export const setAge = (age) => ({
    type: SET_AGE,
    payload: age
});
export const setRace = (race) => ({
    type: SET_RACE,
    payload: race
});
export const setSex = (sex) => ({
    type: SET_SEX,
    payload: sex
});
export const setOccupation = (occupation) => ({
    type: SET_OCCUPATION,
    payload: occupation
});
export const setOrg = (org) => ({
    type: SET_ORG,
    payload: org
});